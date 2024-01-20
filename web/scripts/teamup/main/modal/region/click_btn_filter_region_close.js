// 모달 - 필터 - 지역의 완료 버튼을 클릭했을 때 이벤트 (type - artist or team)
function click_btn_filter_region_close(type) {
	if (type == "artist") {
		if (data_artist_region_all) {
			ReactDOM.render(<Div_filter_button title={"지역"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_artist_region").click()} />,
											document.getElementById("btn_filter_artist_region"));

		} else if (!data_artist_region_all) {
			ReactDOM.render(<Div_filter_button title={"지역"} content={get_filter_region_label(type)}
											function={() => document.getElementById("btn_modal_filter_artist_region").click()} />,
											document.getElementById("btn_filter_artist_region"));
		}

		get_artist_list("init")

	} else if (type == "team") {
		if (data_team_region_all) {
			ReactDOM.render(<Div_filter_button title={"지역"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_team_region").click()} />,
											document.getElementById("btn_filter_team_region"));

		} else if (!data_team_region_all) {
			ReactDOM.render(<Div_filter_button title={"지역"} content={get_filter_region_label(type)}
											function={() => document.getElementById("btn_modal_filter_team_region").click()} />,
											document.getElementById("btn_filter_team_region"));

		}

		get_team_list("init")

	}

	document.getElementById("btn_modal_filter_" + type + "_region_close").click()
}