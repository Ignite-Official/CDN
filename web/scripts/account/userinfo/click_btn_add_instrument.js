// 악기 추가
function click_btn_add_instrument() {
	let instrument_len = Object.values(userdata.instrument).length  // 전체 악기 개수
	let new_instrument_name = document.getElementById("txt_add_instrument").value.trim()

	// 새 악기 추가 - 이미 존재하지 않는 것만 추가
	if (new_instrument_name != "" &&
		Object.values(userdata.instrument).filter(it => it.name == new_instrument_name).length == 0) {
		userdata.instrument[instrument_len] = {
			"uuid": generateUUID(),
			"name": new_instrument_name,
			"active": 0,
		}

		// 모달 안의 악기 목록 표시
		ReactDOM.render(<Div_instrument_list data={userdata.instrument} />, document.getElementById("div_instrument_list"));
	}
}
