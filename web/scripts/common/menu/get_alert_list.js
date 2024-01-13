async function get_alert_list() {
	let data = await fetch("/ajax_get_alert_list/")
		.then(res=> { return res.json(); })
		.then(res=> { return res; });

	ReactDOM.render(<Div_menu_message header={"Alert"} data={data} />, document.getElementById("div_alert"))
}