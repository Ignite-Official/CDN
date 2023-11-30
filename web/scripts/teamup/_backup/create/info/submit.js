async function submit() {
	if (toggle_submit == 1) {
		const requestData = new FormData();
		let res_list_region_selected = ""
		let res_list_gender_selected = ""
		let res_list_genre_selected = ""
		let res_list_cnt_role_selected = ""
		let res_list_role_selected = ""
		let res_list_instrument_selected = ""
		
		// 지역 리스트
		if (list_region_selected[0] == "btn_region_all") {
			for (var i = 0; i < list_region_all.length ; i++) {         res_list_region_selected += list_region_all[i] + ",";      }
		} else {
			for (var i = 0; i < list_region_selected.length ; i++) {    res_list_region_selected += list_region_selected[i] + ","; }
		}

		// 성별 리스트
		if (list_gender_selected[0] == "btn_gender_all") {
			for (var i = 0; i < list_gender_all.length ; i++) {         res_list_gender_selected += list_gender_all[i] + ",";      }
		} else {
			for (var i = 0; i < list_gender_selected.length ; i++) {    res_list_gender_selected += list_gender_selected[i] + ","; }
		}

		// 장르 리스트
		if (list_genre_selected[0] == "btn_genre_all") {
			for (var i = 0; i < list_genre_all.length ; i++) {         res_list_genre_selected += list_genre_all[i] + ",";      }
		} else {
			for (var i = 0; i < list_genre_selected.length ; i++) {    res_list_genre_selected += list_genre_selected[i] + ","; }
		}

		// 모집분야 리스트
		for (var i = 0; i < list_cnt_role_selected.length ; i++) {         res_list_cnt_role_selected += list_cnt_role_selected[i].uuid + "$" + list_cnt_role_selected[i].count.toString() + ",";      }

		// 역할 리스트
		if (list_role_selected[0] == "btn_role_all") {
			for (var i = 0; i < list_role_all.length ; i++) {         res_list_role_selected += list_role_all[i] + ",";      }
		} else {
			for (var i = 0; i < list_role_selected.length ; i++) {    res_list_role_selected += list_role_selected[i] + ","; }
		}

		// 악기 리스트
		if (list_instrument_selected[0] == "btn_instrument_all") {
			for (var i = 0; i < list_instrument_all.length ; i++) {         res_list_instrument_selected += list_instrument_all[i] + ",";      }
		} else {
			for (var i = 0; i < list_instrument_selected.length ; i++) {    res_list_instrument_selected += list_instrument_selected[i] + ","; }
		}

		requestData.append('uuid_teamup', uuid_team);
		requestData.append('list_region_selected', res_list_region_selected);
		requestData.append('toggle_region_online', toggle_region_online);
		requestData.append('list_gender_selected', res_list_gender_selected);
		requestData.append('list_genre_selected', res_list_genre_selected);
		requestData.append('list_cnt_role_selected', res_list_cnt_role_selected);
		requestData.append('list_role_selected', res_list_role_selected);
		requestData.append('list_instrument_selected', res_list_instrument_selected);
		requestData.append('selected_due_date', selected_due_date);
	
		const data = await fetch("/teamup/ajax_insert_teamup_info/", {
									method: "post", 
									headers: {"X-CSRFToken": getCookie("csrftoken"),},
									body: requestData
								})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });
		
		location.href="/teamup/create/intro/" + uuid_team + "/"
	}
}