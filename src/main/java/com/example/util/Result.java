package com.example.util;

import java.net.URLDecoder;

public class Result {
	private String code ;
	private String msg ;
	public Object data;
    public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public static void main(String[] args) {
String s = "sort=id&order=desc&limit=10&offset=0&personInfoJson%5Byouxiangdizhi%5D=&personInfoJson%5Bxingbie%5D=1&personInfoJson%5Bzuji%5D=&personInfoJson%5Bchutaoriqi%5D=&personInfoJson%5Bchushengriqi%5D=&personInfoJson%5Bsuoshuleibie%5D=";


   for (String string : s.split("&")) {
	System.out.println(URLDecoder.decode(string));
} 

	}

}
