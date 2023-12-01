async function get_mypage_profile_info(editmode) {
	// 프로필 수정 모드가 아니면, 프로필 division을 hidden 처리한다.
	if (mode == "edit_portfolio") {
		// 포트폴리오 모드에서는 아무 일도 하지 않는다.
	} else if (mode == "edit_profile") {
		document.getElementById("div_profile").className = "pt-[16px]"
	} else {
		document.getElementById("div_profile").className = "pt-[16px] hidden"
	}

	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_mypage_profile_info/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	change_meta_tag(data.nickname + "님의 마이페이지 :: Ignite", data.txt_intro)

	ReactDOM.render(<Div_header data={data} />, document.getElementById("div_header"))
	ReactDOM.render(<Div_status data={data} />, document.getElementById("div_status"))
	

	// 포트폴리오 수정하기 모드
	if (mode == "edit_portfolio") {
	   // 포트폴리오 모드에서는 아무 일도 하지 않는다.

	// 프로필 수정하기 모드
	} else if (mode == "edit_profile") {
		ReactDOM.render(<Div_profile_edit data={data} />, document.getElementById("div_profile"))
		document.getElementById("txt_head_intro").value = data.txt_head_intro

		// 문장 높이에 따라 textarea의 높이 자동 조절
		document.getElementById('txt_intro').addEventListener('keydown', textarea_autosize);
		document.getElementById('txt_intro2').addEventListener('keydown', textarea_autosize);
		document.getElementById('txt_intro3').addEventListener('keydown', textarea_autosize);

		// 내 포트폴리오에 들어왔을 때만 수정하기 버튼이 나타난다.
		if (current_email == data.email) {
			ReactDOM.render(<Div_btn_bottom class={class_btn}
											text="완료"
											function={() => submit_profile()} />, document.getElementById("btn_bottom"))
		}

	// 일반 모드
	} else {
		ReactDOM.render(<Div_profile data={data} />, document.getElementById("div_profile"))

		// 내 포트폴리오에 들어왔을 때만 수정하기 버튼이 나타난다.
		if (current_email == data.email) {
			btn_bottom_showhide()
		}
	}
}