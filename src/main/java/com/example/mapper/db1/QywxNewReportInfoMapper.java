package com.example.mapper.db1;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Select;

import com.example.entity.UserInfo;

/**
 * 测试 数据源 1
 * <p>
 * 人员信息mapper接口
 *
 * @author 码农猿
 * @date 2019-03-25 23:08:13
 */
public interface QywxNewReportInfoMapper {


    /**
     * 新增接口
     *
     * @param userInfo 人员信息实体
     * @return 新增的行数
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
    int insert(UserInfo userInfo);


    /**
     * 查询所有 人员信息
     *
     * @return 人员信息 列表
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
    @Select(value = { "select * from QYWX_NEW_REPORT_INFO " })
    List<Map> listAll();

    @Select(value = { "select count(*) from QYWX_NEW_REPORT_INFO " })
    int count();


}
