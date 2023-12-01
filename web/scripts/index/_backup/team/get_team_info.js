async function get_team_info() {
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	const data = await fetch("/get_team_info/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
	
	ReactDOM.render(<Div_team_info data={data} />, document.getElementById("div_team_info"))
}    