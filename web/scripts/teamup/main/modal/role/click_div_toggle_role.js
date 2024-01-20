function click_div_toggle_role(type) {
	if (type == "artist") {
		if (data_artist_role_all) {
			document.getElementById("div_artist_role_list").className = ""
			document.getElementById("div_artist_role_add").className = class_modal_div_close
			document.getElementById("div_modal_content_artist_role").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_artist_role").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_role(type)} />, document.getElementById("div_modal_toggle_artist_role"));
			data_artist_role_all = false

		} else if (!data_artist_role_all) {
			document.getElementById("div_artist_role_list").className = "hidden"
			document.getElementById("div_artist_role_add").className = "hidden"
			document.getElementById("div_modal_content_artist_role").className = class_modal_content_all
			document.getElementById("div_modal_content_description_artist_role").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_role(type)} />, document.getElementById("div_modal_toggle_artist_role"));
			data_artist_role_all = true
		}

	} else if (type == "team") {
		if (data_team_role_all) {
			document.getElementById("div_team_role_list").className = ""
			document.getElementById("div_team_role_add").className = class_modal_div_close
			document.getElementById("div_modal_content_team_role").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_team_role").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_role(type)} />, document.getElementById("div_modal_toggle_team_role"));
			data_team_role_all = false

		} else if (!data_team_role_all) {
			document.getElementById("div_team_role_list").className = "hidden"
			document.getElementById("div_team_role_add").className = "hidden"
			document.getElementById("div_modal_content_team_role").className = class_modal_content_all
			document.getElementById("div_modal_content_description_team_role").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_role(type)} />, document.getElementById("div_modal_toggle_team_role"));
			data_team_role_all = true
		}

	}
}