// 모달 - 필터 - 장르의 완료 버튼을 클릭했을 때 이벤트 (type - artist or team)
function click_btn_filter_genre_close(type) {
	if (type == "artist") {
		if (data_artist_genre_all) {
			ReactDOM.render(<Div_filter_button title={"장르"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_artist_genre").click()} />,
											document.getElementById("btn_filter_artist_genre"));

		} else if (!data_artist_genre_all) {
			ReactDOM.render(<Div_filter_button title={"장르"} content={get_filter_genre_label(type)}
											function={() => document.getElementById("btn_modal_filter_artist_genre").click()} />,
											document.getElementById("btn_filter_artist_genre"));
		}

		get_artist_list("init")

	} else if (type == "team") {
		if (data_team_genre_all) {
			ReactDOM.render(<Div_filter_button title={"장르"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_team_genre").click()} />,
											document.getElementById("btn_filter_team_genre"));

		} else if (!data_team_genre_all) {
			ReactDOM.render(<Div_filter_button title={"장르"} content={get_filter_genre_label(type)}
											function={() => document.getElementById("btn_modal_filter_team_genre").click()} />,
											document.getElementById("btn_filter_team_genre"));

		}

		get_team_list("init")

	}

	document.getElementById("btn_modal_filter_" + type + "_genre_close").click()
}