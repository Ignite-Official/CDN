async function get_userinfo() {
	// 데이터 가져오기
	userdata = await fetch("/account/ajax_get_userinfo/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_header />, document.getElementById("div_header"))
	ReactDOM.render(<Div_left />, document.getElementById("div_left"))
	ReactDOM.render(<Div_right />, document.getElementById("div_right"))

	// 포트폴리오 목록을 불러온다.
	get_portfolio_list()
}