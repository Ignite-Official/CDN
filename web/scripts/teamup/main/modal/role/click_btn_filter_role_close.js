// 모달 - 필터 - 역할의 완료 버튼을 클릭했을 때 이벤트 (type - artist or team)
function click_btn_filter_role_close(type) {
	if (type == "artist") {
		if (data_artist_role_all) {
			ReactDOM.render(<Div_filter_button title={"역할"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_artist_role").click()} />,
											document.getElementById("btn_filter_artist_role"));

		} else if (!data_artist_role_all) {
			ReactDOM.render(<Div_filter_button title={"역할"} content={get_filter_role_label(type)}
											function={() => document.getElementById("btn_modal_filter_artist_role").click()} />,
											document.getElementById("btn_filter_artist_role"));
		}

		get_artist_list("init")

	} else if (type == "team") {
		if (data_team_role_all) {
			ReactDOM.render(<Div_filter_button title={"역할"} content={"전체"}
											function={() => document.getElementById("btn_modal_filter_team_role").click()} />,
											document.getElementById("btn_filter_team_role"));

		} else if (!data_team_role_all) {
			ReactDOM.render(<Div_filter_button title={"역할"} content={get_filter_role_label(type)}
											function={() => document.getElementById("btn_modal_filter_team_role").click()} />,
											document.getElementById("btn_filter_team_role"));

		}

		get_team_list("init")

	}

	document.getElementById("btn_modal_filter_" + type + "_role_close").click()
}