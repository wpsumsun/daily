$(function(){
	$(".score-tab li").click(function(){
		$(this).addClass("li-cur").siblings().removeClass("li-cur");
	})
	$(".right-title ul li").click(function(){
		$(this).addClass("li-on").siblings().removeClass("li-on");	
	})
	$(".tab-ul  li").click(function(){
		$(this).addClass("subject-on").siblings().removeClass("subject-on");	
	})
	//导航栏切换
	function tabCheck(pars,par,wrap,child,className){
		var $li=$("."+pars+" ."+par).find("li");
	    var $tab=$("."+pars+" ."+wrap).children(child);
	    var len=$li.length;
	    $li.click(function(){
	        var $index=$(this).index();
	        $(this).addClass(className).siblings().removeClass(className);
	        $tab.hide();
	        $tab.eq($index).show();
	    })

	}
	//班主任
	tabCheck("teascore-con","score-tab","score-main","div","subject-on");
	function checkShow(){
		var headLi=$(".head-con .score-tab").find("li");
		if( headLi.eq(0).hasClass("li-cur") ){
	   		$(".hide-op").show();
		}
		else{
			$(".hide-op").hide();
		}
	}
	checkShow();
	$(".head-con .score-tab li").click(function(){
		checkShow();
	})
	//教师
	function checkHide(){
		var tutorLi= $(".tutor-con .score-tab").find("li");
		if(tutorLi.eq(0).hasClass("li-cur") ){
	   		$(".hide-op,.right-title>select,.right-title>button").show();
	   		$(".right-title>ul").hide();
		}
		else if(tutorLi.eq(1).hasClass("li-cur") ){
	   		$(".hide-op,.right-title>ul,.right-title>button").hide();
	   		$(".right-title>select").show();
		}
		else if(tutorLi.eq(2).hasClass("li-cur") ){
	   		$(".right-title>ul,.right-title>button").show();
	   		$(".hide-op,.right-title>select").hide();
		}
	}
	checkHide();
	$(".tutor-con .score-tab li").click(function(){
		checkHide();
	})
	//班主任-单科分析
	function headCheck(){
		var headLi=$(".headtea-main .score-tab").find("li");
		if( headLi.eq(0).hasClass("li-cur") ){
			$(".right-title>ul").hide();
			$(".hide-op,.right-title>select,.right-title>button").show();	   		
		}
		else if( headLi.eq(1).hasClass("li-cur") ){
			$(".hide-op,.right-title>select").hide();
			$(".right-title>ul,.right-title>button").show();	   		
		}
		else if( headLi.eq(2).hasClass("li-cur") ){
			$(".hide-op,.right-title>select").hide();
			$(".right-title>ul,.right-title>button").show();	   		
		}
	}
	headCheck();
	$(".headtea-main .score-tab li").click(function(){
		headCheck();
	})
	//选择学年学期考试类型
	$(".term-select").click(function(){
		$(".white-bg").hide();
		$(".type-select").next(".hide-checkbox").hide();
		$(this).next(".hide-checkbox").toggle();
		$(".white-bg").toggle();
	})
	$(".type-select").click(function(){
		$(".white-bg").hide();
		$(".term-select").next(".hide-checkbox").hide();
		$(this).next(".hide-checkbox").toggle();
		$(".white-bg").toggle();
	})
	$("body").on("click",".btn-wrap .btn-esc",function(){
		$(this).parent().parent().hide();
		$(".white-bg").hide();
	})
	$(".white-bg").click(function(){
		$(".hide-checkbox,.white-bg").hide();
	})
	//查看
	$(".table-total .table-look").click(function(){
		$(".table-wrap .table-total").hide();
		$(".root-back,.table-single").show();
	})
	$(".root-back").click(function(){
		$(".root-back,.table-single").hide();
		$(".table-wrap .table-total").show();
	})
	//班主任-分析维度
	tabCheck("teascore-con","score-tab","table-main","table","li-cur");
	//展开班级列表
	$(".class-list dt").click(function(){
		$(this).addClass("dt-active").parent().siblings().find("dt").removeClass("dt-active");
		$(this).parent("dl").siblings().find("dd").hide(400);
		$(this).parent("dl").find("dd").toggle(400);
	})
	//左右固定
	function headFixed(){
		var headteaL=$(".headtea-main .single-r").offset().left;
		var headteaW=$(".headtea-main .single-r").outerWidth();
		$(".headtea-main .single-l").css("left",headteaL-250+"px");
		$(".headtea-main .subject-select").css("left",headteaL+headteaW+15+"px");
	}
	headFixed();
	$(window).resize(function(){
		headFixed();
	})
	//选择学生
	$("body").on("click",".subject-select dd",function(){
		$(this).addClass("dd-cur").siblings().removeClass("dd-cur");
	})
	//选择考试
	$('body').on("click",".analyse-list dd",function(){
		$(this).addClass("dd-on").siblings().removeClass("dd-on");
	})
})