async function get_team_list(sort_method = "total_cnt") {
	change_btn_class(sort_method)
	
	ReactDOM.render(<Div_team_list_loading />, document.getElementById("div_team_list"));
	
	const requestData = new FormData();
	requestData.append('sort_method', sort_method);

	const data = await fetch("/teamup/ajax_get_team_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),},
								body: requestData
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_team_list data={data} />, document.getElementById("div_team_list"));
}