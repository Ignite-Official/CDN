async function get_chat_teaminfo() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	data_teaminfo = await fetch("/teamup/ajax_get_chat_teaminfo/", {
							method: "post", 
							headers: { "X-CSRFToken": getCookie("csrftoken"), },
							body: request_data
							})
							.then(res=> { return res.json(); })
							.then(res=> { return res; });        

	ReactDOM.render(<Div_header data={data_teaminfo.teaminfo} />, document.getElementById("div_header"))
	ReactDOM.render(<Div_sender />, document.getElementById("div_sender"))
						
}