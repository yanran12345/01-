$.fn.abc = function(){
	this.css('background','red')
}
$.fn.slideUp = function(){
	var h = this.height()
	this.attr('myH',h)
	this.css({
		'height':0,
		'transition':'0.5s'
	})
}
$.fn.slideDown = function(){
	var h = this.attr('myH')
	this.css({
		'height':h+'px',
		'transition':'0.5s'
	})
}
