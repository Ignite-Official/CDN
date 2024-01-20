function click_div_toggle_region(type) {
	if (type == "artist") {
		if (data_artist_region_all) {
			document.getElementById("div_artist_region_list").className = ""
			document.getElementById("div_artist_region_add").className = class_modal_div_close
			document.getElementById("div_modal_content_artist_region").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_artist_region").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_region(type)} />, document.getElementById("div_modal_toggle_artist_region"));
			data_artist_region_all = false

		} else if (!data_artist_region_all) {
			document.getElementById("div_artist_region_list").className = "hidden"
			document.getElementById("div_artist_region_add").className = "hidden"
			document.getElementById("div_modal_content_artist_region").className = class_modal_content_all
			document.getElementById("div_modal_content_description_artist_region").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_region(type)} />, document.getElementById("div_modal_toggle_artist_region"));
			data_artist_region_all = true
		}

	} else if (type == "team") {
		if (data_team_region_all) {
			document.getElementById("div_team_region_list").className = ""
			document.getElementById("div_team_region_add").className = class_modal_div_close
			document.getElementById("div_modal_content_team_region").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_team_region").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_region(type)} />, document.getElementById("div_modal_toggle_team_region"));
			data_team_region_all = false

		} else if (!data_team_region_all) {
			document.getElementById("div_team_region_list").className = "hidden"
			document.getElementById("div_team_region_add").className = "hidden"
			document.getElementById("div_modal_content_team_region").className = class_modal_content_all
			document.getElementById("div_modal_content_description_team_region").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_region(type)} />, document.getElementById("div_modal_toggle_team_region"));
			data_team_region_all = true
		}

	}
}