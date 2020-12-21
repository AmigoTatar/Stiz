$("#navToggle").click(function () {
	$(this).toggleClass("active");
	$(".overlay").toggleClass("open");
	$("body").toggleClass("locked");
});
$('overlay').click(function(){
	$(this).removeClass('open');
	$('.navBurger').removeClass('active');
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 70) {
       $('#navToggle').css({
            'display': 'none'
        });
    }
    if ($(this).scrollTop() < 70) {
        $('#navToggle').css({
            'display': 'block'
        });
    }
});

