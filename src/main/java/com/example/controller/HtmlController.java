package com.example.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

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
}