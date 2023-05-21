async function submit() {
	// 완료 버튼을 로딩중 버튼으로 전환
	ReactDOM.render(<Div_btn_submit_loading text={btn_text} />, document.getElementById("div_btn_submit"))
	
	// 계정명은 영어, 숫자만 입력 가능
		const request_data = new FormData();
		request_data.append('txt_birthday', document.getElementById("txt_birthday").value.trim());

		const data = await fetch("/account/ajax_change_birthday/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

		if (data.checker == "FAILED") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="정보가 수정되지 않았습니다." />, document.getElementById("div_alert"))

		} else if (data.checker == "SAME") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 입력한 생년월일로 설정되어 있습니다." />, document.getElementById("div_alert"))

		}else {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_success}
											class_button={class_card_button_success} 
											text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
		}

	// 완료 버튼 활성화
	btn_submit_enable()

	setTimeout(function() { 
		document.getElementById("div_alert").className = "hidden"
	}, 1500);
}