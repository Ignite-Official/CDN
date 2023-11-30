function check_txt_teamup_name() {
	// 텍스트박스에 입력한 값
	let txt_teamup_account = document.getElementById("txt_teamup_account").value.trim()
	let txt_teamup_name = document.getElementById("txt_teamup_name").value.trim()
	
	if (txt_teamup_name.length <= 25) {
		ReactDOM.render(<Div_txt_teamup_name_len len={txt_teamup_name.length.toString()} />, document.getElementById("txt_teamup_name_len"))
	}


	let regType1 = /^[A-Za-z0-9]+$/;
	if (txt_teamup_name.length <= 0 || txt_teamup_account.length <= 0) {
		ReactDOM.render(<Div_btn_submit_disabled />, document.getElementById("btn_submit"))

	} else if (txt_teamup_name.length <= 25 && txt_teamup_account.length > 0 && regType1.test(txt_teamup_account)) {
		ReactDOM.render(<Div_btn_submit_enabled />, document.getElementById("btn_submit"))
	}
}