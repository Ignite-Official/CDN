function classname_change_region(uuid){

	// "전국"을 선택한 경우
	if (uuid == "btn_region_all") {
		
		// 이미 "전국"이 선택되어 있었던 경우
		if (list_region_selected.includes(uuid)) {
			for (var i = 0 ; i < list_region_all.length ; i++) {
				document.getElementById(list_region_all[i]).className = class_btn_disabled
			}
			document.getElementById("btn_region_all").className = class_btn_disabled
			list_region_selected = []

		// "전국"이 선택되어있지 않았던 경우
		} else {
			for (var i = 0 ; i < list_region_all.length ; i++) {
				document.getElementById(list_region_all[i]).className = class_btn_enabled
			} 
			document.getElementById("btn_region_all").className = class_btn_enabled
			list_region_selected = ["btn_region_all"]
		}
		

	// "전국"이 아닌 지역을 선택한 경우
	} else {
		// "전국"이 선택되어있던 상황인 경우, 값을 모두 해제하고 시작한다.
		if (list_region_selected.includes("btn_region_all")) {
			for (var i = 0 ; i < list_region_all.length ; i++) {
				document.getElementById(list_region_all[i]).className = class_btn_disabled
			} 
			document.getElementById("btn_region_all").className = class_btn_disabled
			list_region_selected = []
		}

		// 이미 선택된 값인 경우
		if (list_region_selected.includes(uuid)) {
			list_region_selected = list_region_selected.filter((element) => element !== uuid)
			document.getElementById(uuid).className = class_btn_disabled

		// 선택되지 않은 값인 경우
		} else {
			list_region_selected.push(uuid)
			document.getElementById(uuid).className = class_btn_enabled
		}
	}
	
	// 헤더의 선택/비선택 표시 변경
	if (list_region_selected.length == 0) {
		ReactDOM.render(<Div_header title={'활동 지역'} 
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_region"));
		toggle_header_selection_toggle_region = 0

	} else {
		ReactDOM.render(<Div_header title={'활동 지역'} 
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_region"));
		toggle_header_selection_toggle_region = 1
	}
}