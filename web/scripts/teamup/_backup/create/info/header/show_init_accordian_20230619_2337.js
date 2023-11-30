function show_init_accordian() {
	render_Div_header_by_condition('div_header_region', toggle_header_selection_toggle_region, toggle_div_content_region, "활동 지역")
	render_Div_header_by_condition('div_header_gender', toggle_header_selection_toggle_gender, toggle_div_content_gender, "성별")
	render_Div_header_by_condition('div_header_genre', toggle_header_selection_toggle_genre, toggle_div_content_genre, "활동 음악 장르")
	render_Div_header_by_condition('div_header_role', toggle_header_selection_toggle_role, toggle_div_content_role, "모집 분야")
	render_Div_header_by_condition('div_header_due_date', toggle_header_selection_toggle_due_date, toggle_div_content_due_date, "모집 마감일")
}