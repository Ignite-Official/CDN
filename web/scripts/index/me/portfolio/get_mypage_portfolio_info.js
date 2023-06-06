async function get_mypage_portfolio_info(current_user_info, editmode) {
	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_mypage_portfolio_info/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 포트폴리오 주인의 이메일
	let data_email = data.email
	delete data.email
	
	// 포트폴리오 수정하기 모드
	if (editmode == "edit_portfolio") {
		ReactDOM.render(<Div_portfolio_edit data={data} />, document.getElementById("div_portfolio"));   

		// 내 포트폴리오에 들어왔을 때만 수정하기 버튼이 나타난다.
		if (current_user_info == data_email) {
			ReactDOM.render(<Div_btn_bottom_portfolio />, document.getElementById("btn_bottom"))
		}

	
	} else if (editmode == "edit_profile") {
		// 프로필 수정 모드에서는 아무 일도 하지 않는다.


	// 일반 모드
	} else {
		ReactDOM.render(<Div_portfolio data={data} />, document.getElementById("div_portfolio"));   
		
	}
}