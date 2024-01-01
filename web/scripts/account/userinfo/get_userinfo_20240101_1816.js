async function get_userinfo() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	userdata = await fetch("/account/ajax_get_userinfo/", {
					 method: "post", 
					 headers: { "X-CSRFToken": getCookie("csrftoken"), },
					 body: request_data
					 })
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_header />, document.getElementById("div_header"))
	ReactDOM.render(<Div_left />, document.getElementById("div_left"))
	ReactDOM.render(<Div_right />, document.getElementById("div_right"))
	ReactDOM.render(<Div_modal_add_portfolio />, document.getElementById("modal_add_portfolio"))
	ReactDOM.render(<Div_modal_request_team />, document.getElementById("modal_request_team"));

	// 포트폴리오 목록을 불러온다.
	get_portfolio_list()

	// 소속 팀업 목록을 불러온다
	get_teamup_list()
}