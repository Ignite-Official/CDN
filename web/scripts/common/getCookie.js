function getCookie(name) {
	let cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return cookie ? cookie[2] : null;
}