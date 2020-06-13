$(function() {
	 	alert("This is a fresh project, modification's still ongoing. Best viewed on Chrome. Enjoy!!!!")
});
$(function(){
	$("#ab").click(function(){
		$('html, body').animate({
			scrollTop: $(".avatar").offset().top
		}, 500);
	});
	$("#pt").click(function(){
		$('html, body').animate({
			scrollTop: $(".p5").offset().top
		}, 500);
	});
	$("#ct").click(function(){
		$('html, body').animate({
			scrollTop: $("#cont").offset().top
		}, 500);
	});
	$("#abm").click(function(){
		$('html, body').animate({
			scrollTop: $(".avatar").offset().top
		}, 500);
	});
	$("#ptm").click(function(){
		$('html, body').animate({
			scrollTop: $(".p5").offset().top
		}, 500);
	});
	$("#ctm").click(function(){
		$('html, body').animate({
			scrollTop: $("#cont").offset().top
		}, 500);
	});
	$("#menu").click(function() {
		// $(".h2").toggleClass("hide");
		$(".mobile").fadeToggle(500);
	});
});