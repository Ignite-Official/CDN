// 성별 가져오기
async function get_gender() {
	const data = await fetch("/account/ajax_get_gender/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (data.gender != "Unknown") {
		selected_gender = data.gender
		if (data.gender == "남성") {
			select_btn_gender('male');
		} else if (data.gender == "여성") {
			select_btn_gender('female');
		}
	}
	btn_submit_enable()
}

get_gender()


async function submit() {
	// 계정명은 영어, 숫자만 입력 가능
		const request_data = new FormData();
		request_data.append('txt_gender', selected_gender);

		const data = await fetch("/account/ajax_change_gender/", {
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
											text="이미 선택한 성별로 설정되어 있습니다." />, document.getElementById("div_alert"))

		} else {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_success}
											class_button={class_card_button_success} 
											text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
		}

	setTimeout(function() { 
		document.getElementById("div_alert").className = "hidden"
	}, 1500);
}