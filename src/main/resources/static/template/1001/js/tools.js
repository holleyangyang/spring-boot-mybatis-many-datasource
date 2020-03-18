var rt={};

rt.getRequest = function() {
		var url = location.search;
		var theRequest = new Object();
		if (url.indexOf('?') != -1) {
			var str = url.substr(1);
			var strs = str.split('&');
			for ( var i = 0; i < strs.length; i++) {
				
				theRequest[strs[i].split('=')[0]] = decodeURI(strs[i]
						.split('=')[1]);
			}
		}
		return theRequest;
	};
	
rt.isNullOrBlank =function (str){
		if(str=='undefined' ||str==undefined || str==null||str==""){
			return true;
		}
		return false;
};
rt.isNotNullOrBlank =function (str){
	if(str=='undefined' || str==null||str==undefined ||str==""){
		return false;
	}
	return true;
};

rt.fixString = function (org,defaultStr){
	
	if(rt.isNullOrBlank(org)){
		return defaultStr ; 
	}
	
	return org;
	
};
 
rt.getCookie = function(name){
		
		var arr ,reg = new RegExp("(^|)"+name+"=([^;]*)(;|$)");
		
		if(arr=document.cookie.match(reg)){
			
			return  unescape(arr[2]);
			
			
		}else{
			return null;
		}
		
};