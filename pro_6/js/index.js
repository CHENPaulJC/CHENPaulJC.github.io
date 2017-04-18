$(".ui-back1-item1").click(function() {
 	$(".ui-main").css({
 		'background' : '#c0c0c0',
 		'width' : "600px",
 		'height' : "600px"
 	});	
 });

 $('.ui-main').click(function() {
 	$(".ui-main").css({
 		'width' : "0",
 		'height' : "0"
 	});
 });



$(".ui-back2-item2 div").hide();
$(".ui-back2-item11").each(function(index){
    $(this).click(function(){
	     $(".ui-back2-item11").removeClass("current");
	     $(this).addClass("current");
	     $(".ui-back2-item2 > div:visible").hide();
	     $(".ui-back2-item2 div:eq(" +index+ ")").show();
    });
});
 


$(".button").click(function(){
	var a;
	if(isNaN(parseInt($(".empty").prev().children(".addbox-1").text())))
		a=1;
	else
		a=parseInt($(".empty").prev().children(".addbox-1").text())+1;
	$(".empty").before("<div class='addbox'><div class='addbox-1'></div><div class='addbox-2'></div><div class='addbox-3'>Delete</div></div>");
	$(".empty").prev().children(".addbox-1").text(a);
	$(".addbox-3").click(function(){
		var a=parseInt($(this).parent().children('.addbox-1').text())-1;
		$(this).parent().nextAll().children('.addbox-1').text(function(){
			a++;
			return a;
		});
		$(this).parent().remove();
	});
});