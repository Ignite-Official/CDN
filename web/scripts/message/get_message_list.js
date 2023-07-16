async function get_message_list() {
	ReactDOM.render(<Div_team_list_loading />, document.getElementById("div_message_list"))

	const data = await fetch("/message/ajax_get_message_list/")
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
	
	console.log(data)
	ReactDOM.render(<Div_message_list data={data} />, document.getElementById("div_message_list"))
}