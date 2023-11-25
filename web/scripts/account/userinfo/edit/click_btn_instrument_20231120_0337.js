function click_btn_instrument(uuid) {
	// uuid, name, active를 저장하고 있는 변수
	let data = Object.values(userdata.instrument).filter(it => it.uuid.includes(uuid))[0]
	
	if (data.active == 0) {
		document.getElementById(data.uuid).className = class_btn_act_selected
		Object.keys(userdata.instrument).map(function(i){
			if (userdata.instrument[i].uuid == uuid) {
				userdata.instrument[i].active = 1
			}
		});

	} else {
		document.getElementById(data.uuid).className = class_btn_act_notselected
		Object.keys(userdata.instrument).map(function(i){
			if (userdata.instrument[i].uuid == uuid) {
				userdata.instrument[i].active = 0
			}
		});
	}

	// 프로필 등록 화면에서 이용자가 선택한 악기 목록 출력
	ReactDOM.render(<Div_modal_list data={userdata.instrument}
									text={"선택한 악기가 없습니다."} />, document.getElementById("div_modal_instrument_list"));
}