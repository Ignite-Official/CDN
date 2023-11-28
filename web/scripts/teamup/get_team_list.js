async function get_team_list() {
	const data = await fetch("/teamup/ajax_get_team_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	//console.log(data)
}