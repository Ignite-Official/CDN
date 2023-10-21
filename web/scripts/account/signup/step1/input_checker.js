// 이메일 입력 값에 따른 이벤트
function input_checker() {
	let checker_email = false
	
	// 이메일을 입력하지 않음
	if (email_form_check("txt_email") == "NOT EXIST") {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="이메일을 입력해주세요." />, document.getElementById("desc_email_msg"))
		
	// 이메일 형식이 잘못되었음
	} else if (email_form_check("txt_email") == "FAILED") {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="이메일 형식이 잘못되었습니다." />, document.getElementById("desc_email_msg"))

	// 이메일 형식이 올바르게 입력되었음
	} else {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_email_msg"))
		checker_email = true

	}


	if (checker_email) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => check_email_exist()} />, document.getElementById("btn_submit"))

	} else {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} function={null} />, document.getElementById("btn_submit"))

	}
}