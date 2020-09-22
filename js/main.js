//show navbar menu on mobile
function navbarToggle() {
	var opened = $(".js-navbar").hasClass("is-active");
	var toggled = $(".js-toggler").hasClass("is-toggled");

	if (toggled === false) {
		$(".js-navbar").addClass("is-active");
		$(".js-toggler").addClass("is-toggled");

	} else {
		$(".js-navbar").removeClass("is-active");
		$(".js-toggler").removeClass("is-toggled");
	}
}


//move cursor relative to cursor position
$('.hero').mousemove(function (e) {
	var amountMovedX = (e.pageX / 50);
	var amountMovedY = (e.pageY / 50);
	$('.hero').css('background-position', amountMovedY + 'px ' + amountMovedX + 'px');
});
