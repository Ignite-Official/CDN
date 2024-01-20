async function get_team_list(mode) {
	// 토글 ON
	toggle_page_team = true


	if (mode == "init") { 
		page_team = 1 
		ReactDOM.render(<Div_skeleton_team />, document.getElementById("div_team"))
	} else {
		page_team += 1
	}

	/***** 필터 *****/
	const request_data = new FormData();

	// 페이지
	request_data.append('page', page_team);

	// 팀업 상태
	request_data.append('teamup', data_team_teamup);

	// 지역
	request_data.append('region_all', data_team_region_all);
	if (data_team_region == null) {
		request_data.append('list_region_name', "");
		request_data.append('list_region_active', "");
	} else {
		request_data.append('list_region_name', Object.values(Object.values(data_team_region)).map(x => x.name).join('　'));
		request_data.append('list_region_active', Object.values(Object.values(data_team_region)).map(x => x.active).join('　'));
	}

	// 장르
	request_data.append('genre_all', data_team_genre_all);
	if (data_team_genre == null) {
		request_data.append('list_genre_name', "");
		request_data.append('list_genre_active', "");
	} else {
		request_data.append('list_genre_name', Object.values(Object.values(data_team_genre)).map(x => x.name).join('　'));
		request_data.append('list_genre_active', Object.values(Object.values(data_team_genre)).map(x => x.active).join('　'));
	}

	// 역할
	request_data.append('role_all', data_team_role_all);
	if (data_team_role == null) {
		request_data.append('list_role_name', "");
		request_data.append('list_role_active', "");
	} else {
		request_data.append('list_role_name', Object.values(Object.values(data_team_role)).map(x => x.name).join('　'));
		request_data.append('list_role_active', Object.values(Object.values(data_team_role)).map(x => x.active).join('　'));
	}

	
	const data = await fetch("/teamup/ajax_get_team_list/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (mode == "init") {
		if (gv_username == "") {
			ReactDOM.render(<Div_counter title={"팀"}
										counter={data["counter"].cnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_team_counter"))
		} else {
			ReactDOM.render(<Div_counter title={"팀"}
										counter={data["counter"].cnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} 
										button={"true"} />, document.getElementById("div_team_counter"))
		}
	
		ReactDOM.render(<Div_filter type={"team"} />, document.getElementById("div_team_filter"))
		ReactDOM.render(<Div_team_sub data={data["list"]} />, document.getElementById("div_team_sub"))

	} else {
		ReactDOM.render(<Div_team_sub data={data["list"]} />, document.getElementById("div_team_list_" + page_team.toString()))
	}


	// 토글 OFF
	toggle_page_team = false
}