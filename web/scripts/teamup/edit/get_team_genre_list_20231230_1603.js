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
	
	Object.keys(data_genre).map(function(i){
		Object.keys(genre_list['genre_list']).map(function(j){
			if (data_genre[i].uuid == genre_list['genre_list'][j].uuid) {
				data_genre[i].active = genre_list['genre_list'][j].active
			}
		});
	});

	let active_list = Object.values(data_genre).filter(it => it.active != 0)
	Object.keys(active_list).map(function(i){
		document.getElementById(active_list[i].uuid).className = class_btn_act_selected
	});
}
