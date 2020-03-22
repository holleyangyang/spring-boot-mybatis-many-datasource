package com.example.util;

import java.io.File;
import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import net.sf.json.JSONObject;

public class FileUpLoad {
	public JSONObject logUpload(MultipartFile file) throws Exception {

		JSONObject json = new JSONObject();
		try {
			if (file == null || file.isEmpty()) {
				json.put("code", "0");
				json.put("msg", "未选择需上传的日志文件");
			}

			String filePath = new File("logs_app").getAbsolutePath();
			File fileUpload = new File(filePath);
			if (!fileUpload.exists()) {
				fileUpload.mkdirs();
			}

			fileUpload = new File(filePath, file.getOriginalFilename());
			if (fileUpload.exists()) {
				json.put("code", "0");
				json.put("msg", "未选择需上传的日志文件");
			}

			file.transferTo(fileUpload);

		} catch (IOException e) {
			json.put("code", "0");
			json.put("msg", "未选择需上传的日志文件");
		} finally {

			return json;
		}

	}
}
