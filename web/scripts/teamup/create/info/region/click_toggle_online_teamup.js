function click_toggle_online_teamup() {
	if (toggle_region_online == 0) {
		toggle_region_online = 1
	} else {
		toggle_region_online = 0
	}

	ReactDOM.render(<Div_toggle_online_teamup />, document.getElementById("div_teamup"));   
}