package com.example.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.PersonInfo;
import com.example.mapper.PersonInfoMapper;

@RestController
@Scope("prototype")
@RequestMapping("/file")
public class FileUpLoadController {

	 @Value("${fileUplad.path}")
     private String fileUpladPath;
		@Resource
		private PersonInfoMapper personInfoMapper;
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
        String fullPath = "";
        for (MultipartFile f : file) {
             if (!f.isEmpty()) {
                if (f.getOriginalFilename().endsWith("txt")) {
                    path = fileUpladPath + "doc"; 
                }
                else if (f.getOriginalFilename().endsWith("jpg") || f.getOriginalFilename().endsWith("gif")
                        || f.getOriginalFilename().endsWith("png")) {
                    path = fileUpladPath + "images";
                    }
                else {
                    path = fileUpladPath + "other";
                }
                String fileName = +System.currentTimeMillis()+f.getOriginalFilename();
                File tarFile = new File(path, fileName);
                fullPath = path+"\\"+fileName;
                f.transferTo(tarFile);
                isSuccess = true;
            }
        }
        return fullPath;
    } 
    @GetMapping("/showImage")
    public @ResponseBody    void showImage(HttpServletRequest request,HttpServletResponse response,int id) throws IOException {
    	
    	 
    	try {
			response.setContentType("text/html; charset=UTF-8");
			response.setContentType("image/jpeg");
			PersonInfo personInfo = personInfoMapper.getPersonInfoById(id);
			String path = personInfo.getTupiandizhi();
			FileInputStream fis = new FileInputStream(path);
			OutputStream os = response.getOutputStream();
			try {
			    int count = 0;
			    byte[] buffer = new byte[1024 * 1024];
			    while ((count = fis.read(buffer)) != -1) {
			        os.write(buffer, 0, count);
			    }
			    os.flush();
			} catch (IOException e) {
			    e.printStackTrace();
			} finally {
			    if (os != null)
			        os.close();
			    if (fis != null)
			        fis.close();
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			 
		}
    }
}
