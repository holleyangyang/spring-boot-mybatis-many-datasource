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
			"suoshuleibie":""
		};
    
    
    
    $('#table').bootstrapTable({
        url: "/manager/personInfo/getPersonInfoList?pageSize=2&pageNum=1"  ,
        method: 'POST', 
        sidePagination : "client", //分页方式：client客户端分页，server服务端分页（*）
        pagination : true, //是否显示分页（*）
        queryParams : personInfoJson, //分页
        pageSize : 10, //每页显示的记录数
        pageNumber : 1, //当前第几页
        pageList : [ 10, 25, 50, 100 ], //记录数可选列表
        responseHandler: function(data){
            return data.rows;  //约定rows
        }, 
        columns: [

            {
                checkbox:"true",
                field: 'ID',
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
                title: '出逃日期',
                field: 'chutaoriqi',
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
                    var d = '<button button="#" mce_href="#" onclick="editNotice(\'' + row.id + '\')">编辑</button> ';
                    return e + d;
                }
            }
        ]
});
    
    
    
}
Personload();
function getData() {
   
    
    
    var personInfoJson = {
			"youxiangdizhi":"",
			"xingbie":"",
			"zuji":"",
			"chutaoriqi":"",
			"chushengriqi":"",
			"suoshuleibie":""
		};
    
    
    
    $.ajax({
        type: "POST",
        url: "/manager/personInfo/getPersonInfoList?pageSize=2&pageNum=1"  ,
        dataType: "json",
        contentType:"application/json",  
        data: JSON.stringify(personInfoJson),
        success: function (result) {
            if (result.data) {
                var TableData = result.data;
                $('#table').bootstrapTable("load", TableData);
            }
        }
    })
}
function add() {
    openlayer()
    currentID = "";
}
function edit(id) {
    openlayer()
    currentID = id;
}
function del(id) {
    
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
function getCurrentID() {
    return currentID;
}
function openlayer(id){
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
        content: 'person_add.html'
        //iframe的url
    });
}





