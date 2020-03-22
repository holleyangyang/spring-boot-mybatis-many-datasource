package com.example.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.entity.PersonInfo;
import com.example.util.RandomValidateCodeUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HtmlController {
 
    @RequestMapping("/login")
    public String index() {
        log.info("[页面跳转] >> index ");
        return "login";
    }
    @RequestMapping("/html/{url}")
    public String login(@PathVariable(value = "url") String url) {
        log.info("[页面跳转] >> login "+url);
        return "page/"+url;
    }
    @GetMapping("/getVcode")
    public void sendMsg1(HttpServletRequest request, HttpServletResponse response) {
     RandomValidateCodeUtils randomValidateCodeUtils = new RandomValidateCodeUtils();
     randomValidateCodeUtils.getRandCode(request, response);
    } 
    @GetMapping("/showImage.jpg")
    public @ResponseBody    void showImage(String path,HttpServletRequest request,HttpServletResponse response,int id) throws IOException {
    	 //读取本地图片输入流  
    	System.out.println(path);
        FileInputStream inputStream = new FileInputStream("d:\\file\\images\\934fc31a256fecaa38ac14c1d0d66f2.jpg");  
        int i = inputStream.available();  
        //byte数组用于存放图片字节数据  
        byte[] buff = new byte[i];  
        inputStream.read(buff);  
        //记得关闭输入流  
        inputStream.close();  
        //设置发送到客户端的响应内容类型  
        response.setContentType("image/*");  
        OutputStream out = response.getOutputStream();  
        out.write(buff);  
        //关闭响应输出流  
        out.close();  
    }
}