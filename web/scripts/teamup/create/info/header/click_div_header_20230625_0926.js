function click_div_header(div_id = "") {
	if (div_id == "div_content_region") {
		if (toggle_div_content_region == 0) {
			document.getElementById("div_content_region").className = class_div_content
			ReactDOM.render(<Div_content_loading />,document.getElementById(div_id))
			toggle_div_content_region = 1
			show_div_content_region()
			
		} else {
			document.getElementById("div_content_region").className = "hidden"
			toggle_div_content_region = 0
		}

	} else {
		document.getElementById("div_content_region").className = "hidden"
		toggle_div_content_region = 0
	}
	
	if (div_id == "div_content_gender") {
		if (toggle_div_content_gender == 0) {
			document.getElementById("div_content_gender").className = class_div_content
			ReactDOM.render(<Div_content_loading />,document.getElementById(div_id))
			toggle_div_content_gender = 1
			show_div_content_gender()
		} else {
			document.getElementById("div_content_gender").className = "hidden"
			toggle_div_content_gender = 0
		}
	} else {
		document.getElementById("div_content_gender").className = "hidden"
		toggle_div_content_gender = 0
	}
	
	if (div_id == "div_content_genre") {
		if (toggle_div_content_genre == 0) {
			document.getElementById("div_content_genre").className = class_div_content
			ReactDOM.render(<Div_content_loading />,document.getElementById(div_id))
			toggle_div_content_genre = 1
			show_div_content_genre()
		} else {
			document.getElementById("div_content_genre").className = "hidden"
			toggle_div_content_genre = 0
		}
	} else {
		document.getElementById("div_content_genre").className = "hidden"
		toggle_div_content_genre = 0
	}
	
	if (div_id == "div_content_role") {
		if (toggle_div_content_role == 0) {
			document.getElementById("div_content_role").className = class_div_content
			ReactDOM.render(<Div_content_loading />,document.getElementById(div_id))
			toggle_div_content_role = 1
			show_div_content_role()
		} else {
			document.getElementById("div_content_role").className = "hidden"
			toggle_div_content_role = 0
		}
	} else {
		document.getElementById("div_content_role").className = "hidden"
		toggle_div_content_role = 0
	}
	
	if (div_id == "div_content_due_date") {
		if (toggle_div_content_due_date == 0) {
			document.getElementById("div_content_due_date").className = class_div_content
			ReactDOM.render(<Div_content_loading />,document.getElementById(div_id))
			toggle_div_content_due_date = 1
			show_div_content_due_date()
		} else {
			document.getElementById("div_content_due_date").className = "hidden"
			toggle_div_content_due_date = 0
		}
	} else {
		document.getElementById("div_content_due_date").className = "hidden"
		toggle_div_content_due_date = 0
	}

	show_init_accordian()
}