window.onload=function(){
				var back=document.getElementById("back");
				var timer=null;
					back.onclick=function(){
							clearInterval(timer)

							timer=setInterval(function(){

								var myScrollTop=document.documentElement.scrollTop || document.body.scrollTop;

								if (myScrollTop<=8) {
									
									clearInterval(timer)

								} else {
									document.documentElement.scrollTop = document.body.scrollTop=myScrollTop-Math.floor(myScrollTop/8)
									
								}
							},30)
					}
		}