async function team_exit() {
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	const data = await fetch("/ajax_team_exit/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

	ReactDOM.render(<Div_btn_submit text={"팀업 요청하기"} 
									class={class_btn_submit_enabled + " w-[328px]"}
									function = {() => team_join('join')} />, document.getElementById("btn_bottom"))
}