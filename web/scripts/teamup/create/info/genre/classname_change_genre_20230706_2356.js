function classname_change_genre(uuid){
	function select_all() {
		for (var i = 0 ; i < list_genre_all.length ; i++) {
			document.getElementById(list_genre_all[i]).className = class_btn_enabled
		} 
		document.getElementById("btn_genre_all").className = class_btn_enabled
		list_genre_selected = ["btn_genre_all"]
	}

	function remove_all() {
		for (var i = 0 ; i < list_genre_all.length ; i++) {
			document.getElementById(list_genre_all[i]).className = class_btn_disabled
		}
		document.getElementById("btn_genre_all").className = class_btn_disabled
		list_genre_selected = []
	}
		
	// "전체"를 선택한 경우
	if (uuid == "btn_genre_all") {
		if (list_genre_selected.includes(uuid)) {
			remove_all();		// 이미 "전체"가 선택되어 있었던 경우
		} else {
			select_all();		// "전체"가 선택되어있지 않았던 경우
		}
		

	// "전체"가 아닌 성별을 선택한 경우
	} else {
		// "전체"가 선택되어있던 상황인 경우, 값을 모두 해제하고 시작한다.
		if (list_genre_selected.includes("btn_genre_all")) {	remove_all();	}

		// 이미 선택된 값인 경우
		if (list_genre_selected.includes(uuid)) {
			list_genre_selected = list_genre_selected.filter((element) => element !== uuid)
			document.getElementById(uuid).className = class_btn_disabled

		// 선택되지 않은 값인 경우
		} else {
			list_genre_selected.push(uuid)
			document.getElementById(uuid).className = class_btn_enabled
		}
	}
	
	// 헤더의 선택/비선택 표시 변경
	classname_toggle_selection_genre()


	// "전체"를 제외한 모든 성별이 선택된 경우
	if (list_genre_selected.length == list_genre_all.length) {
		list_genre_selected = ["btn_genre_all"]
		document.getElementById("btn_genre_all").className = class_btn_enabled
	}
}