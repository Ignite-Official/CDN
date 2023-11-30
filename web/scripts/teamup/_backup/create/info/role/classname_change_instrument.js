function classname_change_instrument(uuid){

	// "전체"를 선택한 경우
	if (uuid == "btn_instrument_all") {
		
		// 이미 "전체"가 선택되어 있었던 경우
		if (list_instrument_selected.includes(uuid)) {
			for (var i = 0 ; i < list_instrument_all.length ; i++) {
				document.getElementById(list_instrument_all[i]).className = class_btn_disabled
			}
			document.getElementById("btn_instrument_all").className = class_btn_disabled
			list_instrument_selected = []

		// "전체"가 선택되어있지 않았던 경우
		} else {
			for (var i = 0 ; i < list_instrument_all.length ; i++) {
				document.getElementById(list_instrument_all[i]).className = class_btn_enabled
			} 
			document.getElementById("btn_instrument_all").className = class_btn_enabled
			list_instrument_selected = ["btn_instrument_all"]
		}
		

	// "전체"가 아닌 성별을 선택한 경우
	} else {
		// "전체"가 선택되어있던 상황인 경우, 값을 모두 해제하고 시작한다.
		if (list_instrument_selected.includes("btn_instrument_all")) {
			for (var i = 0 ; i < list_instrument_all.length ; i++) {
				document.getElementById(list_instrument_all[i]).className = class_btn_disabled
			} 
			document.getElementById("btn_instrument_all").className = class_btn_disabled
			list_instrument_selected = []
		}

		// 이미 선택된 값인 경우
		if (list_instrument_selected.includes(uuid)) {
			list_instrument_selected = list_instrument_selected.filter((element) => element !== uuid)
			document.getElementById(uuid).className = class_btn_disabled

		// 선택되지 않은 값인 경우
		} else {
			list_instrument_selected.push(uuid)
			document.getElementById(uuid).className = class_btn_enabled
		}
	}
	
	// 헤더의 선택/비선택 표시 변경
	classname_toggle_selection_instrument()


	// "전체"를 제외한 모든 성별이 선택된 경우
	if (list_instrument_selected.length == list_instrument_all.length) {
		list_instrument_selected = ["btn_instrument_all"]
		document.getElementById("btn_instrument_all").className = class_btn_enabled
	}
}