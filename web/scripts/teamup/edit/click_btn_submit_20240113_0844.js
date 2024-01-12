async function click_btn_submit()
{
	function getToday(){
		var date = new Date();
		var year = date.getFullYear();
		var month = ("0" + (1 + date.getMonth())).slice(-2);
		var day = ("0" + date.getDate()).slice(-2);
	
		return year + "-" + month + "-" + day;
	}

	if (!toggle_click_btn_submit) {
		// Toggle ON
		toggle_click_btn_submit = true


		/***** 변수 *****/
		let txt_name = document.getElementById("txt_name").value.trim()           // 팀 이름
		let txt_account = document.getElementById("txt_account").value.trim()     // 팀 계정

		let check_gender_male = document.getElementById("check_gender_male").checked
		let check_gender_female = document.getElementById("check_gender_female").checked

		let data_active_genre = Object.values(data_genre).filter(it => it.active >= 1)  // 현재 active가 1 이상인 장르
		let data_active_role = Object.values(data_role).filter(it => it.active >= 1)  // 현재 active가 1 이상인 역할

		let txt_due_date = document.getElementById("txt_due_date").value.trim()     // 팀 이름
		let txt_intro = document.getElementById("txt_intro").value.trim()     // 팀 이름
		

		/***** 유효성 검사 *****/
		let pattern = /\s/g;

		if (txt_name == null || txt_name == "") {
			alert("팀 이름이 입력되지 않았습니다.")
		} else if (txt_account == null || txt_account == "") {
			alert("팀 계정명이 입력되지 않았습니다.");
		} else if (txt_account.match(pattern)) {
			alert("팀 계정명에는 공백이 없어야 합니다.");
		} else if (!/^[a-zA-Z0-9]+$/.test(txt_account)) {
			alert("팀 계정명은 알파벳과 숫자로만 작성할 수 있습니다.");
		} else if (data_active_genre.length == 0) {
			alert("장르를 선택하지 않았습니다.")
		} else if (data_active_role.length == 0) {
			alert("모집할 역할을 선택하지 않았습니다.")
		} else if (txt_due_date == null || txt_due_date == "") {
			alert("모집 마감 기간을 선택하지 않았습니다.");
		} else if (txt_intro == null || txt_intro == "") {
			alert("팀 소개가 입력되지 않았습니다.");
		} else {
			/***** 데이터 보내기 (유효성 검사는 완료) *****/
			// 
			ReactDOM.render(<Div_button_list_loading />, document.getElementById("div_button_list"));


			const request_data = new FormData();
			request_data.append('uuid_team', uuid_team);
			request_data.append('txt_name', document.getElementById("txt_name").value.trim());
			request_data.append('txt_account', document.getElementById("txt_account").value.trim());

			if (document.getElementById("check_gender_male").checked) {
				request_data.append('check_gender_male', "남성");
			}
			if (document.getElementById("check_gender_female").checked) {
				request_data.append('check_gender_female', "여성");
			}
			if (!document.getElementById("check_gender_male").checked && !document.getElementById("check_gender_female").checked) {
				request_data.append('check_gender_male', "남성");
				request_data.append('check_gender_female', "여성");
			}

			request_data.append('txt_due_date', document.getElementById("txt_due_date").value.trim());
			request_data.append('txt_intro', document.getElementById("txt_intro").value.trim());
			request_data.append('data_region_online', data_region_online);

			request_data.append('list_genre_name', Object.values(Object.values(data_genre)).map(x => x.name).join('　'));
			request_data.append('list_genre_active', Object.values(Object.values(data_genre)).map(x => x.active).join('　'));
			request_data.append('list_role_name', Object.values(Object.values(data_role)).map(x => x.name).join('　'));
			request_data.append('list_role_active', Object.values(Object.values(data_role)).map(x => x.active).join('　'));
			request_data.append('list_region_name', Object.values(Object.values(data_region)).map(x => x.name).join('　'));
			request_data.append('list_region_active', Object.values(Object.values(data_region)).map(x => x.active).join('　'));
		
			const data = await fetch("/teamup/ajax_update_teaminfo/", {
										method: "post", 
										headers: { "X-CSRFToken": getCookie("csrftoken"), },
										body: request_data
										})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

			// 이미 존재하는 계정명일 경우
			if (data.checker_exist == "EXIST") {
				alert("이미 같은 계정명이 존재합니다.");

			// 완료 후 이동
			} else {				
				location.href = "/" + data.team_url
				
			}
	

			ReactDOM.render(<Div_button_list />, document.getElementById("button_list"));
		}

		// Toggle OFF
		toggle_click_btn_submit = false
	}
}