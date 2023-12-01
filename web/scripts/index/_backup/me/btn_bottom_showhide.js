// 포트폴리오 수정하기 / 프로필 수정하기 버튼을 보여줄지 여부
async function btn_bottom_showhide() {
	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_portfolio_info/", {
					method: "post", 
					headers: {
						"X-CSRFToken": getCookie("csrftoken"),
					},
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 로그인 한 유저에게만 보여준다
	if (data.checker == "TRUE") {
		toggle_btn_bottom = 1

		if (toggle_sub_menu_portfolio == 1) {
			ReactDOM.render(<Div_btn_botton class={class_btn} text="포트폴리오 수정하기" />, document.getElementById("btn_bottom"))
		} else if (toggle_sub_menu_profile == 1) {
			ReactDOM.render(<Div_btn_botton class={class_btn} text="프로필 수정하기" />, document.getElementById("btn_bottom"))
		}
	}
}