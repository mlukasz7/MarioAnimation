$(function(){
	function front() {
		$('#marioControl1')
			.removeClass('back')
			.removeClass('left')
			.removeClass('right')
			.addClass('front');
	}
	function back(){
		$('#marioControl1')
			.removeClass('back')
			.removeClass('left')
			.removeClass('front')
			.addClass('back');
	}
	function left(){
		$('#marioControl1')
			.removeClass('back')
			.removeClass('top')
			.removeClass('front')
			.addClass('left');
	}
	function right(){
		$('#marioControl1')
			.removeClass('back')
			.removeClass('top')
			.removeClass('left')
			.addClass('right');
	}
	$('#front').click(function(){
		front();
	});
	$('#back').click(function(){
		back();
	});
	$('#left').click(function(){
		left();
	});
	$('#right').click(function(){
		right();
	});
	$(document).keydown(onKeyDown);
	function onKeyDown(evt){
		if (evt.keyCode == 38) front();
	  else if (evt.keyCode == 40) back();
	  else if (evt.keyCode == 39) right();
	  else if (evt.keyCode == 37) left();
	}

});