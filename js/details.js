var currentIndex;
$('.menu>ul>li').mouseenter(function () {
	currentIndex = $(this).index()
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.menu-list').show()
	$('.menu-list .cate-s').eq(currentIndex).show().siblings().hide()
})
$('.menu>ul>li').mouseleave(function () {
	$('.menu-list').hide();
	$('.menu>ul>li').eq(currentIndex).removeClass('ac')
})
$('.menu-list').hover(function () {
	$(this).show();
	$('.menu>ul>li').eq(currentIndex).addClass('ac')
},function () {
	$(this).hide()
	$('.menu>ul>li').eq(currentIndex).removeClass('ac')
})

function first(){
	var currentIndex;
	$('.hide').mouseenter(function () {
		currentIndex = $(this).index()
		$(this).children($('.mi-list'),$('.menu')).show()
		$(this).children($('a')).addClass('ac').siblings().remove('ac')
	})
	$('.hide').mouseleave(function () {
		$('.mi-list').hide();
		$('.menu').hide()
		$(this).children($('a')).removeClass('ac')
		
	})
	$('.mi-list').hover(function () {
		$(this).show();
	},function () {
		$(this).hide()
	})
}
first()

$('.main-img')
.hover(function () {
	$('.handle').show()
	$('.zoom').show()
},function () {
	$('.handle').hide()
	$('.zoom').hide()
})
.mousemove(function (ev) {
	var l = ev.clientX - ($(this).position().left -$(window).scrollLeft())- $('.handle').outerWidth() / 2;
	var t = ev.clientY - ($(this).position().top -$(window).scrollTop())- $('.handle').outerHeight() / 2;
	if (t < 0) t = 0;
	if (l < 0) l = 0;
	if (t > $('.main-img').height() - $('.handle').height()) {
		t = $('.main-img').height() - $('.handle').height()
	}
	if (l > $('.main-img').width() - $('.handle').width()) {
		l = $('.main-img').width() - $('.handle').width()
	}
	$('.handle').css({
		left: l,
		top: t
	})
	$('.zoom img').css({
		left: -l * 4,
		top: -t * 4
	})
})
$('.main-bottom img').click(function(){
	$('.main-img img').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
	$('.main-bottom img').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
	$('.zoom img').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})
$('.color a').click(function(){
	$('.color a').eq($(this).index()-1).addClass('ac').siblings().removeClass('ac')
})
$('.edi a').click(function(){
	$('.edi a').eq($(this).index()-1).addClass('ac').siblings().removeClass('ac')
})
$('.about li').click(function(){
	$('.about li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})
var index=0
$('#right').click(function(){
	$('.main-img img').eq(index).removeClass('ac')
	$('.main-bottom img').eq(index).removeClass('ac')
	index++
	index%=6
	$('.main-img img').eq(index).addClass('ac')
	$('.main-bottom img').eq(index).addClass('ac')
})
$('#left').click(function(){
	$('.main-img img').eq(index).removeClass('ac')
	$('.main-bottom img').eq(index).removeClass('ac')
	index--
	if(index===-1){index=5}
	$('.main-img img').eq(index).addClass('ac')
	$('.main-bottom img').eq(index).addClass('ac')
})

$(window).scroll(function () {
	var scrTop = $(window).scrollTop();
	if (scrTop > 140) {
		$('.bot').addClass('nav-fixed')
		$('.main').addClass('mt-61');
	}
	else {
		$('.bot').removeClass('nav-fixed')
		$('.main').removeClass('mt-61');
	}
	$('.floor').each(function (index) {
		if ($(this).offset().top - $(window).scrollTop() < 300) {
			$('.asideList li').eq(index).addClass('ac').siblings().removeClass('ac')
		}
	})
})