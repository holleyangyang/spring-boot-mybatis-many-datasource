package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.db1.QywxNewReportInfoMapper;
import com.example.mapper.db1.QywxSendMessgeMapper;
import com.example.util.HttpClientUtil;
import com.example.util.JsonUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/manager")
@RestController
public class QywxNewReportInfoDataController {
	@Resource
	private QywxNewReportInfoMapper qywxNewReportInfoMapper;
	@Resource
	private QywxSendMessgeMapper qywxSendMessgeMapper;

	@PostMapping("/qywxNewReportInfo/list")
	public Map<String, Object> getAllUser1() {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("success", true);
		result.put("code", "0");
		result.put("msg", "");
		result.put("count", qywxNewReportInfoMapper.count());
		result.put("data", qywxNewReportInfoMapper.listAll());
		return result;
	}

	@PostMapping("/qywxNewReportInfo/list1")
	public List<Map> getAllUser() {

		return qywxNewReportInfoMapper.listAll();

	}
   
}