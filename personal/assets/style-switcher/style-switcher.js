$(function(){
	
	$('head').append('<link rel="stylesheet" href="./personal/assets/style-switcher/style-switcher.css" type="text/css" />');	
	$('head').append('<script src="./personal/assets/style-switcher/jquery.cookie.js"></script>');	
		
	//Style container
	var switcher = $('<div class="switcher"><span class="switch"><i class="fa fa-gear"></i></span> <h4>Style Switcher</h4> <hr> <p>Color Styles</p><div class="s-color"> <a href="#" class="active" data-code="default"> <label class="default"></label> </a> <a href="#" data-code="light-blue"> <label class="light-blue"></label> </a> <a href="#" data-code="teal"> <label class="teal"></label> </a> <a href="#" data-code="light-pink"> <label class="light-pink"></label> </a> <a href="#" data-code="yellow"> <label class="yellow"></label> </a> <a href="#" data-code="purple"> <label class="purple"></label> </a></div> <div class="s-header"> <p>Header Styles</p><a href="index.html">Default</a><a href="index2.html">Option 2</a><a href="index3.html">Option 3</a><a class="dark" href="index4.html">Option 4</a></div></div>');
	
	$('body').append(switcher);
			
		// Display after some time 
	$(".switcher .switch-h").delay("1500").fadeIn(3000);
		
	setTimeout(function(){ $('.switcher .switch-h').fadeOut() }, 10000);	
	
	/* Window resize
	$(window).resize(function(){
		var $slidebox=$('.switcher');
		if($(window).width() >= 767){
			$slidebox.animate({left:0},300);
		} else {
			$slidebox.animate({left:-251},300);
		}          
	}); */
	
	// Switcher slide
	/* By Cookie
	if($.cookie('switch')!=null){
		$('.switcher').animate({left:-251},300);		
	} */
	$('.switch').click(function() {
		var $slidebox=$('.switcher');
		// var $s_hide=1;
		if($slidebox.css('left')=="-251px"){
		  $slidebox.animate({left:0},300);
		}
		else{
		  $slidebox.animate({left:-251},300);
		  // $.cookie('switch', $s_hide);
		}
	});    
	
	
	// Color Changer
	// By Cookie
	// if($.cookie('braveColor')!=null){
	// 	var color_code = $.cookie('braveColor');
	// 	$('link[id="color_theme"]').attr('href', 'css/theme-options/'+color_code+'.css');
	// }
	// By click
	$('.s-color a').click(function(e){
		e.preventDefault();
		$('.s-color a').removeClass('active');
		$(this).addClass('active');
		var color_code = $(this).attr('data-code');
		$('link[id="color-scheme"]').attr('href', './personal/assets/css/color-scheme/'+color_code+'.css');
		$.cookie('braveColor', color_code);
	});
	
	
	// Layout Changer
	// Using cookie 
	if($.cookie('braveLayout')!=null){
		var body = $('body');
		if (!(body.hasClass('no-box'))){
			var layout = $.cookie('braveLayout');
			if (layout == 'wide') {
				body.removeClass('boxed');
			}
			else if (layout == 'box'){
				if(!body.hasClass('boxed')){
					body.addClass('boxed');
				}
			}
		}
	}	
	
	// By selecting
	$('.s-layout').change(function(){
		var body = $('body');
		if (!(body.hasClass('no-box'))){
			var layout = $(this).val();
			if (layout == 'wide') {
				body.removeClass('boxed');
				$.cookie('braveLayout', layout);
			}
			else if (layout == 'box'){
				if(!body.hasClass('boxed')){
					body.addClass('boxed');
					$.cookie('braveLayout', layout);
				}
			}
		}
		else{
			alert('You cannot change layout on this page');
		}
	});
	
	// Pattern Changer
	$('.s-pattern a').click(function(e){
		e.preventDefault();
		var body = $('body');
		var pattern_num = $(this).attr('data-num');
		if (body.hasClass('boxed')){
			body.removeClass().addClass('boxed').addClass('pattern-'+pattern_num);
		} else {
			alert('First change layout to Boxed');
		}
	});
	
	// Back Image Changer
	$('.s-back-img a').click(function(e){
		e.preventDefault();
		var body = $('body');
		var img_num = $(this).attr('data-img-num');
		if (body.hasClass('boxed')){
			body.removeClass().addClass('boxed').addClass('img-'+img_num);
		} else {
			alert('First change layout to Boxed');
		}
	});		
	
});