function textarea_autosize(){
	var el = this;
	setTimeout(function(){
		el.style.cssText = 'height:auto; padding:28';
		// for box-sizing other than "content-box" use:
		// el.style.cssText = '-moz-box-sizing:content-box';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	},0);
}