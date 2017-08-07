var win_height = $(window).height(), header_height = $("#header").height();
$(".layer_content_left").css({
	"height" : win_height - header_height + "px" 
});
$(".layer_content_center").css({
	"height" : win_height - header_height + "px" 
});
$(".layer_content_right").css({
	"height" : win_height - header_height + "px" 
});

$(".layer_content_tabmenu li").click(function(){
	$(this).addClass("lct_on");
});