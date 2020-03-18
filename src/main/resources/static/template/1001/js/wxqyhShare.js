var share={};
//分享


/**
 * 入参
jsonstr={"onMenuShareTimelineTitle":"分公司、三级机构首转预收数据",
	           "onMenuShareTimelineLink":"http://dsfasfsafsdf"
	           "onMenuShareTimelineImgUrl":"http://ssss",
	           
	           "onMenuShareAppMessageDesc":"分公司、三级机构首转预收数据",
	            "onMenuShareAppMessageTitle":"分公司、三级机构首转预收数据",
	            "onMenuShareAppMessageImgUrl":"分公司、三级机构首转预收数据",
	            "onMenuShareAppMessageLink":"http://dsfasfsafsdf"
	            
	    }
 * 
 * 
 * 
 */
share.shareJs = function (shareTypes,jsonstr){
	
	if(evnType=="dev"){
		return ;
	}
//shareType 1:分享朋友圈 ，2、分享给朋友 ，3、禁止分享
	

	$.ajax({
	    url:appDomainUrl+"/qywx/jssdk/sign",
	    //url:appDomainUrl+"/url/callback/wxConfig",
	    type:"post",
	    data:{url:window.location.href},
	    dataType:"json",
	    async : true,
	    success:function(data){
	        wx.config({
	          debug: false,
	          appId: data.data1.appid,
	          timestamp: data.data1.timestamp,
	          nonceStr: data.data1.nonce_Str,
	          signature: data.data1.signature,
	          jsApiList: [
	            'onMenuShareTimeline',
	            'onMenuShareAppMessage'
	          ]
	          });
	    wx.ready(function(){
	    	
	    	if(shareTypes.indexOf(",1,")>-1){
	    		 //分享到朋友圈
	    		wx.onMenuShareTimeline({
		            title: jsonstr.onMenuShareTimelineTitle, // 分享标题
		            link: encodeURI(encodeURI(jsonstr.onMenuShareTimelineLink )), // 分享链接
		            imgUrl: jsonstr.onMenuShareTimelineImgUrl, // 分享图标
		            success: function () { 
		                // 用户确认分享后执行的回调函数
		            },
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            }
		        });
	    	}
	    	if(shareTypes.indexOf(",2,")>-1){
	    		//分享给朋友
		        wx.onMenuShareAppMessage({
		            title: jsonstr.onMenuShareAppMessageTitle, // 分享标题
		            link: encodeURI(encodeURI(jsonstr.onMenuShareAppMessageLink)), // 分享链接
		            desc: jsonstr.onMenuShareAppMessageDesc, // 分享描述
		            imgUrl: jsonstr.onMenuShareAppMessageImgUrl, // 分享图标
		            type: 'link', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () { 
		                // 用户确认分享后执行的回调函数
		            },
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            }
		        });
	    	}
	    	if(shareTypes.indexOf(",3,")>-1){
	    		 
	    	}	        
	    });
	}
	}); 
	
}
	
	/**
	 * 1、个险分享功能调用方法封装
	 */
	share.shareGxCommon = function (reportId,title,serialNum){
		if(rt.isNullOrBlank(reportId)||rt.isNullOrBlank(title)){
			return;
		}
		var linkUrl =window.location.protocol+"//"+window.location.host+"/weixinApp/report/index/gx/"+reportId+"?reportId="+reportId+"&chaneel=3";
		var imgUrl = window.location.protocol+"//"+window.location.host+"/weixinApp/reportPage/gx/"+reportId+"_rt/images/"+reportId+"_share.png"
		if(rt.isNotNullOrBlank(serialNum)){
			linkUrl+="&serialNum=" + initData.serialNum;
		}
		
	   var jsonstr={"onMenuShareTimelineTitle":title,"onMenuShareTimelineLink":linkUrl, "onMenuShareTimelineImgUrl":imgUrl,"onMenuShareAppMessageDesc":title,
	        "onMenuShareAppMessageTitle":title,"onMenuShareAppMessageImgUrl":imgUrl,"onMenuShareAppMessageLink":linkUrl};
	  share.shareJs(",1,2,",jsonstr);  
	};
	
	/**
	 * 2、银险分享功能调用方法封装
	 */
	share.shareYbCommon = function (reportId,title,serialNum){
		if(rt.isNullOrBlank(reportId)||rt.isNullOrBlank(title)){
			return;
		}
		var linkUrl =window.location.protocol+"//"+window.location.host+"/weixinApp/report/index/yb/"+reportId+"?reportId="+reportId+"&chaneel=3";
		var imgUrl = window.location.protocol+"//"+window.location.host+"/weixinApp/reportPage/yb/"+reportId+"_rt/images/"+reportId+"_share.png"
		if(rt.isNotNullOrBlank(serialNum)){
			linkUrl+="&serialNum=" + initData.serialNum;
		}
		
	   var jsonstr={"onMenuShareTimelineTitle":title,"onMenuShareTimelineLink":linkUrl, "onMenuShareTimelineImgUrl":imgUrl,"onMenuShareAppMessageDesc":title,
	        "onMenuShareAppMessageTitle":title,"onMenuShareAppMessageImgUrl":imgUrl,"onMenuShareAppMessageLink":linkUrl};
	  share.shareJs(",1,2,",jsonstr);  
	};
	
	/**
	 * 3、续期分享功能调用方法封装
	 */
	share.shareXqCommon = function (reportId,title,serialNum,desc){
		if(rt.isNullOrBlank(reportId)||rt.isNullOrBlank(title)){
			return;
		}
		var linkUrl =window.location.protocol+"//"+window.location.host+"/weixinApp/report/index/xq/"+reportId+"?reportId="+reportId+"&chaneel=3";
		var imgUrl = window.location.protocol+"//"+window.location.host+"/weixinApp/reportPage/xq/"+reportId+"_rt/images/"+reportId+"_share.png"
		if(rt.isNotNullOrBlank(serialNum)){
			linkUrl+="&serialNum=" + initData.serialNum;
		}
		
	   var jsonstr={"onMenuShareTimelineTitle":title,"onMenuShareTimelineLink":linkUrl, "onMenuShareTimelineImgUrl":imgUrl,"onMenuShareAppMessageDesc":desc,
	        "onMenuShareAppMessageTitle":title,"onMenuShareAppMessageImgUrl":imgUrl,"onMenuShareAppMessageLink":linkUrl};
	  share.shareJs(",1,2,",jsonstr);  
	};
	/**
	 * 3、续期分享功能调用方法封装
	 */
	share.shareAllCommon = function (title,desc,urlLink,imageLink){
		 
		var linkUrl =urlLink;
		var imgUrl =imageLink;
	   var jsonstr={"onMenuShareTimelineTitle":title,"onMenuShareTimelineLink":linkUrl, "onMenuShareTimelineImgUrl":imgUrl,"onMenuShareAppMessageDesc":desc,
	        "onMenuShareAppMessageTitle":title,"onMenuShareAppMessageImgUrl":imgUrl,"onMenuShareAppMessageLink":linkUrl};
	  share.shareJs(",1,2,",jsonstr);  
	};
	/**
	 * 方法实现了了分享朋友圈、分享给朋友功能
	 * var shareData={"chaneel":"gx","reportId":"103001","title":"当日出勤","serialNum":"2019889897986"};
	 * share.shareCommon(shareData);
	 * chaneel ：gx、yb、xq
	 */
	share.shareCommon= function(dataP){
		var chaneel = dataP.chaneel;
		var reportId =dataP.reportId;
		var title = dataP.title;
		var desc = dataP.desc;
		var serialNum = dataP.serialNum;
		var urlLink = dataP.urlLink;
		var imageLink = dataP.imageLink;
		
		if(chaneel=="gx"){
			share.shareGxCommon(reportId,title,serialNum);
		}else if(chaneel=="yb"){
			share.shareYbCommon(reportId,title,serialNum);
		}else if(chaneel=="xq"){
			share.shareXqCommon(reportId,title,serialNum,desc);
		}else if(chaneel=="common"){
			share.shareAllCommon(title,desc,urlLink,imageLink);
		}
		
	}

 