function classname_change_role(uuid){
	function select_all() {
		for (var i = 0 ; i < list_role_all.length ; i++) {
			document.getElementById(list_role_all[i]).className = class_btn_enabled

			if (!list_role_all.includes(list_role_all[i])) {
				add_cnt_member(list_role_all[i])  
			}
		} 
		document.getElementById("btn_role_all").className = class_btn_enabled
		list_role_selected = ["btn_role_all"]
	}

	function remove_all() {
		for (var i = 0 ; i < list_role_all.length ; i++) {
			document.getElementById(list_role_all[i]).className = class_btn_disabled

			if (list_role_selected.includes("btn_role_all") || list_role_selected.includes(list_role_all[i])) {
				remove_cnt_member(list_role_all[i])
			}
		}
		document.getElementById("btn_role_all").className = class_btn_disabled
		list_role_selected = []
	}


	// "전체"를 선택한 경우
	if (uuid == "btn_role_all") {            
		if (list_role_selected.includes(uuid)) {
			remove_all();       // 이미 "전체"가 선택되어 있었던 경우
		} else {
			select_all();       // "전체"가 선택되어있지 않았던 경우
		}
		

	// "전체"가 아닌 성별을 선택한 경우
	} else {
		// "전체"가 선택되어있던 상황인 경우, 값을 모두 해제하고 시작한다.
		if (list_role_selected.includes("btn_role_all")) {  remove_all();   }

		// 이미 선택된 값인 경우
		if (list_role_selected.includes(uuid)) {
			list_role_selected = list_role_selected.filter((element) => element !== uuid)
			document.getElementById(uuid).className = class_btn_disabled
			remove_cnt_member(uuid)

		// 선택되지 않은 값인 경우
		} else {
			list_role_selected.push(uuid)
			document.getElementById(uuid).className = class_btn_enabled
			add_cnt_member(uuid)
		}
	}
	
	// 헤더의 선택/비선택 표시 변경
	classname_toggle_selection_role()


	// "전체"를 제외한 모든 성별이 선택된 경우
	if (list_role_selected.length == list_role_all.length) {
		list_role_selected = ["btn_role_all"]
		document.getElementById("btn_role_all").className = class_btn_enabled
	}

	get_cnt_member()
}