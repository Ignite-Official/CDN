function click_btn_genre(uuid) {
	// uuid, name, active를 저장하고 있는 변수
	let data = Object.values(data_genre).filter(it => it.uuid.includes(uuid))[0]    //
	let active_len = Object.values(data_genre).filter(it => it.active == 1).length  // 현재 active가 1인 장르 개수

	if (data.active == 0 && active_len < 5) {
		document.getElementById(data.uuid).className = class_btn_act_selected
		Object.keys(data_genre).map(function(i){
			if (data_genre[i].uuid == uuid) {
				data_genre[i].active = 1
			}
		});

	} else {
		document.getElementById(data.uuid).className = class_btn_act_notselected
		Object.keys(data_genre).map(function(i){
			if (data_genre[i].uuid == data.uuid) {
				data_genre[i].active = 0
			}
		});
	}
}