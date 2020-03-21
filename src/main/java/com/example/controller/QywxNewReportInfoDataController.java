package com.example.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mapper.QywxSendMessgeMapper;
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
	private QywxSendMessgeMapper qywxSendMessgeMapper;

 
	@GetMapping("/qywxNewReportInfo/list1")
	public PageResult getAllUser() {
         PageRequest pageRequest = new PageRequest();
         pageRequest.setPageNum(2);
         pageRequest.setPageSize(2);
         PageResult  pageResult=PageUtils.getPageResult(pageRequest, getPageInfo(pageRequest));
         pageResult.setCode("0");
		return pageResult;

	}
	   private PageInfo<Map<String,Object>> getPageInfo(PageRequest pageRequest) {
	        int pageNum = pageRequest.getPageNum();
	        int pageSize = pageRequest.getPageSize();
	        PageHelper.startPage(pageNum, pageSize);
	        List<Map<String,Object>> sysMenus = qywxSendMessgeMapper.listAll();
	        
	        return new PageInfo<Map<String,Object>>(sysMenus);
	    }
}