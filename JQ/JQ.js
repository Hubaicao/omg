//搜索框
$(function(){
			$(".kuang").focus(function(){
				$(".kn").slideDown("fast")
			}).blur(function(){
				$(".kn").hide()
			})
			
			$(".kn li").mousedown(function(){
				$(".kuang").val($(this).html())
			})
//			导航
			$(".nav li").mouseover(function(){
				$(this).addClass("active").siblings().removeClass("active");
				var i=$(this).index();
				$(".content").eq(i).show().siblings(".content").hide()
			})
			$(".nav").mouseleave(function(){
				$(".nav li").removeClass("active")
				$(".content").hide()
		    })
//			banner
				var timer=null;
				var liwidth=$(".piclist li").width(); 
				
				for (var n=0;n<$(".piclist li").length;n++) {
					$(".tips").append("<span></span>")
				}
				
				$(".tips span").eq(0).addClass("active");
				
				$(".tips span").hover(function(){
					clearInterval(timer);
					$(this).addClass("active").siblings().removeClass("active");
					var k=$(this).index();
					$(".piclist ul").stop().animate({"left":-liwidth*k})
				},function(){
					 autoPlay();
				})
				//左按钮
				var num=0;
				$(".leftArr").click(function(){
					if (num<$(".piclist li").length) {
						$(".piclist ul").stop().animate({"left":-liwidth*num})
						$(".tips span").eq(num).addClass("active").siblings().removeClass("active");
						num++;
					} else{
						num=0
					}
				})
				//右按钮
				$(".rightArr").click(function(){
					if (num>0) {
						
						$(".piclist ul").stop().animate({"left":-liwidth*num})
						$(".tips span").eq(num).addClass("active").siblings().removeClass("active");
						num--;
					} else{
						num=$(".piclist li").length-1
					}
				})
				
				
				function autoPlay(){
					var i=0;
				timer=setInterval(function(){
					if (i<$(".piclist li").length) {
						$(".piclist ul").stop().animate({"left":-liwidth*i})
						$(".tips span").eq(i).addClass("active").siblings().removeClass("active");
						i++;
					} else{
						i=0
					}
					},2000)
				}
				autoPlay()
			
			$(".listWbRight .jian").click(function(){
				$(".listWbRight .jian").nextSibling.nextSibling.innerHTML--;
			
			})
		})