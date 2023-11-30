function classname_toggle_selection_genre() {
	// 헤더의 선택/비선택 표시 변경
	if (list_genre_selected.length > 0) {
		ReactDOM.render(<Div_header title={'성별'} 
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_genre"));
		toggle_header_selection_toggle_genre = 1

	} else {
		ReactDOM.render(<Div_header title={'성별'} 
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} 
									accrodian_image={img_accordian_down} />,document.getElementById("div_header_genre"));
		toggle_header_selection_toggle_genre = 0

	}
}