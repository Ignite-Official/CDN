async function get_team_genre_list() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let genre_list = await fetch("/teamup/ajax_get_team_genre_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	teamdata['genre_list'] = genre_list['genre_list']

	let active_list = Object.values(teamdata['genre_list']).filter(it => it.active == 1)
	Object.keys(active_list).map(function(i){
		document.getElementById(active_list[i].uuid).className = class_btn_act_selected
	});
}