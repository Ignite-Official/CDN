function classname_toggle_selection_role() {
	// 헤더의 선택/비선택 표시 변경
	if (list_role_selected.length > 0 || list_instrument_selected.length > 0) {
		ReactDOM.render(<Div_header title={'모집 분야'} 
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_role"));
		toggle_header_selection_toggle_role = 1

	} else {
		ReactDOM.render(<Div_header title={'모집 분야'} 
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_role"));
		toggle_header_selection_toggle_role = 0

	}
}