package com.example.util;
import java.util.List;
/**
 * 分页返回结果
 */
public class PageResult {
	private String code ;
	private String msg ;
    public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	/**
     * 当前页码
     */
    private int pageNum;
    /**
     * 每页数量
     */
    private int pageSize;
//    /**
//     * 记录总数
//     */
//    private long count;
    
    private long total;
    /**
     * 页码总数
     */
    private int totalPages;
//    /**
//     * 数据模型
//     */
//    private List<?> data;
    /**
     * 数据模型
     */
    private List<?> rows;
    public int getPageNum() {
        return pageNum;
    }
    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }
   
    
 
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public int getTotalPages() {
        return totalPages;
    }
    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }
//	public long getCount() {
//		return count;
//	}
//	public void setCount(long count) {
//		this.count = count;
//	}
//	public List<?> getData() {
//		return data;
//	}
//	public void setData(List<?> data) {
//		this.data = data;
//	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public List<?> getRows() {
		return rows;
	}
	public void setRows(List<?> rows) {
		this.rows = rows;
	}
	
   
}