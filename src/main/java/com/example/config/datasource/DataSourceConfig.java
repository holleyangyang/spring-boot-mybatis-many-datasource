package com.example.config.datasource;

import com.alibaba.druid.pool.DruidDataSource;
import com.example.config.constant.DataSourceConstant;
import com.github.pagehelper.PageInterceptor;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import java.util.Properties;

import javax.sql.DataSource;


/**
 * 数据源1 > 配置
 *
 * @author 码农猿
 * @date 2019-03-25
 * 说明一下两个注解的作用
 * -- @Primary：在众多相同的bean中，优先选择用@Primary注解的bean（该注解加在各个bean上）
 * -- @Qualifier：在众多相同的bean中，@Qualifier指定需要注入的bean（该注解跟随在@Autowired后）
 */
@Configuration
@MapperScan(basePackages = DataSourceConstant.DB_BASE_PACKAGES, sqlSessionTemplateRef = "test1SqlSessionTemplate")
public class DataSourceConfig {

    /**
     * 数据源配置
     * 使用的连接池是 DruidDataSource
     * <p>
     * 注解ConfigurationProperties
     * 作用就是将全局配置文件中的属性值注入到DruidDataSource 的同名参数
     */
	
	
	
    @Primary
    @Bean(name = "test1DataSource")
    @Qualifier("test1DataSource")
    @ConfigurationProperties(prefix = DataSourceConstant.DB_DATA_SOURCE_PREFIX)
    public DataSource testDataSource() {
        //DataSourceBuilder.create().build() 默认数据源类型是 org.apache.tomcat.jdbc.pool.DataSource
        //这里指定使用类型 -- 阿里DruidDataSource 连接池
        return DataSourceBuilder.create().type(DruidDataSource.class).build();
    }


    /**
     * 创建 SqlSessionFactory 工厂
     */
    @Primary
    @Bean(name = "test1SqlSessionFactory")
    public SqlSessionFactory testSqlSessionFactory(@Qualifier("test1DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
       
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(DataSourceConstant.DB_MAPPER_LOCATION));
        org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
    	configuration.setCallSettersOnNulls(true);
    	bean.setConfiguration(configuration);
    
    	
    	 //分页插件
        Interceptor interceptor = new PageInterceptor();
        Properties properties = new Properties();
        //数据库
        properties.setProperty("helperDialect", "oracle");
        //是否将参数offset作为PageNum使用
        properties.setProperty("offsetAsPageNum", "true");
        //是否进行count查询
        properties.setProperty("rowBoundsWithCount", "true");
        //是否分页合理化
        // 注意的是reasonable参数，表示分页合理化，默认值为false。
        //如果该参数设置为 true 时，pageNum<=0 时会查询第一页，pageNum>pages（超过总数时），会查询最后一页。默认false 时，直接根据参数进行查询。
        properties.setProperty("reasonable", "false");
      //  interceptor.setProperties(properties);
        bean.setPlugins(new Interceptor[] {interceptor});
      //  bean.setConfigurationProperties(properties);
    	
    	
        return bean.getObject();
    }

    /**
     * 事务管理
     */
    @Primary
    @Bean(name = "test1TransactionManager")
    public DataSourceTransactionManager testTransactionManager(@Qualifier("test1DataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    /**
     * MyBatis提供的持久层访问模板化的工具
     * 线程安全，可通过构造参数或依赖注入SqlSessionFactory实例
     */
    @Primary
    @Bean(name = "test1SqlSessionTemplate")
    public SqlSessionTemplate testSqlSessionTemplate(@Qualifier("test1SqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

}
