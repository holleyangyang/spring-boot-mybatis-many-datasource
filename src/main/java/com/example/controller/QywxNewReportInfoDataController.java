package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.db1.QywxNewReportInfoMapper;
import com.example.mapper.db1.QywxSendMessgeMapper;
import com.example.util.HttpClientUtil;
import com.example.util.JsonUtil;
import com.example.util.PageRequest;
import com.example.util.PageResult;
import com.example.util.PageUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
 
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

	@GetMapping("/qywxNewReportInfo/list1")
	public PageResult getAllUser() {
         PageRequest pageRequest = new PageRequest();
         pageRequest.setPageNum(2);
         pageRequest.setPageSize(2);
		return PageUtils.getPageResult(pageRequest, getPageInfo(pageRequest));

	}
	   private PageInfo<Map> getPageInfo(PageRequest pageRequest) {
	        int pageNum = pageRequest.getPageNum();
	        int pageSize = pageRequest.getPageSize();
	        PageHelper.startPage(pageNum, pageSize);
	        List<Map> sysMenus = qywxNewReportInfoMapper.listAll();
	        
	        return new PageInfo<Map>(sysMenus);
	    }
}