/**
 * Created by Administrator on 2016/8/4.
 */

var user, role, currentID, flag = true;
function Personload() {
    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageList: [10, 20, 50],
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
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
    getData();
}
function getData() {
    if (flag) {
        user = "";
        role = "";

        flag = false;
    } else {
        user = $("#user").val();
        role = $("#role").val();

    }
    
    
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
        url: "/manager/personInfo/getPersonInfoList?pageSize=11&pageNum=1"  ,
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





