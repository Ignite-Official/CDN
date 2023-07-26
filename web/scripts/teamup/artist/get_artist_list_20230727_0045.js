async function get_artist_list(sort_method = "date_joined", div_id = "div_artist_list") {
	val_sort_method = sort_method
	change_btn_class(sort_method)
	
	//ReactDOM.render(<Div_artist_list_loading />, document.getElementById(div_id));

	const requestData = new FormData();
	requestData.append('sort_method', val_sort_method);
	requestData.append('limit', val_limit);
	requestData.append('offset', val_offset);

	const data = await fetch("/teamup/ajax_get_artist_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),},
								body: requestData
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	val_offset = val_limit + val_offset
	if (Object.keys(data).length != 0) {
		ReactDOM.render(<Div_artist_list data={data} page={val_offset}/>, document.getElementById(div_id));
	} else {
		try {
			document.getElementById(div_id).remove();
		} catch(e) {
			
		}
	}

}