// 이메일 형식 확인
function email_form_check() {
	// 텍스트박스에 입력한 값 (이메일)
	let email = document.getElementById("txt_email").value.trim()

	// 이메일 체크 정규식
	let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

	// 값이 입력되지 않음
	if (email == "" || email == null) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[138px]"}
										class_load_spin="hidden" 
										function="" />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="이메일을 입력해주세요." />, document.getElementById("desc_email_msg"))

		return false

	// 이메일 형식 체크 실패
	} else if (!regExp.test(email)) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[138px]"}
										class_load_spin="hidden" 
										function="" />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="형식이 올바르지 않습니다." />, document.getElementById("desc_email_msg"))

		return false

	// 이메일 형식 체크 성공
	} else {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled + " mt-[156px]"}
										class_load_spin="hidden" 
										function={() => document.getElementById("form_sign_in").submit()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_email_msg"))

		return true
	}
}