$().ready(function(){
    //tab切换
    $('.tab_box ul li').click(function (event) {
        $(this).addClass('hover').siblings('li').removeClass('hover');
    });
    $("#select3").hide();	 //初始化不显示三级联动
  
});

var initData={};
initData.pageNum=1;
initData.initUrl=appDomainUrl+"/reportData/xq/103215/init";
initData.dataUrl=appDomainUrl+"/reportData/xq/103215/data";
initData.downDataUrl=appDomainUrl+"/reportData/xq/10321501/data";
initData.tabId = 1;	//预收
initData.orgPid = "1";	//父ID
initData.cloName = "org_pid";	//字段名称
initData.orderVal = "to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc";//排序字段
initData.orderValGR = "to_number(DATA_ROWNUM) desc";//排序字段
initData.typeVal = "'0'";	//渠道类型
initData.isHj = "n";	//是否合计
initData.poperVal = "1";
initData.searchs = [];
initData.organClass=1;
initData.tabTitles1 =  ["营业单位","工号","姓名","序号","昨日保费","本月起保","本月承保"];

initData.tableTitleList1 ;
//分享
var shareData={"chaneel":"xq","reportId":"103215","title":"拓展渠道财险月度达成报表","desc":"拓展渠道财险月度达成报表","serialNum":initData.serialNum };
//share.shareCommon(shareData);


//报表初始化
initData.reportInit = function(dataP){
 
	var request = rt.getRequest();
	
	initData.reportId = request['reportId'];
	initData.serialNum = request['serialNum'];
	initData.userId = request['userId'];
	/*
	if(rt.isNullOrBlank(initData.userId)){
		initData.userId = rt.getCookie("UserId");
		if(rt.isNullOrBlank(initData.userId)){
			window.location.replace('/weixinApp/xsys/error?message= 抱歉,您不具备查看此份报表的权限,请联系系统管理员予以开放.');
 			return;
		}
	}*/
	$.ajax({
	type : "get",
	data:{"userId" : initData.userId, 
		"serialNum" : initData.serialNum},
	url : "../../page/data/init.json",
	success:function (data) {
		console.info(data);
		if(data){
			if(data.code != '000'){
				window.location.replace('/weixinApp/xsys/error?message= 抱歉,您不具备查看此份报表的权限,请联系系统管理员予以开放.');
	 			return;
			}
			initData.dataSourceType= data.dataSourceType; 
			if(rt.isNullOrBlank(initData.serialNum)){
				initData.serialNum =  data.serialNum;
			}
			//1 
			initData.reportTabList=data.reportTabList;
			initData.renderTab();
			//2
			initData.progressiveList =[{"orgcode":"1","orgname":"总公司"}];
			initData.renderDaoHang();
			
			initData.tableTitleList = data.reportTabList;
			initData.tableTitleList1 = data.reportTabList;
			initData.tabTitles = data.reportTabList[0].tabTitles.split(',');
			initData.renderTitle();
			 
			
			var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
			               {"pname":"tab_id","pvalue":"(1,2,3,4,5)","poper":"7"}];
			
			var params = {"searchs":searchs,"tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
			initData.getReportData(params,"0");
		}
	},error:function(data,msg) {
		alert("由于网络问题数据加载失败,请刷新页面重试.");
	}
	});
};
 

//加载数据
initData.getReportData = function(params,isPaging){
	if(isPaging!="1"){
		$("#loading").show();
	}
	initData.searchs = params["searchs"];
	initData.defaultParams ={"userId" : initData.userId, 
			"dataSourceType":initData.dataSourceType, 
			"serialNum" : initData.serialNum,
			"isHj":initData.isHj,"orderFields":initData.orderVal};
	$.extend(params,params,initData.defaultParams);
	var request = rt.getRequest();
	$.ajax({
		type : "get",
		url : "../../page/data/data.json",
		contentType:"application/json;charset=utf-8",
		success:function (data) {
			if(data){
				if(data.code !="000"){
					window.location.replace('/weixinApp/xsys/error?message=' + data.msg);
					return;
				}
				initData.dataList = data.reportDataList;
				console.info(data);
		  
				if(data.reportDataList.length==40){	//说明数据还有第二页
					scrollFlag = 2;
				}else{
					scrollFlag = 1;
				}
				var reportListHtml  ="";
				var reportListHjHtml  ="";
				var remark1 ="";
				var remark2="";
				var remark3="";
				if(initData.dataList!=null&&initData.dataList.length!=0){
					$(".no_data").hide();
					remark1=data.reportDataList[0].REMARK1 ;
					remark2=data.reportDataList[0].REMARK2 ;
					remark3=data.reportDataList[0].REMARK3 ;
					initData.dataList.forEach(function(reportData,index){
						if(initData.tabId == 1){
							//console.info(reportData["DATA_COL_1"]+"-----"+reportData["ORGAN_CLASS"]);
							if(reportData["DATA_COL_1"]== '全系统总' && initData.organClass==1){
								data.reportDataListHj=initData.dataList[index];
							}else{
								if(reportData["DATA_COL_1"]== '全系统' && initData.organClass==2){
									data.reportDataListHj=initData.dataList[index];
								}
							}
						}else{
							if(reportData["DATA_COL_1"]== '全系统' ){
								data.reportDataListHj=initData.dataList[index];
							}
			 			}
						if(reportData["DATA_COL_1"]!= undefined && reportData["DATA_COL_1"]!= ''&& reportData["DATA_COL_1"]!= null && reportData["DATA_COL_1"]!= 'undefined'&& reportData["DATA_COL_1"]!= '全系统'&& reportData["DATA_COL_1"]!= '全系统总' ){
						reportListHtml+='<tr> ';
						for(var i=0;i<initData.tabTitles.length;i++){
								 reportListHtml+="<td>" ;
								 if(i==0){
									 if(reportData["ORGAN_CLASS"] < 4){
											reportListHtml+="<div class='bd jigou addline' onclick=\"initData.down('"+reportData.ORG_ID+"','"+reportData["DATA_COL_1"]+"',"+reportData.ORGAN_CLASS+")\"'>"+reportData["DATA_COL_1"]+"</div>" ;
									 }else{
										   	reportListHtml+="	<div  class='bd jigou'>"+reportData["DATA_COL_"+(i+1)]+"</div>" ;
									 }
								 }else{
								    reportListHtml+="	<div  class='bd'>"+reportData["DATA_COL_"+(i+1)]+"</div>" ;
							      }
								  reportListHtml+="</td>";
						    }
						 reportListHtml+="</tr>";
						}
					});
					//备注区域
					$(".notebox .note  span").eq(0).html( remark1);
					$(".notebox .note  span").eq(1).html(remark2); 
					$(".notebox .note  span").eq(2).html(remark3); 
					console.info(data.reportDataListHj);
					if(data.reportDataListHj!=null&&data.reportDataListHj.length!=0){
					 	reportListHjHtml+="<td>" ;
					 		reportListHjHtml+="	<div  class='bd jigou '>全系统</div>" ;
						reportListHjHtml+="</td>";
						for(var i=1;i<initData.tabTitles.length;i++){
							 reportListHjHtml+="<td>" ;
								 reportListHjHtml+="<div  class='bd'>"+data.reportDataListHj["DATA_COL_"+(i+1)]+"</div>" ;
							 reportListHjHtml+="</td>";
						}
					}
				}else{
					if(isPaging!="1"){
						$(".no_data").show();
					} 
					if(initData.organClass == 2 && initData.dataList!=null && initData.dataList.length!=0){
						reportListHjHtml+="<td>" ;
						reportListHjHtml+="	<div  class='bd jigou '>全系统</div>" ;
						reportListHjHtml+="</td>";
						for(var i=1;i<initData.tabTitles.length;i++){
							reportListHjHtml+="<td>" ;
							reportListHjHtml+="	<div  class='bd'>/</div>" ;
							reportListHjHtml+="</td>";
						}
					}
				}
				 
				$(".tb_l .bot_bg .fixed.fixed_tfoot tbody tr").eq(0).html(reportListHjHtml);
				$(".tb_bot .fixed.fixed_tfoot tbody tr").eq(0).html(reportListHjHtml);
			 
				//数据区域
				if(isPaging!="1"){
					$(".mid_l .tb_l .fixed.fixed_tbody tbody").html(reportListHtml);
					$(".mid .scroll .fixed.fixed_tbody tbody").html(reportListHtml);
					$("#loading").hide();
					initCss.initPageHeight();
				}else{
					$(".mid_l .tb_l .fixed.fixed_tbody tbody").append(reportListHtml);
					$(".mid .scroll .fixed.fixed_tbody tbody").append(reportListHtml);
				}
				
			}
		},error:function(data) {
			alert("由于网络问题数据加载失败,请刷新页面重试.");
		}
	});
};


 


var scrollFlag = 2;
$("html").on('touchstart',".scroll",function(e){
	if(scrollFlag == 2 && initData.organClass ==3 ){
		console.info("正在下拉");
		var pheight= $(".scroll2").parent().height();
		var maxmidh= $('.maxmid').height();
		var midh= $('.mid').scrollTop();
		if(pheight < maxmidh+midh+20){
			console.info("高度达到");
			initData.pageNum+=1;
			var params = {"searchs":initData.searchs,"tabId":initData.tabId ,"pageNum":initData.pageNum,"pageSize":"40"};
			params.orderFields="to_number(DATA_ROWNUM) desc";
			initData.getReportDataDown(params,"1");
		}
		
	}

});

 
//加载页面tab内容
initData.renderTab = function (){
	var tabHtml = "";
	initData.reportTabList.forEach(function(tab,index){
		var classStr = "";
		if(tab.tabId==initData.tabId ){
			classStr ="class='hover tabs'";
		}
			tabHtml+='<li  onclick="initData.chooseTab(1,'+tab.tabId+',\'\')" '+classStr+' id="tab'+tab.tabId+'" class="tabs"  >'+tab.tabName+'</li>';	
	});
	$(".tab_lv1_yiji").html(tabHtml);
	
};

//加载导航内容
initData.renderDaoHang=function (){
	var daohangHtml = "";
	initData.progressiveList.forEach(function(daohang,index){
		daohangHtml+='<span  onclick="initData.up('+index+',\''+daohang.orgcode+'\')" id="daohang'+daohang.orgcode+'"  >'+daohang.orgname+'</span>';	
	});

	$(".nav p").html(daohangHtml);
	initData.pageNum=1;
};

//上钻
initData.up = function(index, ORG_ID){
	if(initData.progressiveList.length==1||index==initData.progressiveList.length-1){
		return ;
	}
	initData.tableTitleList =  initData.tableTitleList1;
	initData.tabTitles = initData.tableTitleList[0].tabTitles.split(',');
	initData.renderTitle();
	initData.progressiveList.splice(index + 1, initData.progressiveList.length -1);
	initData.renderDaoHang();
	initData.orgPid = ORG_ID;
	initData.organClass = index+1;
	initData.isHj = "n";
	if(initData.tabId==1){
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":"(1,2,3,4,5)","poper":"7"}];
		var params = {"searchs":searchs,"tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
		initData.getReportData(params,"0");
	}else{
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":""+initData.tabId+"","poper":"1"}];
		var params = {"searchs":searchs,"tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
		initData.getReportData(params,"0");
	}
};
//下钻
initData.down =function(ORG_ID, DATA_COL_1,classId){
	if(initData.orgPid ==ORG_ID){
		return ;
	}
	initData.organClass = classId ;
	var obj = new Object();
	obj.orgcode = ORG_ID;
	obj.orgname = DATA_COL_1;
  	initData.progressiveList.push(obj);
 	initData.renderDaoHang();
 	initData.orgPid = obj.orgcode;
 	initData.isHj = "n";
 	if(initData.tabId==1){
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":"(1,2,3,4,5)","poper":"7"}];
		var params = {"searchs":searchs,"pageSize":"40","pageNum":"1","tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
	}else{
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":""+initData.tabId+"","poper":"1"}];
		var params = {"searchs":searchs,"pageSize":"40","pageNum":"1","tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
	}
 	if(initData.organClass==3){
		initData.tabTitles = initData.tabTitles1;
		initData.renderTitle();
 		initData.getReportDataDown(params,"0");
	}else{
		initData.getReportData(params,"0");
	}
 	
	initCss.clearScroll();
	initCss.initPageHeight();
};

//加载表格title内容
initData.renderTitle = function(){
	var titlesHtml = "";
	initData.tabTitles.forEach(function(titles,index){
	titlesHtml+='<td   >'+titles+'</li>';		

	});
	
	$(".tb_l .top_bg .fixed.fixed_thead tr").eq(0).html(titlesHtml);
	$(".tb_top .fixed.fixed_thead tr").eq(0).html(titlesHtml);
	$(".main").prop("class","main col"+initData.tabTitles.length);
	
	$('.tag_ask').click(function() {
	  	$('.al_tip').show();
	  	$(this).toggleClass('hover');
		$(this).parent().parent().siblings().find(".tag_ask").removeClass('hover')
	  });
	  $('.al_tip_close').click(function(event) {
	  	$('.al_tip').hide();
	  	$('.tag_ask').removeClass('hover')
	  });
	  $(document.body).click(function(event) {
	  	 var target = $(event.target);
	  	 if (target.context.className!='tag_ask hover'&&target.context.className!='al_tip_txt') {
	  	 	$('.al_tip').hide();
	  	 	$('.tag_ask').removeClass('hover')
	  	 }
	  });
};


//切换tab
initData.chooseTab = function(orgId,tabId,depatType,col){
	if(tabId==initData.tabId){
		return;
	}
	initData.pageNum=1;
	initData.organClass=1;
	$(".tabs").removeClass("hover");
	$("#tab"+tabId).addClass("hover");
	initData.tabId = tabId;
	initData.depatType=depatType;
	initData.orgPid=orgId;
	initData.progressiveList =[{"orgcode":"1","orgname":"总公司"}];
	initData.renderDaoHang();
	initData.tableTitleList =  initData.tableTitleList1;
	initData.tabTitles = initData.tableTitleList[0].tabTitles.split(',');
	initData.renderTitle();
	var searchs;
	if(tabId==1){
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":"(1,2,3,4,5)","poper":"7"}];
		var params = {"searchs":searchs,"tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
		initData.getReportData(params,"0");
	}else{
		var searchs = [{"pname":"org_pid","pvalue":"'"+initData.orgPid+"'","poper":"1"},
            {"pname":"tab_id","pvalue":""+initData.tabId+"","poper":"1"}];
		var params = {"searchs":searchs,"tabId":initData.tabId,"orderFields":" to_number(DATA_ROWNUM) desc, to_number(data_col_6) desc"};
		initData.getReportData(params,"0");
	}
	initCss.clearScroll();
	initCss.initPageHeight();
	
	
};

//加载数据
initData.getReportDataDown = function(params,isPaging){
	if(isPaging!="1"){
		$("#loading").show();
	}
	initData.searchs = params["searchs"];
	var orderVal = "";
	if(initData.organClass==3){
		orderVal = initData.orderValGR;
	}else{
		orderVal = initData.orderVal;
	}
	initData.defaultParams ={"userId" : initData.userId, 
			"dataSourceType":initData.dataSourceType, 
			"serialNum" : initData.serialNum,
			"isHj":initData.isHj,"orderFields":orderVal};
	$.extend(params,params,initData.defaultParams);
	var request = rt.getRequest();
	$.ajax({
		type : "post",
		data:JSON.stringify(params),  
		url : initData.downDataUrl, 
		contentType:"application/json;charset=utf-8",
		success:function (data) {
			if(data){
				if(data.code !="000"){
					window.location.replace('/weixinApp/xsys/error?message=' + data.msg);
					return;
				}
				initData.dataList = data.reportDataList;
				console.info(data);
		  
				if(data.reportDataList.length==40){	//说明数据还有第二页
					scrollFlag = 2;
				}else{
					scrollFlag = 1;
				}
				var reportListHtml  ="";
				var reportListHjHtml  ="";
				var remark1 ="";
				var remark2="";
				var remark3="";
				if(initData.dataList!=null&&initData.dataList.length!=0){
					$(".no_data").hide();
					remark1=data.reportDataList[0].REMARK1 ;
					remark2=data.reportDataList[0].REMARK2 ;
					remark3=data.reportDataList[0].REMARK3 ;
					initData.dataList.forEach(function(reportData,index){
						if(initData.tabId==1){
							if(reportData["DATA_COL_1"]== '全系统总' && initData.organClass==1){
								data.reportDataListHj=initData.dataList[index];
							}else{
								if(reportData["DATA_COL_1"]== '全系统' ){
									data.reportDataListHj=initData.dataList[index];
								}
							}
						}else{
							if(reportData["DATA_COL_1"]== '全系统' ){
								data.reportDataListHj=initData.dataList[index];
							}
						}
						reportListHtml+='<tr> ';
						for(var i=0;i<initData.tabTitles.length;i++){
							 if(reportData["DATA_COL_1"]!= undefined && reportData["DATA_COL_1"]!= 'undefined'&& reportData["DATA_COL_1"]!= '全系统'&& reportData["DATA_COL_1"]!= '全系统总' ){
								 reportListHtml+="<td>" ;
								 if(i==0){
									 if(reportData["ORGAN_CLASS"] < 4){
											reportListHtml+="<div class='bd jigou addline' onclick=\"initData.down('"+reportData.ORG_ID+"','"+reportData["DATA_COL_1"]+"',"+reportData.ORGAN_CLASS+")\"'>"+reportData["DATA_COL_1"]+"</div>" ;
									 }else{
										   	reportListHtml+="	<div  class='bd jigou'>"+reportData["DATA_COL_"+(i+1)]+"</div>" ;
									 }
								 }else{
								    reportListHtml+="	<div  class='bd'>"+reportData["DATA_COL_"+(i+1)]+"</div>" ;
							      }
								  reportListHtml+="</td>";
						    }
						 }
						 reportListHtml+="</tr>";
					});
					//备注区域
					$(".notebox .note  span").eq(0).html( remark1);
					$(".notebox .note  span").eq(1).html(remark2); 
					$(".notebox .note  span").eq(2).html(remark3); 
					console.info(data.reportDataListHj);
					if(data.reportDataListHj!=null&&data.reportDataListHj.length!=0){
					 	reportListHjHtml+="<td>" ;
					 		reportListHjHtml+="	<div  class='bd jigou '>全系统</div>" ;
						reportListHjHtml+="</td>";
						for(var i=1;i<initData.tabTitles.length;i++){
							 reportListHjHtml+="<td>" ;
								 reportListHjHtml+="<div  class='bd'>"+data.reportDataListHj["DATA_COL_"+(i+1)]+"</div>" ;
							 reportListHjHtml+="</td>";
						}
					}
				}else{
					if(isPaging!="1"){
						$(".no_data").show();
					} 
					if(initData.organClass == 2 && initData.dataList!=null && initData.dataList.length!=0){
						reportListHjHtml+="<td>" ;
						reportListHjHtml+="	<div  class='bd jigou '>全系统</div>" ;
						reportListHjHtml+="</td>";
						for(var i=1;i<initData.tabTitles.length;i++){
							reportListHjHtml+="<td>" ;
							reportListHjHtml+="	<div  class='bd'>/</div>" ;
							reportListHjHtml+="</td>";
						}
					}
				}
				 
				$(".tb_l .bot_bg .fixed.fixed_tfoot tbody tr").eq(0).html(reportListHjHtml);
				$(".tb_bot .fixed.fixed_tfoot tbody tr").eq(0).html(reportListHjHtml);
			 
				//数据区域
				if(isPaging!="1"){
					$(".mid_l .tb_l .fixed.fixed_tbody tbody").html(reportListHtml);
					$(".mid .scroll .fixed.fixed_tbody tbody").html(reportListHtml);
					$("#loading").hide();
					initCss.initPageHeight();
				}else{
					$(".mid_l .tb_l .fixed.fixed_tbody tbody").append(reportListHtml);
					$(".mid .scroll .fixed.fixed_tbody tbody").append(reportListHtml);
				}
				
			}
		},error:function(data) {
			alert("由于网络问题数据加载失败,请刷新页面重试.");
		}
	});
};

var params = {"data_col_1":""};
initData.reportInit(params);//初始化查询数据
