async function team_remove(uuid) {
	const request_data = new FormData();
	request_data.append('uuid', uuid);

	const data = await fetch("/ajax_team_remove/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

	location.href="/"
}