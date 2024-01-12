async function get_team_region_list() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let region_list = await fetch("/teamup/ajax_get_team_region_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	
	Object.keys(data_region).map(function(i){
		Object.keys(region_list['region_list']).map(function(j){
			if (data_region[i].uuid == region_list['region_list'][j].uuid) {
				data_region[i].active = region_list['region_list'][j].active
			}
		});
	});

	let active_list = Object.values(data_region).filter(it => it.active != 0)
	Object.keys(active_list).map(function(i){
		document.getElementById(active_list[i].uuid).className = class_btn_act_selected
	});
}