function classname_toggle_selection_region() {
	// 헤더의 선택/비선택 표시 변경
	if (list_region_selected.length > 0 || toggle_region_online == 1) {
		ReactDOM.render(<Div_header title={'활동 지역'} 
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_region"));
		toggle_header_selection_toggle_region = 1

	} else {
		ReactDOM.render(<Div_header title={'활동 지역'} 
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_region"));
		toggle_header_selection_toggle_region = 0

	}
	
	toggle_btn_submit()
}