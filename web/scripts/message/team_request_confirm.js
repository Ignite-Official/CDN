async function team_request_confirm(uuid_requester, uuid_team, confirm) {
	const requestData = new FormData();
	requestData.append('uuid_requester', uuid_requester);
	requestData.append('uuid_team', uuid_team);
	requestData.append('confirm', confirm);

	const data = await fetch("/message/ajax_request_team_confirm/", {
						method: "post", 
						headers: {"X-CSRFToken": getCookie("csrftoken"),},
						body: requestData
					})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

	ReactDOM.render(<Div_message_list data={data} />, document.getElementById("div_message_list"))
}