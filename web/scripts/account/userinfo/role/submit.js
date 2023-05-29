// 역할 및 악기 변경
async function submit() {
	// 완료 버튼을 로딩중 버튼으로 전환
	ReactDOM.render(<Div_btn_submit_loading text={btn_text} />, document.getElementById("div_btn_submit"))

	const request_data = new FormData();
	request_data.append('list_role', role_selected_list);
	request_data.append('list_instrument', instrument_selected_list);

	const data = await fetch("/account/ajax_change_role_and_instrument/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });

								
	if (data.checker == "NO_TARGET") {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="정보가 변경되지 않았습니다." />, document.getElementById("div_alert"))

	} else {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_success}
										class_button={class_card_button_success} 
										text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
	}

	// 완료 버튼 활성화
	btn_submit_enable()
}