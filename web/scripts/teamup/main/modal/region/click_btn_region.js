function click_btn_region(uuid, type) {
	// 아티스트
	if (type == "artist") {
		// uuid, name, active를 저장하고 있는 변수
		let data = Object.values(data_artist_region).filter(it => it.uuid.includes(uuid))[0]    //
		let active_len = Object.values(data_artist_region).filter(it => it.active == 1).length  // 현재 active가 1인 지역 개수
	
		if (data.active == 0 && active_len < 5) {
			document.getElementById("region_artist_" + data.uuid).className = class_btn_act_selected
			Object.keys(data_artist_region).map(function(i){
				if (data_artist_region[i].uuid == uuid) {
					data_artist_region[i].active = 1
				}
			});
	
		} else {
			document.getElementById("region_artist_" + data.uuid).className = class_btn_act_notselected
			Object.keys(data_artist_region).map(function(i){
				if (data_artist_region[i].uuid == data.uuid) {
					data_artist_region[i].active = 0
				}
			});
		}

	// 팀
	} else if (type == "team") {
		// uuid, name, active를 저장하고 있는 변수
		let data = Object.values(data_team_region).filter(it => it.uuid.includes(uuid))[0]    //
		let active_len = Object.values(data_team_region).filter(it => it.active == 1).length  // 현재 active가 1인 지역 개수
	
		if (data.active == 0 && active_len < 5) {
			document.getElementById("region_team_" + data.uuid).className = class_btn_act_selected
			Object.keys(data_team_region).map(function(i){
				if (data_team_region[i].uuid == uuid) {
					data_team_region[i].active = 1
				}
			});
	
		} else {
			document.getElementById("region_team_" + data.uuid).className = class_btn_act_notselected
			Object.keys(data_team_region).map(function(i){
				if (data_team_region[i].uuid == data.uuid) {
					data_team_region[i].active = 0
				}
			});
		}
	}

}