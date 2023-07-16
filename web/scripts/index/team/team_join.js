async function team_join(mode) {
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());
	request_data.append('mode', mode);

	const data = await fetch("/ajax_team_join/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

	if (data.checker == "join") {
		ReactDOM.render(<Div_btn_submit text={"팀업 요청 취소하기"} 
										class={class_btn_submit_enabled}
										function = {() => team_join('cancel')} />, document.getElementById("btn_bottom"))

	} else if (data.checker == "cancel") {
		ReactDOM.render(<Div_btn_submit text={"팀업 요청하기"} 
										class={class_btn_submit_enabled}
										function = {() => team_join('join')} />, document.getElementById("btn_bottom"))
	}
}