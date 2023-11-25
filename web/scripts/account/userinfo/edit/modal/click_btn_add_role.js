// 역할 추가
function click_btn_add_role() {
	let role_len = Object.values(userdata.role).length  // 전체 장르 개수
	let new_role_name = document.getElementById("txt_add_role").value.trim()

	// 새 역할 추가 - 이미 존재하지 않는 것만 추가
	if (new_role_name != "" &&
		Object.values(userdata.role).filter(it => it.name == new_role_name).length == 0) {
		userdata.role[role_len] = {
			"uuid": generateUUID(),
			"name": new_role_name,
			"active": 0,
		}

		// 모달 안의 역할 목록 표시
		ReactDOM.render(<Div_role_list data={userdata.role} />, document.getElementById("div_role_list"));
	}
}