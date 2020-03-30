$(function(){
	$('.box1').on('click',function(){
		$('.box1').addClass('box1-ext');
	});
// マウスを乗せたら青


	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
// マウスを外したら赤
	});
});