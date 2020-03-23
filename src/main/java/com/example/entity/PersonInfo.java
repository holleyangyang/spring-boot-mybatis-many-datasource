package com.example.entity;


import java.io.Serializable;
import java.util.Date;

import com.example.util.PageRequest;

import net.sf.json.JSONObject;

/**
 * 人员信息实体类
 *
 * @author 码农猿
 * @date 2019-03-25 23:08:13
 */
public class PersonInfo extends PageRequest implements Serializable {

    private static final long serialVersionUID = 1L;
    private String  xingming;
    private String id;
    private String yingwenming;
    private String chushengriqi;
    private String xingbie;
    private String zuji;
    private String zhengjianxinxi;
    private String chutaoriqi;
    private String chutaoguojia;
    private String suozaizuzhi;
    private String zhiwei;
    private String suoshuleibie;
    private String shoujiaoyuqingkuang;
    private String jiatingqingkuang;
    private String youxiangdizhi;
    private String qitaxixi;
    private String zaijingneichuliqingkuang;
    private String canyuhuodong;
    private String fumianziliao;
    
    private String tupiandizhi;
	public String getTupiandizhi() {
		return tupiandizhi;
	}
	public void setTupiandizhi(String tupiandizhi) {
		this.tupiandizhi = tupiandizhi;
	}
	public String getXingming() {
		return xingming;
	}
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getYingwenming() {
		return yingwenming;
	}
	public void setYingwenming(String yingwenming) {
		this.yingwenming = yingwenming;
	}
	public String getChushengriqi() {
		return chushengriqi;
	}
	public void setChushengriqi(String chushengriqi) {
		this.chushengriqi = chushengriqi;
	}
	public String getXingbie() {
		return xingbie;
	}
	public void setXingbie(String xingbie) {
		this.xingbie = xingbie;
	}
	public String getZuji() {
		return zuji;
	}
	public void setZuji(String zuji) {
		this.zuji = zuji;
	}
	public String getZhengjianxinxi() {
		return zhengjianxinxi;
	}
	public void setZhengjianxinxi(String zhengjianxinxi) {
		this.zhengjianxinxi = zhengjianxinxi;
	}
	public String getChutaoriqi() {
		return chutaoriqi;
	}
	public void setChutaoriqi(String chutaoriqi) {
		this.chutaoriqi = chutaoriqi;
	}
	public String getChutaoguojia() {
		return chutaoguojia;
	}
	public void setChutaoguojia(String chutaoguojia) {
		this.chutaoguojia = chutaoguojia;
	}
	public String getSuozaizuzhi() {
		return suozaizuzhi;
	}
	public void setSuozaizuzhi(String suozaizuzhi) {
		this.suozaizuzhi = suozaizuzhi;
	}
	public String getZhiwei() {
		return zhiwei;
	}
	public void setZhiwei(String zhiwei) {
		this.zhiwei = zhiwei;
	}
	public String getSuoshuleibie() {
		return suoshuleibie;
	}
	public void setSuoshuleibie(String suoshuleibie) {
		this.suoshuleibie = suoshuleibie;
	}
	public String getShoujiaoyuqingkuang() {
		return shoujiaoyuqingkuang;
	}
	public void setShoujiaoyuqingkuang(String shoujiaoyuqingkuang) {
		this.shoujiaoyuqingkuang = shoujiaoyuqingkuang;
	}
	public String getJiatingqingkuang() {
		return jiatingqingkuang;
	}
	public void setJiatingqingkuang(String jiatingqingkuang) {
		this.jiatingqingkuang = jiatingqingkuang;
	}
	public String getYouxiangdizhi() {
		return youxiangdizhi;
	}
	public void setYouxiangdizhi(String youxiangdizhi) {
		this.youxiangdizhi = youxiangdizhi;
	}
	public String getQitaxixi() {
		return qitaxixi;
	}
	public void setQitaxixi(String qitaxixi) {
		this.qitaxixi = qitaxixi;
	}
	public String getZaijingneichuliqingkuang() {
		return zaijingneichuliqingkuang;
	}
	public void setZaijingneichuliqingkuang(String zaijingneichuliqingkuang) {
		this.zaijingneichuliqingkuang = zaijingneichuliqingkuang;
	}
	public String getCanyuhuodong() {
		return canyuhuodong;
	}
	public void setCanyuhuodong(String canyuhuodong) {
		this.canyuhuodong = canyuhuodong;
	}
	public String getFumianziliao() {
		return fumianziliao;
	}
	public void setFumianziliao(String fumianziliao) {
		this.fumianziliao = fumianziliao;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public static void main(String[] args) {
		PersonInfo n = new PersonInfo();
		System.out.println(JSONObject.fromObject(n).toString());
		
	}
	@Override
	public String toString() {
		return "PersonInfo [xingming=" + xingming + ", id=" + id + ", yingwenming=" + yingwenming + ", chushengriqi="
				+ chushengriqi + ", xingbie=" + xingbie + ", zuji=" + zuji + ", zhengjianxinxi=" + zhengjianxinxi
				+ ", chutaoriqi=" + chutaoriqi + ", chutaoguojia=" + chutaoguojia + ", suozaizuzhi=" + suozaizuzhi
				+ ", zhiwei=" + zhiwei + ", suoshuleibie=" + suoshuleibie + ", shoujiaoyuqingkuang="
				+ shoujiaoyuqingkuang + ", jiatingqingkuang=" + jiatingqingkuang + ", youxiangdizhi=" + youxiangdizhi
				+ ", qitaxixi=" + qitaxixi + ", zaijingneichuliqingkuang=" + zaijingneichuliqingkuang
				+ ", canyuhuodong=" + canyuhuodong + ", fumianziliao=" + fumianziliao + ", tupiandizhi=" + tupiandizhi
				+ "]";
	}
    

}
