async function submit() {
	const requestData = new FormData();
	requestData.append('txt_teamup_name', document.getElementById("txt_teamup_name").value.trim());
	requestData.append('txt_teamup_account', document.getElementById("txt_teamup_account").value.trim());

	const data = await fetch("/teamup/ajax_check_teamup_count/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),},
								body: requestData
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 생성할 수 있는 팀업 개수 확인
	if (data.checker_counter == "LIMITED") {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="생성할 수 있는 팀업 개수가 초과되었습니다." />, document.getElementById("div_alert"))

		setTimeout(function() { 
			document.getElementById("div_alert").className = "hidden"
		}, 1500);
		
	// 같은 이름의 팀을 생성했는지 확인
	} else if (data.checker_exist == "EXIST") {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="이미 팀 계정명이 존재합니다." />, document.getElementById("div_alert"))

		setTimeout(function() { 
			document.getElementById("div_alert").className = "hidden"
		}, 1500);

	// 생성 가능
	} else {
		let uuid_teamup = self.crypto.randomUUID()
		requestData.append('uuid_teamup', uuid_teamup);

		const data = await fetch("/teamup/ajax_insert_teamup/", {
									method: "post", 
									headers: {"X-CSRFToken": getCookie("csrftoken"),},
									body: requestData
								})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		location.href="/teamup/create/info/" + data.uuid + "/"
	}
}