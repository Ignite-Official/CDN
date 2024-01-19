// 장르 추가
function click_btn_add_genre(type) {
	console.log(type)
	if (type == "artist") {
		let genre_len = Object.values(data_artist_genre).length  // 전체 장르 개수
		let new_genre_name = document.getElementById("txt_add_artist_genre").value.trim()

		// 새 장르 추가 - 이미 존재하지 않는 것만 추가
		if (new_genre_name != "" &&
			Object.values(data_artist_genre).filter(it => it.name == new_genre_name).length == 0) {
				data_artist_genre[genre_len] = {
				"uuid": generateUUID(),
				"name": new_genre_name,
				"active": 0,
			}

			// 모달 안의 장르 목록 표시
			ReactDOM.render(<Div_genre_list data={data_artist_genre} target={"artist"} />, document.getElementById("div_artist_genre_list"));
		}

	} else if (type == 'team') {
		let genre_len = Object.values(data_team_genre).length  // 전체 장르 개수
		let new_genre_name = document.getElementById("txt_add_team_genre").value.trim()

		// 새 장르 추가 - 이미 존재하지 않는 것만 추가
		if (new_genre_name != "" &&
			Object.values(data_team_genre).filter(it => it.name == new_genre_name).length == 0) {
				data_team_genre[genre_len] = {
				"uuid": generateUUID(),
				"name": new_genre_name,
				"active": 0,
			}

			// 모달 안의 장르 목록 표시
			ReactDOM.render(<Div_genre_list data={data_team_genre} target={"team"} />, document.getElementById("div_team_genre_list"));
		}

	}
}