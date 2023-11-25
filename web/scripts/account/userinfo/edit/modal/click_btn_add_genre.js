// 장르 추가
function click_btn_add_genre() {
	let genre_len = Object.values(userdata.genre).length  // 전체 장르 개수
	let new_genre_name = document.getElementById("txt_add_genre").value.trim()

	// 새 장르 추가 - 이미 존재하지 않는 것만 추가
	if (new_genre_name != "" &&
		Object.values(userdata.genre).filter(it => it.name == new_genre_name).length == 0) {
		userdata.genre[genre_len] = {
			"uuid": generateUUID(),
			"name": new_genre_name,
			"active": 0,
		}

		// 모달 안의 장르 목록 표시
		ReactDOM.render(<Div_genre_list data={userdata.genre} />, document.getElementById("div_genre_list"));
	}
}