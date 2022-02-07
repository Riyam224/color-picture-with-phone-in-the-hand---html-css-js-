$(document).ready(() => {
	$('#container').mousemove(function(e) {
		$('#box').css({left:e.pageX, top:e.pageY});
		$('#container').css({left:e.pageX, top:e.pageY});
	});
})