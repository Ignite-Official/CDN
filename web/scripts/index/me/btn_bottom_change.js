function btn_bottom_change() {
	if (toggle_btn_bottom == 1 && toggle_sub_menu_portfolio == 1) {
		ReactDOM.render(<Div_btn_botton class={class_btn} text="포트폴리오 수정하기" />, document.getElementById("btn_bottom"))
	} else if (toggle_btn_bottom == 1 && toggle_sub_menu_profile == 1) {
		ReactDOM.render(<Div_btn_botton class={class_btn} text="프로필 수정하기" />, document.getElementById("btn_bottom"))
	}
}