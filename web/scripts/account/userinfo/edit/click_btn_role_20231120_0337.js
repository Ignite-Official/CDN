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

	// 프로필 등록 화면에서 이용자가 선택한 역할 목록 출력
	ReactDOM.render(<Div_modal_list data={userdata.role}
									text={"선택한 역할이 없습니다."} />, document.getElementById("div_modal_role_list"));
}