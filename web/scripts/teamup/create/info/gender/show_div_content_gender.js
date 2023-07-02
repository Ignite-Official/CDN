async function show_div_content_gender() {
	const requestData_gender = new FormData();
	requestData_gender.append('uuid_team', uuid_team);
	const data_gender = await fetch("/teamup/ajax_get_gender_list/", {
						method: "post", 
						headers: {"X-CSRFToken": getCookie("csrftoken"),},
						body: requestData_gender
					})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

	// 지역 UUID 목록
	list_gender_all = Object.values(Object.values(data_gender)).map(x => x.uuid)

	ReactDOM.render(<Div_content_gender data={data_gender} />,document.getElementById("div_content_gender"));   
}