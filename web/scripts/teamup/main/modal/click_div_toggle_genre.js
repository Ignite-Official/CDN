function click_div_toggle_genre(type) {
	if (type == "artist") {
		if (data_artist_genre_all) {
			document.getElementById("div_artist_genre_list").className = ""
			document.getElementById("div_artist_genre_add").className = class_modal_div_close
			document.getElementById("div_modal_content_artist_genre").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_artist_genre").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_genre(type)} />, document.getElementById("div_modal_toggle_artist_genre"));
			data_artist_genre_all = false

		} else if (!data_artist_genre_all) {
			document.getElementById("div_artist_genre_list").className = "hidden"
			document.getElementById("div_artist_genre_add").className = "hidden"
			document.getElementById("div_modal_content_artist_genre").className = class_modal_content_all
			document.getElementById("div_modal_content_description_artist_genre").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_genre(type)} />, document.getElementById("div_modal_toggle_artist_genre"));
			data_artist_genre_all = true
		}

	} else if (type == "team") {
		if (data_team_genre_all) {
			document.getElementById("div_team_genre_list").className = ""
			document.getElementById("div_team_genre_add").className = class_modal_div_close
			document.getElementById("div_modal_content_team_genre").className = class_modal_content_notall
			document.getElementById("div_modal_content_description_team_genre").className = "text-[12px] font-[400] text-[#A3A3A3] w-full"
			ReactDOM.render(<Div_toggle_off label={"전체"} function={() => click_div_toggle_genre(type)} />, document.getElementById("div_modal_toggle_team_genre"));
			data_team_genre_all = false

		} else if (!data_team_genre_all) {
			document.getElementById("div_team_genre_list").className = "hidden"
			document.getElementById("div_team_genre_add").className = "hidden"
			document.getElementById("div_modal_content_team_genre").className = class_modal_content_all
			document.getElementById("div_modal_content_description_team_genre").className = "hidden"
			ReactDOM.render(<Div_toggle_on label={"전체"} function={() => click_div_toggle_genre(type)} />, document.getElementById("div_modal_toggle_team_genre"));
			data_team_genre_all = true
		}

	}
}