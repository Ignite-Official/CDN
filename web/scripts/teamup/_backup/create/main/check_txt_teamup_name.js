function check_txt_teamup_name() {
	// 텍스트박스에 입력한 값
	let txt_teamup_name_len = document.getElementById("txt_teamup_name").value.trim()

	if (txt_teamup_name_len.length <= 0) {
		ReactDOM.render(<Div_btn_submit_disabled />, document.getElementById("btn_submit"))

	} else if (txt_teamup_name_len.length <= 25) {
		ReactDOM.render(<Div_btn_submit_enabled />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_txt_teamup_name_len len={txt_teamup_name_len.length.toString()} />, document.getElementById("txt_teamup_name_len"))
	}
}