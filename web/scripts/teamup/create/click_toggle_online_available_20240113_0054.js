function click_toggle_online_available(active) {
	data_region_online = active

	if (active == "ONLINE") {
		ReactDOM.render(<Div_online_enable />, document.getElementById("div_region_online"));
	} else {
		ReactDOM.render(<Div_online_disable />, document.getElementById("div_region_online"));
	}
}