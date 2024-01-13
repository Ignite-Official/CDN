// 메뉴 출력
function set_menu() {
	ReactDOM.render(<Div_menu />, document.getElementById("div_menu"))
	get_alert_list()
	ReactDOM.render(<Div_footer />, document.getElementById("div_footer"))
}
