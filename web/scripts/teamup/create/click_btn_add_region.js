// 지역 추가
function click_btn_add_region() {
	let region_len = Object.values(data_region).length  // 전체 장르 개수
	let new_region_name = document.getElementById("txt_add_region").value.trim()

	// 새 지역 추가 - 이미 존재하지 않는 것만 추가
	if (new_region_name != "" &&
		Object.values(data_region).filter(it => it.name == new_region_name).length == 0) {
			data_region[region_len] = {
			"uuid": generateUUID(),
			"name": new_region_name,
			"active": 0,
		}

		// 모달 안의 장르 목록 표시
		ReactDOM.render(<Div_region_list data={data_region} />, document.getElementById("div_region_list"));
	}
}