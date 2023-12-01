// 입력한 URL 길이에 따른 추가 버튼의 form
function portfolio_url_check() {
	// URL 길이가 0인 경우
	if (document.getElementById("txt_portfolio_url").value.trim().length == 0) {
		document.getElementById('btn_genre_add_confirm').className = class_btn_add_mode_closed

	// URL 길이가 0보다 큰 경우
	} else {

		document.getElementById('btn_genre_add_confirm').className = class_btn_add_mode
	}
}