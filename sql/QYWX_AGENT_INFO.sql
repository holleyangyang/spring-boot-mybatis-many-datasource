-- Create table
create table QYWX_AGENT_INFO
(
  appid      VARCHAR2(40),
  agent_id   VARCHAR2(40),
  corpsecret VARCHAR2(100),
  state      VARCHAR2(2),
  agent_name VARCHAR2(40)
);
-- Add comments to the table 
comment on table QYWX_AGENT_INFO
  is '企业微信应用信息对应表';
-- Add comments to the columns 
comment on column QYWX_AGENT_INFO.appid
  is '企业微信appid';
comment on column QYWX_AGENT_INFO.agent_id
  is '企业微信应用id';
comment on column QYWX_AGENT_INFO.corpsecret
  is '应用的凭证密钥';
comment on column QYWX_AGENT_INFO.state
  is '状态';
comment on column QYWX_AGENT_INFO.agent_name
  is '应用名称';
  -- Create table
create table QYWX_SEND_MESSAGE_RECORD
(
  record_id            VARCHAR2(10) not null,
  appid                VARCHAR2(40) not null,
  agentid              VARCHAR2(40) not null,
  send_message_content VARCHAR2(4000) not null,
  plan_send_time       DATE not null,
  create_time          DATE not null,
  create_name          VARCHAR2(4000) not null,
  source               VARCHAR2(40)
);
-- Add comments to the table 
comment on table QYWX_SEND_MESSAGE_RECORD
  is '企业微信息推送总表';
-- Add comments to the columns 
comment on column QYWX_SEND_MESSAGE_RECORD.record_id
  is '消息记录编号';
comment on column QYWX_SEND_MESSAGE_RECORD.appid
  is '企业微信appid';
comment on column QYWX_SEND_MESSAGE_RECORD.agentid
  is '消息接收应用';
comment on column QYWX_SEND_MESSAGE_RECORD.send_message_content
  is '消息内容';
comment on column QYWX_SEND_MESSAGE_RECORD.plan_send_time
  is '消息计划发送时间';
comment on column QYWX_SEND_MESSAGE_RECORD.create_time
  is '消息写入时间';
comment on column QYWX_SEND_MESSAGE_RECORD.create_name
  is '消息写入人';
comment on column QYWX_SEND_MESSAGE_RECORD.source
  is '消息来源';
-- Create/Recreate primary, unique and foreign key constraints 
alter table QYWX_SEND_MESSAGE_RECORD
  add constraint PK_RECORD_ID primary key (RECORD_ID)
  ;
  
  
  -- Create table
create table QYWX_SEND_MESSAGE_RECORDED
(
  record_id            VARCHAR2(10) not null,
  appid                VARCHAR2(40) not null,
  agentid              VARCHAR2(40) not null,
  send_message_content VARCHAR2(4000) not null,
  plan_send_time       DATE not null,
  create_time          DATE not null,
  create_name          VARCHAR2(4000) not null,
  actually_send_time   DATE not null,
  send_message_result  VARCHAR2(4000) not null,
  source               VARCHAR2(40)
)
 ;
-- Add comments to the table 
comment on table QYWX_SEND_MESSAGE_RECORDED
  is '企业微信息推送总表';
-- Add comments to the columns 
comment on column QYWX_SEND_MESSAGE_RECORDED.record_id
  is '消息记录编号';
comment on column QYWX_SEND_MESSAGE_RECORDED.appid
  is '企业微信appid';
comment on column QYWX_SEND_MESSAGE_RECORDED.agentid
  is '消息接收应用';
comment on column QYWX_SEND_MESSAGE_RECORDED.send_message_content
  is '消息内容';
comment on column QYWX_SEND_MESSAGE_RECORDED.plan_send_time
  is '消息计划发送时间';
comment on column QYWX_SEND_MESSAGE_RECORDED.create_time
  is '消息写入时间';
comment on column QYWX_SEND_MESSAGE_RECORDED.create_name
  is '消息写入人';
comment on column QYWX_SEND_MESSAGE_RECORDED.actually_send_time
  is '信息实际发送时间';
comment on column QYWX_SEND_MESSAGE_RECORDED.send_message_result
  is '消息返回结果内容';
comment on column QYWX_SEND_MESSAGE_RECORDED.source
  is '消息来源';
  
  insert into QYWX_AGENT_INFO (APPID, AGENT_ID, CORPSECRET, STATE, AGENT_NAME)
values ('wxfd3c98939b419c4c', '9', 'scBnjpSgH--DCYI-f-pOvjy2eqGIPC_qCmf_K4LRi-g', '1', '银保报表
');

insert into QYWX_AGENT_INFO (APPID, AGENT_ID, CORPSECRET, STATE, AGENT_NAME)
values ('wxfd3c98939b419c4c', '8', 'KexT7e6W3yzHlKQMkgp2ISa27_sTfkSXKAd2eK95kV4', '1', '个险内勤应用
');

insert into QYWX_AGENT_INFO (APPID, AGENT_ID, CORPSECRET, STATE, AGENT_NAME)
values ('wxfd3c98939b419c4c', '1000012', '88vbNG6q4oBB4x7cLCNryvTncEVmkgRH3bhZj0BXBnQ', '1', '日常消息
');

insert into QYWX_AGENT_INFO (APPID, AGENT_ID, CORPSECRET, STATE, AGENT_NAME)
values ('wxfd3c98939b419c4c', 'all', 'O7Rzmo9aFUgqJg3ptV5F48uNO4CO1otoFB4VNvgdlMXS9wFJRxiA1GU6shanWYz2', '1', '最大权限');
  
  commit;
  insert into QYWX_SEND_MESSAGE_RECORDED (RECORD_ID, APPID, AGENTID, SEND_MESSAGE_CONTENT, PLAN_SEND_TIME, CREATE_TIME, CREATE_NAME, ACTUALLY_SEND_TIME, SEND_MESSAGE_RESULT, SOURCE)
values ('1', 'wxfd3c98939b419c4c', '8', '{
   "touser" : "yangyang",
   "toparty" : "",
   "totag" : "",
   "msgtype" : "text",
   "agentid" : 8,
   "text" : {
       "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
   },
   "safe":0,
   "enable_id_trans": 0,
   "enable_duplicate_check": 0
}', to_date('12-03-2020', 'dd-mm-yyyy'), to_date('12-03-2020', 'dd-mm-yyyy'), '0000', to_date('13-03-2020 18:10:04', 'dd-mm-yyyy hh24:mi:ss'), '{"errcode":0,"errmsg":"ok","invaliduser":""}', null);

insert into QYWX_SEND_MESSAGE_RECORDED (RECORD_ID, APPID, AGENTID, SEND_MESSAGE_CONTENT, PLAN_SEND_TIME, CREATE_TIME, CREATE_NAME, ACTUALLY_SEND_TIME, SEND_MESSAGE_RESULT, SOURCE)
values ('1', 'wxfd3c98939b419c4c', '8', '{
   "touser" : "yangyang",
   "toparty" : "",
   "totag" : "",
   "msgtype" : "text",
   "agentid" : 8,
   "text" : {
       "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
   },
   "safe":0,
   "enable_id_trans": 0,
   "enable_duplicate_check": 0
}', to_date('13-03-2020', 'dd-mm-yyyy'), to_date('13-03-2020', 'dd-mm-yyyy'), 'yyangya', to_date('13-03-2020 18:18:15', 'dd-mm-yyyy hh24:mi:ss'), '{"errcode":301002,"errmsg":"not allow operate another agent with this accesstoken., hint: [1584094694_78_80c11a89d13e0bc1b9fbb27c7c06059c], from ip: 183.195.0.111, more info at https://open.work.weixin.qq.com/devtool/query?e=301002"}', null);

insert into QYWX_SEND_MESSAGE_RECORDED (RECORD_ID, APPID, AGENTID, SEND_MESSAGE_CONTENT, PLAN_SEND_TIME, CREATE_TIME, CREATE_NAME, ACTUALLY_SEND_TIME, SEND_MESSAGE_RESULT, SOURCE)
values ('2', 'wxfd3c98939b419c4c', '9', '{
   "touser" : "yangyang",
   "toparty" : "",
   "totag" : "",
   "msgtype" : "text",
   "agentid" : 9,
   "text" : {
       "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
   },
   "safe":0,
   "enable_id_trans": 0,
   "enable_duplicate_check": 0
}', to_date('13-03-2020', 'dd-mm-yyyy'), to_date('13-03-2020', 'dd-mm-yyyy'), 'yyangya', to_date('13-03-2020 18:18:15', 'dd-mm-yyyy hh24:mi:ss'), '{"errcode":0,"errmsg":"ok","invaliduser":""}', null);

insert into QYWX_SEND_MESSAGE_RECORDED (RECORD_ID, APPID, AGENTID, SEND_MESSAGE_CONTENT, PLAN_SEND_TIME, CREATE_TIME, CREATE_NAME, ACTUALLY_SEND_TIME, SEND_MESSAGE_RESULT, SOURCE)
values ('1', 'wxfd3c98939b419c4c', '8', '{
   "touser" : "yangyang",
   "toparty" : "",
   "totag" : "",
   "msgtype" : "text",
   "agentid" : 8,
   "text" : {
       "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
   },
   "safe":0,
   "enable_id_trans": 0,
   "enable_duplicate_check": 0
}', to_date('12-03-2020', 'dd-mm-yyyy'), to_date('12-03-2020', 'dd-mm-yyyy'), '0000', to_date('13-03-2020 18:07:52', 'dd-mm-yyyy hh24:mi:ss'), '{"errcode":0,"errmsg":"ok","invaliduser":""}', null);

insert into QYWX_SEND_MESSAGE_RECORDED (RECORD_ID, APPID, AGENTID, SEND_MESSAGE_CONTENT, PLAN_SEND_TIME, CREATE_TIME, CREATE_NAME, ACTUALLY_SEND_TIME, SEND_MESSAGE_RESULT, SOURCE)
values ('0000', '000', '00', '00', to_date('12-03-2020', 'dd-mm-yyyy'), to_date('12-03-2020', 'dd-mm-yyyy'), '0000', to_date('12-03-2020', 'dd-mm-yyyy'), '00', null);

commit;
  
  
  