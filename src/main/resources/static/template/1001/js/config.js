//dev=开发环境;stg=测试环境;prod=生产环境 
var evnType =''; 
var appDomainUrl =""; 

 if(window.location.href.indexOf("qy.life.cntaiping.com")>-1){ 
	evnType ="prod"; 
} else if(window.location.href.indexOf("tpwxtest.life.cntaiping.com")>-1){ 
	evnType ="stg"; 
}

if(evnType=='dev'){ 
 	appDomainUrl="http://"+window.location.hostname+":"+window.location.port+"/weixinApp";
	
}else if(evnType=='stg'){ 
	appDomainUrl = "http://tpwxtest.life.cntaiping.com:80/weixinApp"; 
}else if(evnType=='prod'){ 
	appDomainUrl = window.location.origin+"/weixinApp"; 
} 
var jsVersion = "20190419"; 
var cssVersion="20190419"; 
var imgVersion="20190419";
var version = "20190823";
  