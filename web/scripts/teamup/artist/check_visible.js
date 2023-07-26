function check_visible( element, check = 'above' ) {
	const viewportHeight = $(window).height(); // Viewport Height
	const scrolltop = $(window).scrollTop(); // Scroll Top
	const y = $(element).offset().top;
	const elementHeight = $(element).height();   
	
	// 반드시 요소가 화면에 보여야 할경우
	if (check == "visible") 
		return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		
	// 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
	if (check == "above") 
		return ((y < (viewportHeight + scrolltop)));
}