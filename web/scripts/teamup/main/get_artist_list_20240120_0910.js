async function get_artist_list(mode) {
	// 토글 ON
	toggle_page_artist = true


	if (mode == "init") { 
		page_artist = 1 
		ReactDOM.render(<Div_skeleton_artist />, document.getElementById("div_artist"))
	} else {
		page_artist += 1
	}

	/***** 필터 *****/
	const request_data = new FormData();

	// 페이지
	request_data.append('page', page_artist);

	// 팀업 상태
	request_data.append('teamup', data_artist_teamup);

	// 지역
	request_data.append('region_all', data_artist_region_all);
	if (data_artist_region == null) {
		request_data.append('list_region_name', "");
		request_data.append('list_region_active', "");
	} else {
		request_data.append('list_region_name', Object.values(Object.values(data_artist_region)).map(x => x.name).join('　'));
		request_data.append('list_region_active', Object.values(Object.values(data_artist_region)).map(x => x.active).join('　'));
	}

	// 장르
	request_data.append('genre_all', data_artist_genre_all);
	if (data_artist_genre == null) {
		request_data.append('list_genre_name', "");
		request_data.append('list_genre_active', "");
	} else {
		request_data.append('list_genre_name', Object.values(Object.values(data_artist_genre)).map(x => x.name).join('　'));
		request_data.append('list_genre_active', Object.values(Object.values(data_artist_genre)).map(x => x.active).join('　'));
	}

	// 역할
	request_data.append('role_all', data_artist_role_all);
	if (data_artist_role == null) {
		request_data.append('list_role_name', "");
		request_data.append('list_role_active', "");
	} else {
		request_data.append('list_role_name', Object.values(Object.values(data_artist_role)).map(x => x.name).join('　'));
		request_data.append('list_role_active', Object.values(Object.values(data_artist_role)).map(x => x.active).join('　'));
	}


	const data = await fetch("/teamup/ajax_get_artist_list/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

	if (mode == "init") {
		ReactDOM.render(<Div_counter title="아티스트" counter={data["counter"].cnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_artist_counter"))
		ReactDOM.render(<Div_filter type={"artist"} />, document.getElementById("div_artist_filter"))
		ReactDOM.render(<Div_artist_sub data={data["list"]} />, document.getElementById("div_artist_sub"))
	} else {
		ReactDOM.render(<Div_artist_sub data={data["list"]} />, document.getElementById("div_artist_list_" + page_artist.toString()))
	}


	// 토글 OFF
	toggle_page_artist = false
}