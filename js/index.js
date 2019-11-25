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
		$(this).children($('.mi-list')).show()
		$(this).children($('a')).addClass('ac').siblings().remove('ac')
	})
	$('.hide').mouseleave(function () {
		$('.mi-list').hide();
		$(this).children($('a')).removeClass('ac')
		
	})
	$('.mi-list').hover(function () {
		$(this).show();
	},function () {
		$(this).hide()
	})
}
first()
var index=0
$('.btn-list li').click(function(){
	$('.pic-list li').eq(index).stop().fadeOut(800);
	$('.pic-list li').eq($(this).index()).stop().fadeIn(800);
	$('.btn-list li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
	index = $(this).index();
})
function next(){
	$('.btn-list li').eq(index).removeClass('ac')
	$('.pic-list li').eq(index).fadeOut(800,'linear')
	index++
	index%=5
	$('.btn-list li').eq(index).addClass('ac')
	$('.pic-list li').eq(index).fadeIn(800,'linear')
}
var timer;
function autoPlay(){
	timer = setInterval(function(){
		next()
	},2000)
}
autoPlay()
$('.pic-list li').hover(function(){
	clearInterval(timer)
},function(){
	autoPlay()
})
$('.pis-r').click(function(){
	$('.btn-list li').eq(index).removeClass('ac')
	$('.pic-list li').eq(index).fadeOut(800,'linear')
	index++
	index%=5
	$('.btn-list li').eq(index).addClass('ac')
	$('.pic-list li').eq(index).fadeIn(800,'linear')
})
$('.pis-l').click(function(){
	$('.btn-list li').eq(index).removeClass('ac')
	$('.pic-list li').eq(index).fadeOut(800,'linear')
	index--
	if(index===-1){index=4}
	$('.btn-list li').eq(index).addClass('ac')
	$('.pic-list li').eq(index).fadeIn(800,'linear')
})
$('.pis-r,.pis-l').hover(function(){
	clearInterval(timer)
},function(){
	autoPlay()
})


var currentIndex=0;
function nextt() {
	$('.goods-box').eq(currentIndex).animate({left: -1046},500);
	currentIndex ++;
	currentIndex %= 3;
	$('.goods-box').eq(currentIndex).show().css('left', 1046).animate({left: 0},500);
}
$('.btn-r').click(function(){
	nextt()
})
$('.btn-l').click(function(){
	$('.goods-box').eq(currentIndex).animate({left: 1046},500);
	currentIndex = currentIndex === 0 ? $('.goods-box').length - 1 : currentIndex - 1;
	$('.goods-box').eq(currentIndex).show().css('left', -1046).animate({left: 0},500);
})
$('.right li').mouseenter(function(){
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.goods-listt').eq($(this).index()).show().siblings().hide()
})

$('.book1 .btn-list li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.book1>ul>li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})
$('.book2 .btn-list li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.book2>ul>li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})
$('.book3 .btn-list li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.book3>ul>li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})
$('.book4 .btn-list li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac')
	$('.book4>ul>li').eq($(this).index()).addClass('ac').siblings().removeClass('ac')
})

function daojishi(){
   var y=2019;
   var m=9;
   var d=6;
   var timer=setInterval(function(){
    var myDate = new Date();
    var nowDate= myDate.getTime();
     myDate.setFullYear(y,m,d)
      myDate.setHours(0,0,0,0)
    var futureDate=myDate.getTime();
    var chazhi=(futureDate-nowDate)/1000;
   var hours=parseInt(chazhi/3600-1);
   var minutes=parseInt(chazhi%3600/60);
   var sec=parseInt(chazhi%60);
   $('.num').eq(0).html(hours)
   $('.num').eq(1).html(minutes)
   $('.num').eq(2).html(sec)
   },1000)
  }
  daojishi()