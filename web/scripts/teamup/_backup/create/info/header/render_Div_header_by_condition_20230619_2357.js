function render_Div_header_by_condition(id, toggle_selection, toggle_content, name) {
	let img = null
	if (toggle_content == 1) {
		img = img_accordian_down
		document.getElementById(id).className = class_header
	} else {
		img = img_accordian_up
		document.getElementById(id).className = class_header + " border-b-2 border-[#292929]"
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