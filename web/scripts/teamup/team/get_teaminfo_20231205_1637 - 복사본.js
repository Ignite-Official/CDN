async function get_teaminfo() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	teamdata = await fetch("/teamup/ajax_get_teaminfo/", {
					 method: "post", 
					 headers: { "X-CSRFToken": getCookie("csrftoken"), },
					 body: request_data
					 })
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	get_extra_info()
}

function get_extra_info() {
	ReactDOM.render(<Div_header />, document.getElementById("div_header"))
	ReactDOM.render(<Div_left />, document.getElementById("div_left"))
	ReactDOM.render(<Div_right />, document.getElementById("div_right"))

	get_genre_list()    // 장르 목록
	get_role_list()     // 역할 목록
	get_member_list()   // 현재 멤버 목록
	get_pending_list()  // 받은 요청 목록
}
