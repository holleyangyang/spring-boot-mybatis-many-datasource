package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.PersonInfo;
import com.example.mapper.PersonInfoMapper;
import com.example.util.PageRequest;
import com.example.util.PageResult;
import com.example.util.PageUtils;
import com.example.util.Result;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/manager/personInfo")
@RestController
public class PersonInfoController {
 
	@Resource
	private PersonInfoMapper personInfoMapper;

 
	
	
	/**
	 * 新增消息
	 * @return
	 */
	@PostMapping("/deletePersonInfoForId")
	public Result deletePersonInfoForId(HttpServletRequest request, HttpServletResponse response,@RequestBody PersonInfo personInfo) {
 		Result result = new Result();
		result.setCode("0");
		result.setMsg("success");
		if(personInfoMapper.deletePersonInfoForId(personInfo)==1) {
			result.setCode("0");
			result.setMsg("success");
		}else {
			result.setCode("-1");
			result.setMsg("fail");
		}
	  return result;
	}
	/**
	 * 新增消息
	 * @return
	 */
	@PostMapping("/addPersonInFo")
	public Result addPersonInFo(HttpServletRequest request, HttpServletResponse response,@RequestBody PersonInfo personInfo) {
 		Result result = new Result();
		result.setCode("0");
		result.setMsg("success");
		if(personInfoMapper.addPersonInfo(personInfo)==1) {
			result.setCode("0");
			result.setMsg("success");
		}else {
			result.setCode("-1");
			result.setMsg("fail");
		}
	  return result;
	}
	@PostMapping("/getPersonInfoList")
	public PageResult getAllUser(@RequestBody PersonInfo personInfo,int pageNum,int pageSize) {
         PageRequest pageRequest = new PageRequest();
         
         pageRequest.setPageNum(pageNum);
         pageRequest.setPageSize(pageSize);
          PageResult  pageResult=PageUtils.getPageResult(pageRequest, getPageInfo(pageRequest,personInfo));
         pageResult.setCode("0");
		return pageResult;

	}
	
	
	
	
   private PageInfo<PersonInfo> getPageInfo(PageRequest pageRequest,PersonInfo personInfo) {
        int pageNum = pageRequest.getPageNum();
        int pageSize = pageRequest.getPageSize();
        PageHelper.startPage(pageNum, pageSize);
        List<PersonInfo> sysMenus = personInfoMapper.getPersonInfoList(personInfo);
        
        return new PageInfo<PersonInfo>(sysMenus);
    }
	
}