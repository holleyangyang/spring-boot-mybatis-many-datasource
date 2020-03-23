function Personload() {
	
	$("#table").bootstrapTable({
        method : 'post',
       striped : true,
        // cache :false,
        url: "/manager/personInfo/getPersonInfoList"  ,
        pagination :true,
        sidePagination : 'server', // client/server
        pageNumber : 1,
        pageSize : 10,
        pageList : [10,20,30,40],
        paginationLoop : false,
        columns :  [

            {
            	 title: "ID",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: "姓名",
                field: 'xingming',
                align: 'center',
                valign: 'middle'
            },
            {
                title: "所属类别",
                field: 'suoshuleibie',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '英文名',
                field: 'yingwenming',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '性别',
                field: 'xingbie',
                align: 'center'
            },
            {
                title: '所在组织',
                field: 'suozaizuzhi',
                align: 'center'
            },
            {
                title: '职位',
                field: 'zhiwei',
                align: 'center'
            },
            {
                title: '出逃国家',
                field: 'chutaoguojia',
                align: 'center',
                valign: 'middle'
            },
           
            {
                title: '操作',
                field: '',
                align: 'center',
                formatter: function (value, row) {
                    var e = '<button button="#" mce_href="#" onclick="del(\'' + row.id + '\')">删除</button> '
                    var d = '<button button="#" mce_href="#" onclick="edit(\'' + row.id + '\')">编辑</button> ';
                    var f = '<button button="#" mce_href="#" onclick="show(\'' + row.id + '\')">查看打印</button> ';
                    return e + d+f;
                }
            }
        ],
        formatLoadingMessage: function() {                    // 表格生成过程中执行的方法
            return '请稍等，正在加载中...';                        // 返回一串等待文字
        },
        formatNoMatches: function() {                          // 没有匹配的结果执行的方法
            return '无符合条件的记录';                            // 返回一串提示文字
        },
        onLoadSuccess : function(data) {
            console.log("----"+data);
        },
         queryParams : function(params){
             console.log(params);
             return $.extend({}, params, {
            		"suozaizuzhi":$("#suozaizuzhi").val()
             });
         }
    })
}

function getPara (){
	var personInfoJson = {
			"xingming":$("#xingming").val(),
			"suozaizuzhi":$("#suozaizuzhi").val(),
			"zuji":"",
			"chutaoriqi":"",
			"chushengriqi":"",
			"suoshuleibie":"" ,
			"offset":0,
			"limit":10
		};
	return personInfoJson;
}

Personload();
function getData() {
 
    $.ajax({
        type: "POST",
        url: "/manager/personInfo/getPersonInfoList"  ,
        dataType: "json",
        contentType:"application/json",  
        data: JSON.stringify(getPara()),
        success: function (result) {
            if (result.code=="0") {
                var TableData = result.rows;
                $('#table').bootstrapTable("load", result);
             }
        }
    })
}
function add() {
    openlayer('person_edit.html')
    currentID = "";
}
function edit(id) {
    openlayer('person_edit.html?id='+id)
  
}

function show(id){
    window.open('person_print.html?id='+id);

}
function del(id) {
    
	var is=window.confirm("确认删除吗？");
	
	if(is){
		
	
	
    var personInfoJson = {
			 
			"id":id
		};

    $.ajax({
        url: "/manager/personInfo/deletePersonInfoForId"  ,
        type: 'POST',
        dataType: "json",
        contentType:"application/json",  
        data: JSON.stringify(personInfoJson),      
        success: function (data) {
            if (data.code=="0") {
                alert("删除成功！")
                getData();
            } else {
                alert("删除失败")
            }
        },
        error: function (err) {
        }
    });
	}
}
function getCurrentID() {
    return currentID;
}
function openlayer(url){
    layer.open({
        type: 2,
        title: '添加信息',
        shadeClose: true,
        shade: 0.5,
        skin: 'layui-layer-rim',
        maxmin: true,
        closeBtn:2,
        area: ['80%', '90%'],
        shadeClose: true,
        closeBtn: 2,
        content: url
        //iframe的url
    });
}





