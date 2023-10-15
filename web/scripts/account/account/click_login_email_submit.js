async function click_login_email_submit() {

    if (!toggle_login_email_submit) {
        // 토글 ON
        toggle_login_email_submit = true 

        // 이메일로 로그인하기 버튼에 spinner 적용
        ReactDOM.render(<Div_btn_submit_spinner class_btn={class_btn_enabled + " cursor-not-allowed"} function={null} />, document.getElementById("btn_submit"))

     
		// 텍스트박스에 입력한 값 (이메일, 비밀번호)
		const inputData = new FormData();
		inputData.append('txt_email', document.getElementById("txt_email").value.trim());
        inputData.append('txt_password', document.getElementById("txt_password").value.trim());

		const data = await fetch("/account/ajax_signin_email/", {
							method: "post", 
							headers: {
								"X-CSRFToken": getCookie("csrftoken"),
							},
							body: inputData
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

        // 계정을 확인할 수 없음
        if (data.checker == "NOTEXIST") {
            alert("계정을 확인할 수 업습니다.")
            ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => click_login_email_submit()} />, document.getElementById("btn_submit"))

        // 비밀번호가 틀림
        } else if (data.checker == "WRONGPASSWORD") {
            alert("비밀번호가 틀렸습니다.")
            ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => click_login_email_submit()} />, document.getElementById("btn_submit"))

        // 로그인 성공
        } else {
            location.href="/"

        }
        
        // 토글 OFF
        toggle_login_email_submit = false
    }
    
}