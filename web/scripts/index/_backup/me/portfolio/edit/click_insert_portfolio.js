// 포트폴리오 추가
async function click_insert_portfolio() {
	if (document.getElementById("txt_portfolio_url").value.trim().length != 0) {
		ReactDOM.render(<Div_btn_bottom_portfolio_add_loading />, document.getElementById("div_btn_bottom_portfolio_add"));   

		
		const request_data = new FormData();
		request_data.append('url', document.getElementById("txt_portfolio_url").value.trim());
		request_data.append('source', toggle_portfolio_url_source);

		// 프로필 데이터 가져오기
		const data = await fetch("/ajax_insert_new_portfolio/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });


		// 검색 결과가 성공적이면, 포트폴리오를 업데이트 한다.
		if (data.checker == "SUCCESS") { 
			get_mypage_portfolio_info(); 

		} else if (data.checker == "EXIST") { 
			alert("이미 포트폴리오에 추가된 URL입니다.");

		} else {
			alert("잘못된 URL을 입력하였습니다.");

		}

		ReactDOM.render(<Div_btn_bottom_portfolio_add closed={false} />, document.getElementById("div_btn_bottom_portfolio_add"));   

	} else {
		return false

	}
}