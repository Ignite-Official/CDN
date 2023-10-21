// 회원 가입, 인증 대기 목록에서 이메일 존재 여부 확인
async function check_email_exist() {
	// 토글 ON
	toggle_login_email_submit = true

	// 이메일로 로그인하기 버튼에 spinner 적용
	ReactDOM.render(<Div_btn_submit_spinner class_btn={class_btn_enabled + " cursor-not-allowed"} function={null} />, document.getElementById("btn_submit")) 


	// 텍스트박스에 입력한 값 (이메일)
	let email = document.getElementById("txt_email").value.trim()

	const data = await fetch("/account/ajax_check_email_exist/?email=" + email)
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 이메일 형식 체크
	if (!email_form_check()) {
		return false

	// 가입되어있지 않으면서 인증 대기중인 경우
	} else if (data.check_joined == 0 && data.check_authorization == 1) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => check_email_exist()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text={"이메일 인증 대기중입니다. (" + data.created_at + "에 재시도 가능)"} />, document.getElementById("desc_email_msg"))

		
	// 가입되어있지 않으면서 인증이 만료된 경우
	} else if (data.check_joined == 0 && data.check_authorization == 2) {
		location.href="/account/signup/auth/?email=" + email


	// 이미 회원 가입된 경우
	} else if (data.check_joined == 1) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => check_email_exist()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text={"이미 가입한 회원입니다."} />, document.getElementById("desc_email_msg"))


	// 회원 가입 진행
	} else {
		location.href="/account/signup/auth/?email=" + email
		
	}

	// 토글 OFF
	toggle_login_email_submit = false
}