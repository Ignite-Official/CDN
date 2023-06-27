async function show_div_content_region() {
	const requestData_region = new FormData();
	requestData_region.append('uuid_team', uuid_team);
	const data_region = await fetch("/teamup/ajax_get_region_list/", {
						method: "post", 
						headers: {"X-CSRFToken": getCookie("csrftoken"),},
						body: requestData_region
					})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

	// 지역 UUID 목록
	list_region_all = Object.values(Object.values(data_region)).map(x => x.uuid)

	ReactDOM.render(<Div_content_region data={data_region} />,document.getElementById("div_content_region"));
}