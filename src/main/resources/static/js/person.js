/**
 * Created by Administrator on 2016/8/4.
 */

var user, role, currentID, flag = true;
function Personload() {
	
	
    var personInfoJson = {
			"youxiangdizhi":"",
			"xingbie":"",
			"zuji":"",
			"chutaoriqi":"",
			"chushengriqi":"",
			"suoshuleibie":"",
		};
    
    
    
    $('#table').bootstrapTable({
        url: "/manager/personInfo/getPersonInfoList"  ,
        method: 'POST', 
        sidePagination : "client", //分页方式：client客户端分页，server服务端分页（*）
        pagination : true, //是否显示分页（*）
        queryParams : JSON.stringify(personInfoJson), //分页
        pageSize : 10, //每页显示的记录数
        contentType:"application/json",  

        pageNumber : 1, //当前第几页
        pageList : [ 10], //记录数可选列表
        responseHandler: function(data){
            return data.rows;  //约定rows
        }, 
        columns: [

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
        ]
});
    
    
    
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
            if (result.data) {
                var TableData = result.data;
                $('#table').bootstrapTable("load", TableData);
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





