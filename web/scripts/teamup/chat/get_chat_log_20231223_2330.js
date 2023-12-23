async function get_chat_log(init) {
	if (!init) {
		ReactDOM.render(<Div_header_refresh_loading />, document.getElementById("div_header_refresh"))
	}
	

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	data_chat_log = await fetch("/teamup/ajax_get_chat_log/", {
							method: "post", 
							headers: { "X-CSRFToken": getCookie("csrftoken"), },
							body: request_data
							})
							.then(res=> { return res.json(); })
							.then(res=> { return res; });

	set_chat_log()
}