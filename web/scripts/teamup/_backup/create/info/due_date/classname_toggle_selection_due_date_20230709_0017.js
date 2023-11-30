function classname_toggle_selection_due_date() {
	selected_due_date = document.getElementById("txt_due_date").value.trim()

	// 헤더의 선택/비선택 표시 변경
	if (selected_due_date != "") {
		ReactDOM.render(<Div_header title={'모집 마감일'} 
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_due_date"));
		toggle_header_selection_toggle_due_date = 1

	} else {
		ReactDOM.render(<Div_header title={'모집 마감일'} 
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_due_date"));
		toggle_header_selection_toggle_due_date = 0

	}
	
	toggle_btn_submit()
}