async function get_alert_list() {
	let data = await fetch("/ajax_get_alert_list/")
		.then(res=> { return res.json(); })
		.then(res=> { return res; });

	ReactDOM.render(<Div_menu_message header={"Alert"} data={data} />, document.getElementById("div_alert"))
	if (Object.values(data).filter(it => it.alert == "alert").length > 0) {
		document.getElementById("btn_alert_closed").innerHTML = '<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/bell_red.svg" class="w-[24px] h-[24px]" />'
	}
}