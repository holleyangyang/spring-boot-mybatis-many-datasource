package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.entity.PersonInfo;

/**
 * 测试 数据源 1
 * <p>
 * 人员信息mapper接口
 *
 * @author 码农猿
 * @date 2019-03-25 23:08:13
 */
public interface PersonInfoMapper {
	@Insert(" INSERT INTO oasysdb.person_info" + 
			"(xingming," + 
			"yingwenming," + 
			"chushengriqi," + 
			"xingbie," + 
			"zuji," + 
			"zhengjianxinxi," + 
			"chutaoriqi," + 
			"chutaoguojia," + 
			"suozaizuzhi," + 
			"zhiwei," + 
			"suoshuleibie," + 
			"shoujiaoyuqingkuang," + 
			"jiatingqingkuang," + 
			"youxiangdizhi," + 
			"qitaxixi," + 
			"zaijingneichuliqingkuang," + 
			"canyuhuodong," + 
			"fumianziliao,tupiandizhi)" + 
			"VALUES" + 
			"(" + 
			"#{xingming}," + 
			"#{yingwenming}," + 
			"#{chushengriqi}," + 
			"#{xingbie}," + 
			"#{zuji}," + 
			"#{zhengjianxinxi}," + 
			"#{chutaoriqi}," + 
			"#{chutaoguojia}," + 
			"#{suozaizuzhi}," + 
			"#{zhiwei}," + 
			"#{suoshuleibie}," + 
			"#{shoujiaoyuqingkuang}," + 
			"#{jiatingqingkuang}," + 
			"#{youxiangdizhi}," + 
			"#{qitaxixi}," + 
			"#{zaijingneichuliqingkuang}," + 
			"#{canyuhuodong}," + 
			"#{fumianziliao},#{tupiandizhi})")
    int addPersonInfo(PersonInfo personInfo);
	
	@Insert("update oasysdb.person_info set " + 
		 "youxiangdizhi             =#{youxiangdizhi           }," + 
   		 "xingbie                   =#{xingbie                 }," + 
   		 "zuji                      =#{zuji                    }," + 
   		 "chutaoriqi                =#{chutaoriqi              }," + 
   		 "chushengriqi              =#{chushengriqi            }," + 
   		 "suoshuleibie              =#{suoshuleibie            }," + 
   		 "suozaizuzhi               =#{suozaizuzhi             }," + 
   		 "chutaoguojia              =#{chutaoguojia            }," + 
   		 "xingming                  =#{xingming                }," + 
   		 "zhengjianxinxi            =#{zhengjianxinxi          }," + 
   		 "qitaxixi                  =#{qitaxixi                }," + 
   		 "yingwenming               =#{yingwenming             }," + 
   		 "jiatingqingkuang          =#{jiatingqingkuang        }," + 
   		 "shoujiaoyuqingkuang       =#{shoujiaoyuqingkuang     }," + 
   		 "zaijingneichuliqingkuang  =#{zaijingneichuliqingkuang}," + 
   		 "zhiwei                    =#{zhiwei                  }," + 
   		 "canyuhuodong              =#{canyuhuodong            }," + 
   		 "fumianziliao              =#{fumianziliao            }, "+
   		"tupiandizhi              =#{tupiandizhi            } "+
   		 "where  id=#{id}")
	int updatePersonInfoById(PersonInfo personInfo);
	
	 @Select(" <script>  select * from oasysdb.person_info where  1=1 "
	 		+ " <if test='xingming!=null and xingming!=\"\"'> and xingming = #{xingming}</if>  "
	 		+ " <if test='suozaizuzhi!=null and suozaizuzhi!=\"\"'> and suozaizuzhi = #{suozaizuzhi}</if>  "
	 		+ "</script>")
    List<PersonInfo> getPersonInfoList(PersonInfo personInfo);
    
	 @Select("  select * from oasysdb.person_info ")
	  List<PersonInfo> getPersonInfoListAll(PersonInfo personInfo);
	 
    @Select("select * from oasysdb.person_info where id=#{id}")
    PersonInfo getPersonInfoById (@Param(value="id") int id);
    
     @Delete("delete from oasysdb.person_info where id=#{id}")
    int deletePersonInfoForId(PersonInfo personInfo);
}
