package com.example.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

/**
 * 测试 数据源 1
 * <p>
 * 人员信息mapper接口
 *
 * @author 码农猿
 * @date 2019-03-25 23:08:13
 */
public interface QywxSendMessgeMapper {


	/**
	 * 将已经发送过的数据写入发送记录表
	 * @param map
	 * @return
	 */
	@Insert(value= {" insert into qywx_send_message_recorded  (record_id, appid, agentid, send_message_content, plan_send_time, create_time, create_name, actually_send_time, send_message_result)" + 
			" select record_id, appid, agentid, send_message_content, plan_send_time, create_time, create_name, sysdate, #{sendMessageResult} from qywx_send_message_record where record_id=#{recordId}"})
    int insertQywxSendMessageRecorded(Map<String,String> map);
    /**
     * 新增待发送的消息发送
     * @param map
     * @return
     */
	@Insert(value= {" insert into qywx_send_message_record  (record_id, appid, agentid, send_message_content, plan_send_time, create_time, create_name,SOURCE,state)" + 
	"values (QYWX_SEND_MESSAGE_RECORD_SEQ.Nextval, #{appid}, #{agentid}, #{send_message_content}, to_date(#{ plan_send_time},'yyyy-mm-dd hh24:mi:ss'), sysdate, #{create_name},#{source},#{state})"})
    int insertQywxSendMessageRecord(Map<String,String> map);

    /**
     * 新增接口
     *
     * @param userInfo 人员信息实体
     * @return 新增的行数
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
	@Delete(value= {"delete from qywx_send_message_record where record_id=#{recordId}"})
    int delete(Map<String,String> map);
    /**
     * 查询所有 人员信息
     *
     * @return 人员信息 列表
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
    @Select(value = { "select * from qywx_send_message_record  where state=1 " })
    List<Map<String,Object>> listAll();
    /**
     * 查询所有 人员信息
     *
     * @return 人员信息 列表
     * @author 码农猿
     * @date 2019-03-25 23:08:13
     */
    @Select(value = { "select * from qywx_agent_info  where state=1" })
    List<Map<String,Object>> listAgentAll();
 
    
    
}
