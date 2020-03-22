package com.example.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@Scope("prototype")
@RequestMapping("/file")
public class FileUpLoadController {

	 @Value("${fileUplad.path}")
     private String fileUpladPath;
	
    /**
     * 上传日志接口
     *
     * @param file
     * @return
     * @throws Exception
     */
    @PostMapping(value = "/upload")
    public String upload(String un,@RequestParam("file") MultipartFile[] file, HttpServletRequest req)
            throws IllegalStateException, IOException {
        boolean isSuccess = false;
        String path = "";
        for (MultipartFile f : file) {
             if (!f.isEmpty()) {
                if (f.getOriginalFilename().endsWith("txt"))
                    path = fileUpladPath + "doc"; 
                else if (f.getOriginalFilename().endsWith("jpg") || f.getOriginalFilename().endsWith("gif")
                        || f.getOriginalFilename().endsWith("png"))
                    path = fileUpladPath + "images";
                else
                    path = fileUpladPath + "other";
                String fileName = f.getOriginalFilename();
                File tarFile = new File(path, fileName);
                f.transferTo(tarFile);
                isSuccess = true;
            }
        }
        return path;
    } 
}
