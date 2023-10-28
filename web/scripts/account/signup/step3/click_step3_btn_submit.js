async function click_step3_btn_submit() {
	if (!toggle_click_step3_btn_submit) {
		// 토글 ON
		toggle_click_step3_btn_submit = true

		// 이메일로 로그인하기 버튼에 spinner 적용
		ReactDOM.render(<Div_btn_submit_spinner class_btn={class_btn_enabled + " cursor-not-allowed"} text={"가입하기"} function={null} />, document.getElementById("btn_submit"))

		// 텍스트박스에 입력한 값 (이메일, 비밀번호)
		const inputData = new FormData();
		inputData.append('txt_auth_code', document.getElementById("txt_auth_code").value.trim());
		inputData.append('txt_phone', document.getElementById("txt_phone").value.trim());
		inputData.append('txt_password', document.getElementById("txt_password").value.trim());

		const data = await fetch("/account/ajax_signup/", {
								method: "post", 
								headers: {
									"X-CSRFToken": getCookie("csrftoken"),
								},
								body: inputData
							})
							.then(res=> { return res.json(); })
							.then(res=> { return res; });


		// 계정을 확인할 수 없음
		if (data.auth_code == "") {
			alert("회원 가입 중 오류가 발생하였습니다.")
			ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} text="가입하기" function={() => click_step3_btn_submit()} />, document.getElementById("btn_submit"))

		// 로그인 성공
		} else {
			location.href="/account/userinfo/profile/"

		}

		// 토글 OFF
		toggle_click_step3_btn_submit = false
	}

}