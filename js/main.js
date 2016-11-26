$(document).ready(function(){
	$.fn.extend({
		animateCss: function (animation){
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        	$(this).addClass('animated ' + animation)
        	$(this).on(animationEnd, function() {
            	$(this).removeClass('animated ' + animation);
        	});
		}
	});


    
	var time = new Date();
	//$('#hi').addClass('hidden').delay(1000).removeClass('hidden').animateCss('bounceIn');
	//$('#hi').hide(0).delay(1000).show(0).animateCss('bounceIn');
	setTimeout(function () {
		$('#hi').removeClass('hidden');
		$('#hi').animateCss('tada');
	}, 1000)
    setTimeout(function () {
		$('.intro').removeClass('hidden');
		$('.intro').animateCss('fadeIn');
	}, 2300)
    setTimeout(function () {
		$('.fa-twitter').removeClass('hidden');
		$('.fa-twitter').animateCss('bounceIn');
	}, 3000)
    setTimeout(function () {
		$('.fa-github').removeClass('hidden');
		$('.fa-github').animateCss('bounceIn');
	}, 3200)

});