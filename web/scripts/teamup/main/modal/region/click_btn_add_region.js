// 지역 추가
function click_btn_add_region(type) {
	console.log(type)
	if (type == "artist") {
		let region_len = Object.values(data_artist_region).length  // 전체 지역 개수
		let new_region_name = document.getElementById("txt_add_artist_region").value.trim()

		// 새 지역 추가 - 이미 존재하지 않는 것만 추가
		if (new_region_name != "" &&
			Object.values(data_artist_region).filter(it => it.name == new_region_name).length == 0) {
				data_artist_region[region_len] = {
				"uuid": generateUUID(),
				"name": new_region_name,
				"active": 0,
			}

			// 모달 안의 지역 목록 표시
			ReactDOM.render(<Div_region_list data={data_artist_region} target={"artist"} />, document.getElementById("div_artist_region_list"));
		}

	} else if (type == 'team') {
		let region_len = Object.values(data_team_region).length  // 전체 지역 개수
		let new_region_name = document.getElementById("txt_add_team_region").value.trim()

		// 새 지역 추가 - 이미 존재하지 않는 것만 추가
		if (new_region_name != "" &&
			Object.values(data_team_region).filter(it => it.name == new_region_name).length == 0) {
				data_team_region[region_len] = {
				"uuid": generateUUID(),
				"name": new_region_name,
				"active": 0,
			}

			// 모달 안의 지역 목록 표시
			ReactDOM.render(<Div_region_list data={data_team_region} target={"team"} />, document.getElementById("div_team_region_list"));
		}

	}
}