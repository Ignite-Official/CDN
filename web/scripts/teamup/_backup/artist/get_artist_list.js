async function get_artist_list(sort_method = "date_joined") {
	change_btn_class(sort_method)
	
	ReactDOM.render(<Div_artist_list_loading data={data} />, document.getElementById("div_artist_list"));

	const requestData = new FormData();
	requestData.append('sort_method', sort_method);

	const data = await fetch("/teamup/ajax_get_artist_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),},
								body: requestData
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist_list data={data} />, document.getElementById("div_artist_list"));
}