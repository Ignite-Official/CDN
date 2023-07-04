async function show_div_content_role() {
	const requestData_role = new FormData();
	requestData_role.append('uuid_team', uuid_team);

	const data_role = await fetch("/teamup/ajax_get_role_list/", {
						method: "post", 
						headers: {"X-CSRFToken": getCookie("csrftoken"),},
						body: requestData_role
					})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

	const data_instrument = await fetch("/teamup/ajax_get_instrument_list/", {
					method: "post", 
					headers: {"X-CSRFToken": getCookie("csrftoken"),},
					body: requestData_role
				})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

	// 역할 UUID 목록
	list_role_all = Object.values(Object.values(data_role)).map(x => x.uuid)
	// 악기 UUID 목록
	list_instrument_all = Object.values(Object.values(data_instrument)).map(x => x.uuid)

	ReactDOM.render(<Div_content_role data_role={data_role}
									  data_instrument={data_instrument} />,document.getElementById("div_content_role"));   
}