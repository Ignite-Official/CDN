function click_btn_role(uuid, type) {
	// 아티스트
	if (type == "artist") {
		// uuid, name, active를 저장하고 있는 변수
		let data = Object.values(data_artist_role).filter(it => it.uuid.includes(uuid))[0]    //
		let active_len = Object.values(data_artist_role).filter(it => it.active == 1).length  // 현재 active가 1인 역할 개수
	
		if (data.active == 0 && active_len < 5) {
			document.getElementById("role_artist_" + data.uuid).className = class_btn_act_selected
			Object.keys(data_artist_role).map(function(i){
				if (data_artist_role[i].uuid == uuid) {
					data_artist_role[i].active = 1
				}
			});
	
		} else {
			document.getElementById("role_artist_" + data.uuid).className = class_btn_act_notselected
			Object.keys(data_artist_role).map(function(i){
				if (data_artist_role[i].uuid == data.uuid) {
					data_artist_role[i].active = 0
				}
			});
		}

	// 팀
	} else if (type == "team") {
		// uuid, name, active를 저장하고 있는 변수
		let data = Object.values(data_team_role).filter(it => it.uuid.includes(uuid))[0]    //
		let active_len = Object.values(data_team_role).filter(it => it.active == 1).length  // 현재 active가 1인 역할 개수
	
		if (data.active == 0 && active_len < 5) {
			document.getElementById("role_team_" + data.uuid).className = class_btn_act_selected
			Object.keys(data_team_role).map(function(i){
				if (data_team_role[i].uuid == uuid) {
					data_team_role[i].active = 1
				}
			});
	
		} else {
			document.getElementById("role_team_" + data.uuid).className = class_btn_act_notselected
			Object.keys(data_team_role).map(function(i){
				if (data_team_role[i].uuid == data.uuid) {
					data_team_role[i].active = 0
				}
			});
		}
	}

}