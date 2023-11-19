function click_btn_role(uuid) {
	// uuid, name, active를 저장하고 있는 변수
	let data = Object.values(userdata.role).filter(it => it.uuid.includes(uuid))[0]
	let active_len = Object.values(userdata.role).filter(it => it.active == 1).length  // 현재 active가 1인 장르 개수
	
	if (data.active == 0 && active_len < 3) {
		document.getElementById(data.uuid).className = class_btn_act_selected
		Object.keys(userdata.role).map(function(i){
			if (userdata.role[i].uuid == uuid) {
				userdata.role[i].active = 1
			}
		});

	} else {
		document.getElementById(data.uuid).className = class_btn_act_notselected
		Object.keys(userdata.role).map(function(i){
			if (userdata.role[i].uuid == uuid) {
				userdata.role[i].active = 0
			}
		});
	}
}