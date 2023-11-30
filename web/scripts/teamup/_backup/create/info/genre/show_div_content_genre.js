async function show_div_content_genre() {
	const requestData_genre = new FormData();
	requestData_genre.append('uuid_team', uuid_team);
	const data_genre = await fetch("/teamup/ajax_get_genre_list/", {
						method: "post", 
						headers: {"X-CSRFToken": getCookie("csrftoken"),},
						body: requestData_genre
					})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

	// 지역 UUID 목록
	list_genre_all = Object.values(Object.values(data_genre)).map(x => x.uuid)

	ReactDOM.render(<Div_content_genre data={data_genre} />,document.getElementById("div_content_genre"));   
}