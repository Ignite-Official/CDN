let button_url_prefix = "https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/account/account/"

function mouseover_login_email() {
	document.getElementById("img_login_email").src = button_url_prefix + "signin_email_hover.svg"
}

function mouseout_login_email() {
	document.getElementById("img_login_email").src = button_url_prefix + "signin_email.svg"
}

function mouseover_login_kakao() {
	document.getElementById("img_login_kakao").src = button_url_prefix + "signin_kakao_hover.svg"
}

function mouseout_login_kakao() {
	document.getElementById("img_login_kakao").src = button_url_prefix + "signin_kakao.svg"
}

function mouseover_login_google() {
	document.getElementById("img_login_google").src = button_url_prefix + "signin_google_hover.svg"
}

function mouseout_login_google() {
	document.getElementById("img_login_google").src = button_url_prefix + "signin_google.svg"
}