async function get_team_role_list() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let role_list = await fetch("/teamup/ajax_get_team_role_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	teamdata['role_list'] = role_list['role_list']
}