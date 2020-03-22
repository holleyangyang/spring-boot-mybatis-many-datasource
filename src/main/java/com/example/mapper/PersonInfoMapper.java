package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.example.entity.PersonInfo;

/**
 * 测试 数据源 1
 * <p>
 * 人员信息mapper接口
 *
 * @author 码农猿
 * @date 2019-03-25 23:08:13
 */
public interface PersonInfoMapper {


    /**
     * 新增接口
     *
     * @param userInfo 人员信息实体
     * @return 新增的行数
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
	@Insert(" INSERT INTO oasysdb.person_info" + 
			"(xingming," + 
			"yingwenming," + 
			"chushengriqi," + 
			"xingbie," + 
			"zuji," + 
			"zhengjianxinxi," + 
			"chutaoriqi," + 
			"chutaoguojia," + 
			"suozaizuzhi," + 
			"zhiwei," + 
			"suoshuleibie," + 
			"shoujiaoyuqingkuang," + 
			"jiatingqingkuang," + 
			"youxiangdizhi," + 
			"qitaxixi," + 
			"zaijingneichuliqingkuang," + 
			"canyuhuodong," + 
			"fumianziliao,tupiandizhi)" + 
			"VALUES" + 
			"(" + 
			"#{xingming}," + 
			"#{yingwenming}," + 
			"#{chushengriqi}," + 
			"#{xingbie}," + 
			"#{zuji}," + 
			"#{zhengjianxinxi}," + 
			"#{chutaoriqi}," + 
			"#{chutaoguojia}," + 
			"#{suozaizuzhi}," + 
			"#{zhiwei}," + 
			"#{suoshuleibie}," + 
			"#{shoujiaoyuqingkuang}," + 
			"#{jiatingqingkuang}," + 
			"#{youxiangdizhi}," + 
			"#{qitaxixi}," + 
			"#{zaijingneichuliqingkuang}," + 
			"#{canyuhuodong}," + 
			"#{fumianziliao},#{tupiandizhi})")
    int addPersonInfo(PersonInfo personInfo);
    @Select("select * from oasysdb.person_info")
    List<PersonInfo> getPersonInfoList(PersonInfo personInfo);
    @Delete("delete from oasysdb.person_info where id=#{id}")
    int deletePersonInfoForId(PersonInfo personInfo);
}
