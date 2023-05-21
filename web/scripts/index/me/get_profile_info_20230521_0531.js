//  프로필 정보 스크립트
async function get_profile_info() {
	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_portfolio_info/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_header data={data} />, document.getElementById("div_header"))
	ReactDOM.render(<Div_status data={data} />, document.getElementById("div_status"))
	ReactDOM.render(<Div_profile data={data} />, document.getElementById("div_profile"))
}

get_profile_info()