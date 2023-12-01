async function submit_profile() {
	// 완료 버튼을 로딩중 버튼으로 전환
	ReactDOM.render(<Div_btn_submit_loading text="완료" />, document.getElementById("btn_bottom"))
	
	const request_data = new FormData();
	request_data.append('txt_head_intro', document.getElementById("txt_head_intro").value.trim());
	request_data.append('txt_intro', document.getElementById("txt_intro").value.trim());
	request_data.append('txt_intro2', document.getElementById("txt_intro2").value.trim());
	request_data.append('txt_intro3', document.getElementById("txt_intro3").value.trim());

	const data = await fetch("/ajax_change_profile_intro/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
	
	
	if (data.checker == "SAME" || data.checker == "FAILED") {
		document.getElementById("div_alert").className = class_div_alert + " pb-[156px]"
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="정보가 수정되지 않았습니다." />, document.getElementById("div_alert"))

		ReactDOM.render(<Div_btn_bottom class={class_btn}
										text="완료"
										function={() => submit_profile()} />, document.getElementById("btn_bottom"))

		setTimeout(function() { 
			document.getElementById("div_alert").className = "hidden"
		}, 1500);


	} else {
		location.href = window.location.href.toString().replace("/edit_profile/", "")
	}

}
