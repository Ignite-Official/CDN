function render_Div_header_by_condition(id, toggle_selection, toggle_content, name) {
	let img = img_accordian_down
	if (toggle_content == 1) {
		img = img_accordian_up
	}

	if (toggle_selection == 0) {
		ReactDOM.render(<Div_header title={name}
									class_selection={class_header_selection_disabled} 
									selection_name={txt_header_selection_disabled} accrodian_image={img} />,
									document.getElementById(id))
	} else {
		ReactDOM.render(<Div_header title={name}
									class_selection={class_header_selection_enabled} 
									selection_name={txt_header_selection_enabled} accrodian_image={img} />,
									document.getElementById(id))
	}
}