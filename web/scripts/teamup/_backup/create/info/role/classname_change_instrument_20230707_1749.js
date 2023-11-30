function classname_change_instrument(uuid){
	function select_all() {
		for (var i = 0 ; i < list_instrument_all.length ; i++) {
			document.getElementById(list_instrument_all[i]).className = class_btn_enabled

			if (!list_instrument_selected.includes(list_instrument_all[i])) {
				add_cnt_member(list_instrument_all[i], 1, true)
			}
			
		}

		document.getElementById("btn_instrument_all").className = class_btn_enabled
		list_instrument_selected = ["btn_instrument_all"]
	}

	function remove_all() {
		for (var i = 0 ; i < list_instrument_all.length ; i++) {
			document.getElementById(list_instrument_all[i]).className = class_btn_disabled

			if (list_instrument_selected.includes("btn_instrument_all") || list_instrument_selected.includes(list_instrument_all[i])) {
				remove_cnt_member(list_instrument_all[i])
			}
		}

		document.getElementById("btn_instrument_all").className = class_btn_disabled
		list_instrument_selected = []
	}
	
	// "전체"를 선택한 경우
	if (uuid == "btn_instrument_all") {
		if (list_instrument_selected.includes(uuid)) {
			remove_all();       // 이미 "전체"가 선택되어 있었던 경우
		} else {
			select_all();       // "전체"가 선택되어있지 않았던 경우
		}
		

	// "전체"가 아닌 악기를 선택한 경우
	} else {
		// "전체"가 선택되어있던 상황인 경우, 값을 모두 해제하고 시작한다.
		if (list_instrument_selected.includes("btn_instrument_all")) {  remove_all();   }

		// 이미 선택된 값인 경우
		if (list_instrument_selected.includes(uuid)) {
			list_instrument_selected = list_instrument_selected.filter((element) => element !== uuid)
			document.getElementById(uuid).className = class_btn_disabled
			remove_cnt_member(uuid)

		// 선택되지 않은 값인 경우
		} else {
			list_instrument_selected.push(uuid)
			document.getElementById(uuid).className = class_btn_enabled
			add_cnt_member(uuid, 1, true)
		}
	}
	
	// 헤더의 선택/비선택 표시 변경
	classname_toggle_selection_role()

	// "전체"를 제외한 모든 악기가 선택된 경우
	if (list_instrument_selected.length == list_instrument_all.length) {
		list_instrument_selected = ["btn_instrument_all"]
		document.getElementById("btn_instrument_all").className = class_btn_enabled
	}
}