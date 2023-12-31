async function click_toggle_teamup_available(active) {
	userdata.userinfo.teamup_available = active

	if (active == 'NO') {
		document.getElementById("p_teamup_available").className = "text-[#AE9DE3] font-[500] text-[14px]"
		document.getElementById("p_teamup_available").innerHTML = "팀업 불가"
		ReactDOM.render(<Div_teamup_disable />, document.getElementById("div_toggle_teamup_available"))

	} else {
		userdata.userinfo.teamup_available = "YES"
		document.getElementById("p_teamup_available").className = "text-[#40C057] font-[500] text-[14px]"
		document.getElementById("p_teamup_available").innerHTML = "팀업 가능"
		ReactDOM.render(<Div_teamup_enable />, document.getElementById("div_toggle_teamup_available"))
	}

	// 데이터 업데이트
	const request_data = new FormData();
	request_data.append('active', active);

	const data = await fetch("/account/ajax_change_teamup_available/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });
}