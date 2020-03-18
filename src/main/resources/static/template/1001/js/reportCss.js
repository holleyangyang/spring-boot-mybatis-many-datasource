var initCss ={};


 
//打开loading
initCss.addDiv = function(){
	var loadDiv = document.getElementById("loading");
	if(loadDiv==undefined){
		return;
	}
	loadDiv.style.display='block';
	loadDiv.parentNode.style.minHeight = '4rem';
	$(".mid_l").hide();
};
//关闭loading
initCss.closeDiv = function(){
	var loadDiv = document.getElementById("loading");
	if(loadDiv==undefined){
		return;
	}
	loadDiv.style.display='none';
	loadDiv.parentNode.style.minHeight='auto';
	$(".mid_l").show();
};
   
initCss.initPageHeight = function(tab){
	setTimeout(function(){
		var tab_H;
 
	 var top_H = $('.top').height();
	 var bot_H = $('.bot').height();
	 var scr_H = $(document.body).height()-top_H-bot_H;
	 
	 if (tab_H<=scr_H) {
		 	$('.mid').css('max-height','auto');
		 	$('.mid_l').css('max-height','auto');
	}else{
		 	$('.mid').css('max-height', scr_H+'px');
		 	$('.mid_l').css('max-height', scr_H+'px');
	}
	 if($('.tb_bot .fixed').height() ==0){
	       $('.notebox').addClass('topline');
	}else{
		$('.notebox').removeClass('topline');
	}
 
	 initCss.callFunc();
	 initCss.clearScroll();
	 },0);
};


initCss.clearScroll=function (){
	$('.mid').scrollTop(0);
	$('.mid_l .tb_l').scrollTop(0);
	$('.mid').scrollLeft(0); 
    $('.tb_bot').scrollLeft(0); 
 	$('.tb_top').scrollLeft(0); 
 	$('.main .tb_top').removeClass('normalbg');
	$('.main .tb_bot').removeClass('normalbg');
	$('.maxmid').removeClass('normalbg');
};

/**
 * 表格滚动
 */
initCss.callFunc =function(){
	var mStartx = 0;
	var mStarty =0;
	var topY;
	var botY;
	if($('.top .fixed').eq(0).offset()) topY = $('.top .fixed').eq(0).offset().top;
	if($('.bot').eq(0).offset()) botY = $('.bot').eq(0).offset().top;
	$(".maxmid").bind('touchstart',function(e){
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".maxmid").bind('touchend',function(e){
	     	mStartx=$('.mid').scrollLeft();
	     	mStarty=$('.mid').scrollTop();  
	     setTimeout(function(){
	 		$(".ybysindex_save").removeClass('ybysindex_save_move opacity'); 
	 	}, 3000);
	});
	$(".maxmid").bind('touchmove',function(e){
		if($(".no_data").css("display") !=="none"){
			return ;
		}
		if(topY<startY&&botY>startY){
	    //获取滑动屏幕时的X,Y
	    endX = e.originalEvent.changedTouches[0].pageX,
	    endY = e.originalEvent.changedTouches[0].pageY;
	    //获取滑动距离
	    distanceX = endX-startX;
	    distanceY = endY-startY;
	    $(".ybysindex_save").addClass('ybysindex_save_move');
	    //判断滑动方向
	    if(Math.abs(distanceX)>Math.abs(distanceY)){
	         if (e.cancelable) {
		        // 判断默认行为是否已经被禁用
		        if (!e.defaultPrevented) {
		            e.preventDefault();
		        }
		    }
	        $('.al_tip').hide(); 
		 	$('.tag_ask').removeClass('hover')
	        $('.mid').scrollLeft(-distanceX+mStartx); 
	        $('.tb_bot').scrollLeft(-distanceX+mStartx); 
	     	$('.tb_top').scrollLeft(-distanceX+mStartx); 
	     	var b=$('.mid').scrollLeft(); 
		    var dw=document.documentElement.clientWidth;
		    var c=parseInt(b/dw*100);
		    if ($('.main').hasClass('col5')) {
		    	b=$('.col5 .mid').scrollLeft();
		     	if (c>=24) {
		     		$('.col5 .tb_top').addClass('normalbg');
		     		$('.col5 .tb_bot').addClass('normalbg');
		     		$('.maxmid').addClass('normalbg');
		     	}else{
		     		$('.col5 .tb_top').removeClass('normalbg');
		     		$('.col5 .tb_bot').removeClass('normalbg');
		     		$('.maxmid').removeClass('normalbg');
		     	}
		     };
		     if ($('.main').hasClass('col6')) {
		     	b=$('.col6 .mid').scrollLeft();
		     	if (c>=49) {
		     		$('.col6 .tb_top').addClass('normalbg');
		     		$('.col6 .tb_bot').addClass('normalbg');
		     		$('.maxmid').addClass('normalbg');
		     	}else{
		     		$('.col6 .tb_top').removeClass('normalbg');
		     		$('.col6 .tb_bot').removeClass('normalbg');
		     		$('.maxmid').removeClass('normalbg');
		     	}
		     };
		     if ($('.main').hasClass('col7')) {
		     	b=$('.col7 .mid').scrollLeft();
			     	if (c>=74) {
			     		$('.col7 .tb_top').addClass('normalbg');
			     		$('.col7 .tb_bot').addClass('normalbg');
			     		$('.maxmid').addClass('normalbg');
			     	}else{
			     		$('.col7 .tb_top').removeClass('normalbg');
			     		$('.col7 .tb_bot').removeClass('normalbg');
			     		$('.maxmid').removeClass('normalbg');
			     	}
			     };
		     if ($('.main').hasClass('col8')) {
		     	b=$('.col8 .mid').scrollLeft();
			     	if (c>=99) {
			     		$('.col8 .tb_top').addClass('normalbg');
			     		$('.col8 .tb_bot').addClass('normalbg');
			     		$('.maxmid').addClass('normalbg');
			     	}else{
			     		$('.col8 .tb_top').removeClass('normalbg');
			     		$('.col8 .tb_bot').removeClass('normalbg');
			     		$('.maxmid').removeClass('normalbg');
			     	}
			     };
			  if ($('.main').hasClass('col9')) {
			    	b=$('.col9 .mid').scrollLeft();
			     	if (c>=124) {
			     		$('.col9 .tb_top').addClass('normalbg');
			     		$('.col9 .tb_bot').addClass('normalbg');
			     		$('.maxmid').addClass('normalbg');
			     	}else{
			     		$('.col9 .tb_top').removeClass('normalbg');
			     		$('.col9 .tb_bot').removeClass('normalbg');
			     		$('.maxmid').removeClass('normalbg');
			     	}
			     };
				  if ($('.main').hasClass('col10')) {
				    	b=$('.col10 .mid').scrollLeft();
				     	if (c>=149) {
				     		$('.col10 .tb_top').addClass('normalbg');
				     		$('.col10 .tb_bot').addClass('normalbg');
				     		$('.maxmid').addClass('normalbg');
				     	}else{
				     		$('.col10 .tb_top').removeClass('normalbg');
				     		$('.col10 .tb_bot').removeClass('normalbg');
				     		$('.maxmid').removeClass('normalbg');
				     	}
				     };
	    }else if(Math.abs(distanceX)<Math.abs(distanceY)){
	         if (e.cancelable) {
		        // 判断默认行为是否已经被禁用
		        if (!e.defaultPrevented) {
		            e.preventDefault();
		        }
		    }
	        $('.al_tip').hide(); 
		 	$('.tag_ask').removeClass('hover');
			$('.mid').scrollTop(-distanceY+mStarty);
			$('.mid_l .tb_l').scrollTop(-distanceY+mStarty);
	    }else{
			//console.log('点击未滑动');
	    }
	}
	});

	};
	
 