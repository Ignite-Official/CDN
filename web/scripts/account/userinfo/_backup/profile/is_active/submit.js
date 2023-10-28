// 계정명, 닉네임 변경
async function submit() {
	// 완료 버튼을 로딩중 버튼으로 전환
	ReactDOM.render(<Div_btn_submit_loading text={btn_text} />, document.getElementById("div_btn_submit"))

	// 계정명은 영어, 숫자만 입력 가능
	var account_reg = /^[A-Za-z\d$-_@$!%*#?]*$/;
	if (!account_reg.test(document.getElementById("txt_account").value.trim())) {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="계정명은 알파벳, 숫자, 일부 특수문자만 가능합니다." />, document.getElementById("div_alert"))

	} else {
		const request_data = new FormData();
		request_data.append('txt_nickname', document.getElementById("txt_nickname").value.trim());
		request_data.append('txt_account', document.getElementById("txt_account").value.trim());

		const data = await fetch("/account/ajax_change_account_and_nickname/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });




		if (data.checker == "SAME") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 입력한 값으로 설정되어 있습니다." />, document.getElementById("div_alert"))

		} else if (data.checker == "EXIST_NICKNAME") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 존재하는 닉네임입니다." />, document.getElementById("div_alert"))
											
		} else if (data.checker == "EXIST_ACCOUNT") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 존재하는 계정명입니다." />, document.getElementById("div_alert"))

		} else if (data.checker == "FAILED") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="정보가 수정되지 않았습니다." />, document.getElementById("div_alert"))
											
		} else {
			document.getElementById("div_alert").className = class_div_alert
			
			// 메뉴의 userinfo card를 변경한다.
			const menu_card_data = await fetch("/get_menu_userinfo_card/")
										.then(res=> { return res.json(); })
										.then(res=> { return res; });
			ReactDOM.render(<Div_menu_username_card data={menu_card_data} />, document.getElementById("menu_username_card"))

			ReactDOM.render(<Div_alert class_card={class_card_success}
											class_button={class_card_button_success} 
											text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
		}    
	}

	// 완료 버튼 활성화
	btn_submit_enable()

	setTimeout(function() { 
		document.getElementById("div_alert").className = "hidden"
	}, 1500);
}