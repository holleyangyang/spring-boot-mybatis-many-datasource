package com.example.config.constant;

/**
 * 数据源常量
 *
 * @author 码农猿
 * @date 2019-03-25
 */
public class DataSourceConstant {

    //************** 数据源1 配置 **************
    /**
     * mapper 接口包地址
     */
    public static final String DB_BASE_PACKAGES = "com.example.mapper";
    /**
     * 数据源配置 前缀
     */
    public static final String DB_DATA_SOURCE_PREFIX = "spring.datasource";
    /**
     * mapper xml文件地址
     */
    public static final String DB_MAPPER_LOCATION = "classpath:mybatis/mapper/*.xml";


   
}