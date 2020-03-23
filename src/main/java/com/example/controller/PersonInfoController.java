package com.example.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	 * 
	 * @return
	 */
	@PostMapping("/deletePersonInfoForId")
	public Result deletePersonInfoForId(HttpServletRequest request, HttpServletResponse response,
			@RequestBody PersonInfo personInfo) {
		Result result = new Result();
		result.setCode("0");
		result.setMsg("success");
		if (personInfoMapper.deletePersonInfoForId(personInfo) == 1) {
			result.setCode("0");
			result.setMsg("success");
		} else {
			result.setCode("-1");
			result.setMsg("fail");
		}
		return result;
	}

	/**
	 * 新增消息
	 * 
	 * @return
	 */
	@PostMapping("/updatePersonInfoById")
	public Result updatePersonInfoById(HttpServletRequest request, HttpServletResponse response,
			@RequestBody PersonInfo personInfo) {
		Result result = new Result();
		result.setCode("0");
		result.setMsg("success");
		if (personInfoMapper.updatePersonInfoById(personInfo) == 1) {
			result.setCode("0");
			result.setMsg("success");
		} else {
			result.setCode("-1");
			result.setMsg("fail");
		}
		return result;
	}

	/**
	 * 新增消息
	 * 
	 * @return
	 */
	@PostMapping("/addPersonInfo")
	public Result addPersonInfo(HttpServletRequest request, HttpServletResponse response,
			@RequestBody PersonInfo personInfo) {
		Result result = new Result();
		result.setCode("0");
		result.setMsg("success");
		if (personInfoMapper.addPersonInfo(personInfo) == 1) {
			result.setCode("0");
			result.setMsg("success");
		} else {
			result.setCode("-1");
			result.setMsg("fail");
		}
		return result;
	}

	@PostMapping("/getPersonInfoList")
	public PageResult getAllUser(@RequestBody PersonInfo personInfo) {

		System.out.println(personInfo.toString());
		PageRequest pageRequest = new PageRequest();
		pageRequest.setLimit(personInfo.getLimit());
		pageRequest.setOffset(personInfo.getOffset());
		PageResult pageResult = PageUtils.getPageResult(pageRequest, getPageInfo(pageRequest, personInfo));
		pageResult.setCode("0");
		pageResult.setMsg("success");
		return pageResult;

	}

	@PostMapping("/getPersonInfoById")
	public Result getPersonInfoById(int id) {
		PersonInfo personInfo = personInfoMapper.getPersonInfoById(id);
		Result result = new Result();
		result.setData(personInfo);
		result.setCode("0");
		result.setMsg("success");
		return result;

	}

	@PostMapping("/getAllUserBySushuleibie")
	public  List  getAllUserBySushuleibie(String suoshuleibie) {
		PersonInfo PersonInfo = new PersonInfo();
		PersonInfo.setSuoshuleibie(suoshuleibie);
		List<PersonInfo> list=personInfoMapper.getPersonInfoListAll(PersonInfo);
		
		List treeNode = new ArrayList();
		
		// {id: 1, pId: 0, name: "境外", open: true}
		Map<String,Object> map = new HashMap<String,Object>();
		
		map.put("name", "境内");
		map.put("open", true);
		map.put("pId", 0);
		map.put("id", -1);
		treeNode.add(map);
		
		 map = new HashMap<String,Object>();
			
		map.put("name", "境外");
		map.put("open", true);
		map.put("pId", 0);
		map.put("id", -2);
		treeNode.add(map);
		
		map = new HashMap<String,Object>();
			
		map.put("name", "美西");
		map.put("open", true);
		map.put("pId", 0);
		map.put("id", -3);
		treeNode.add(map);
		
		map = new HashMap<String,Object>();
			
		map.put("name", "敌对媒体");
		map.put("open", true);
		map.put("pId", 0);
		map.put("id", -4);
		treeNode.add(map);
		
		map = new HashMap<String,Object>();
		
		map.put("name", "国际媒体");
		map.put("open", true);
		map.put("pId", 0);
		map.put("id", -5);
		treeNode.add(map);
		
		
		
		
		for (PersonInfo personInfo2 : list) {
			
			
			map = new HashMap<String,Object>();
			
			map.put("open", true);
			map.put("name", personInfo2.getXingming());
			map.put("id", personInfo2.getId());
			map.put("file", "person_edit.html?id="+personInfo2.getId());
			
			if("境内".equals(personInfo2.getSuoshuleibie())) {
				map.put("pId", "-1");
			}else if("境外".equals(personInfo2.getSuoshuleibie())) {
				map.put("pId", "-2");
				
			}else if("美西".equals(personInfo2.getSuoshuleibie())) {
				map.put("pId", "-3");
				
			}else if("敌对媒体".equals(personInfo2.getSuoshuleibie())) {
				map.put("pId", "-4");
				
			}else if("国际媒体".equals(personInfo2.getSuoshuleibie())) {
				map.put("pId", "-5");
				
			}
			treeNode.add(map);
		}
		
		return treeNode;

	}

	private PageInfo<PersonInfo> getPageInfo(PageRequest pageRequest, PersonInfo personInfo) {
		// PageHelper.startPage((pageRequest.getOffset()/pageRequest.getLimit()),
		// pageRequest.getLimit());
		PageHelper.offsetPage(pageRequest.getOffset(), pageRequest.getLimit());
		List<PersonInfo> sysMenus = personInfoMapper.getPersonInfoList(personInfo);

		return new PageInfo<PersonInfo>(sysMenus);
	}

}