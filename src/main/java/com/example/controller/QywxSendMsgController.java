package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.db1.QywxSendMessgeMapper;
import com.example.util.HttpClientUtil;
import com.example.util.JsonUtil;
import com.example.util.RandomValidateCodeUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/qyh/msg")
@RestController
public class QywxSendMsgController {
 
	@Resource
	private QywxSendMessgeMapper qywxSendMessgeMapper;

 
    /**
     * 消息发送总调度
     * @return
     */
	@PostMapping("/sendMsg")
	public List<Map> sendMsg() {

		List<Map<String, Object>> listAgentAll = qywxSendMessgeMapper.listAgentAll();
		for (Map<String, Object> tAgentMap : listAgentAll) {
			String APPID = (String) tAgentMap.get("APPID");
			String CORPSECRET = (String) tAgentMap.get("CORPSECRET");
			String url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=" + APPID +"&corpsecret=" + CORPSECRET;
			System.out.println(url);
			String token = HttpClientUtil.doPost(url);
			Map<String, Object> test = JsonUtil.parseJSON2Map(token);
			System.out.println(test);
			List<Map<String, Object>> list = qywxSendMessgeMapper.listAll();

			for (Map<String, Object> map : list) {

				String SEND_MESSAGE_CONTENT = (String) map.get("SEND_MESSAGE_CONTENT");
				String recordId = (String) map.get("RECORD_ID");
				String access_token = (String) test.get("access_token");
				String sendMessageUrl = "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=" + access_token;
				System.out.println(sendMessageUrl);
				try {
					String result = HttpClientUtil.doPostJson(sendMessageUrl, SEND_MESSAGE_CONTENT, "");
					Map<String, String> mapP = new HashMap<String, String>();
					mapP.put("recordId", recordId);
					mapP.put("sendMessageResult", result);
					qywxSendMessgeMapper.insertQywxSendMessageRecorded(mapP);
					qywxSendMessgeMapper.delete(mapP);

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	/**
	 * 新增消息
	 * @return
	 */
	@GetMapping("/addMsg")
	public void addMsg(HttpServletRequest request, HttpServletResponse response) {
		Map<String, String> mapP = new HashMap<String, String>();
		mapP.put("appid", "wxfd3c98939b419c4c");
		mapP.put("agentid", "9");
		mapP.put("send_message_content", "{}");
		mapP.put("plan_send_time", "2020-3-8 01:01:01");
		mapP.put("create_name", "杨洋");
		mapP.put("source", "测试");
		mapP.put("state", "1");
		qywxSendMessgeMapper.insertQywxSendMessageRecord(mapP);
	 
	}
}