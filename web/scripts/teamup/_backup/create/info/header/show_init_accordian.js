function show_init_accordian() {
	ReactDOM.render(<Div_header title={"활동 지역"}
								class_selection={class_header_selection_disabled} 
								selection_name={"비선택"} 
								accrodian_image={img_accordian_down} />,
								document.getElementById("div_header_region"))
	ReactDOM.render(<Div_header title={"성별"}
								class_selection={class_header_selection_disabled} 
								selection_name={"비선택"} 
								accrodian_image={img_accordian_down} />,
								document.getElementById("div_header_gender"))
	ReactDOM.render(<Div_header title={"활동 음악 장르"}
								class_selection={class_header_selection_disabled} 
								selection_name={"비선택"} 
								accrodian_image={img_accordian_down} />,
								document.getElementById("div_header_genre"))
	ReactDOM.render(<Div_header title={"모집 분야"}
								class_selection={class_header_selection_disabled} 
								selection_name={"비선택"} 
								accrodian_image={img_accordian_down} />,
								document.getElementById("div_header_role"))
	ReactDOM.render(<Div_header title={"모집 마감일"}
								class_selection={class_header_selection_disabled} 
								selection_name={"비선택"} 
								accrodian_image={img_accordian_down} />,
								document.getElementById("div_header_due_date"))
}