// 포트폴리오 추가에서 source 선택
function click_btn_portfolio_url_source(type) {
	if (type == "youtube") {
		document.getElementById('txt_portfolio_url').placeholder = "Youtube 비디오 URL을 입력하세요."
		document.getElementById('btn_portfolio_url_source_youtube').className = class_btn_portfolio_url_source_enabled
		document.getElementById('btn_portfolio_url_source_soundcloud').className = class_btn_portfolio_url_source_disabled
		toggle_portfolio_url_source = "youtube"
	} else if (type == "soundcloud") {
		document.getElementById('txt_portfolio_url').placeholder = "Soundcloud 트랙 URL을 입력하세요."
		document.getElementById('btn_portfolio_url_source_youtube').className = class_btn_portfolio_url_source_disabled
		document.getElementById('btn_portfolio_url_source_soundcloud').className = class_btn_portfolio_url_source_enabled
		toggle_portfolio_url_source = "soundcloud"
	}
}