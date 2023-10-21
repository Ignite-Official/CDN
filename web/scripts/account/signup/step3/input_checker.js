function input_checker() {
	// 휴대폰 번호 - 숫자가 아닌 값은 되돌리기
	document.getElementById("txt_phone").value = document.getElementById("txt_phone").value.replace(/[^0-9]/g, '')

	// 텍스트 입력 값
	let txt_phone = document.getElementById("txt_phone").value                          // 휴대폰 번호
	let txt_password = document.getElementById("txt_password").value                    // 비밀번호
	let txt_password_confirm = document.getElementById("txt_password_confirm").value    // 비밀번호 확인

	// checker 초기화
	checker_phone_number = false
	checker_password = false


	/***** 휴대폰 번호 *****/
	// 입력한 휴대폰 번호의 길이가 11보다 작은 경우
	if (txt_phone.length < 11) {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="휴대폰 번호의 길이가 너무 짧습니다." />, document.getElementById("desc_phone_msg"))
		checker_phone_number = false

	// 입력한 비밀번호의 길이가 11 이상인 경우
	} else {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_phone_msg"))
		checker_phone_number = true

	}


	/***** 비밀번호 *****/
	// 비밀번호가 입력되지 않은 경우
	if (txt_password.trim() == "" || txt_password.trim() == null) {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="비밀번호를 입력해주세요." />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호의 길이가 8자 이내인 경우
	} else if (txt_password.length < 8) {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="최소 8자 이상 입력해주세요." />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호 확인이 입력되지 않은 경우
	} else if (txt_password_confirm.trim() == "" || txt_password_confirm.trim() == null) {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="비밀번호 확인을 입력해주세요." />, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호 확인의 길이가 8자 이내인 경우
	} else if (txt_password_confirm.length < 8) {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="최소 8자 이상 입력해주세요." />, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호와 비밀번호 확인이 일치하지 않은 경우
	} else if (txt_password.trim() != txt_password_confirm.trim()) {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="비밀번호와 비밀번호 확인이 일치하지 않습니다." />, document.getElementById("desc_password_confirm_msg"))

	// 비밀번호와 비밀번호 확인이 일치한 경우
	} else {
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_msg"))
		ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_confirm_msg"))
		checker_password = true
		
	}


	/***** 휴대폰번호와 비밀번호 입력 여부에 따라 가입하기 버튼의 타입 변경 *****/
	if (checker_phone_number && checker_password) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} text="가입하기" function={() => click_step3_btn_submit()} />, document.getElementById("btn_submit"))
		
	} else {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} text="가입하기" function={null} />, document.getElementById("btn_submit"))
	}
}