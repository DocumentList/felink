$(function(){
	var a =1;
	$('.sub-icon').click(function(){
		$('.position-big2').toggle(100)
		$('.position-big2').css('background-color','rgba(43, 54, 67, 0.97)')
		$(this).css('background-color','#313e4e');
		
		var b=a*180 + 'deg'
			if(a>1){
				a=0;
				b=a*180 + 'deg'
				$(this).css('transform','rotate('+b+')');
			}else if(a=1){
				$(this).css('transform','rotate('+b+')');
			}
		a++;
	})
	
	$('.one span').click(function(){
		$(this).addClass('icon-one').siblings().removeClass('icon-one')
		$('.ull3').slideToggle(500)
		
	})
	
	/*var timer;
	function acc(){
		var a =0
		timer = setInterval(function(){
			a++;
			if(a>2){
				a= 0
			}
			$('.contentN').children().eq(a).show().siblings().hide()
		},2000)
	}
	acc();*/
	
	 var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:true,//等同于以下设置
	  autoplay: {
	    delay: 2000,
	   
	    },
	    spaceBetween: 30,
     	pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop : true,
    });
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
