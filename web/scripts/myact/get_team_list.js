async function get_team_list() {
	ReactDOM.render(<Div_team_list_loading />, document.getElementById("div_team_list"));
	
	const data = await fetch("/myact/ajax_get_myact_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });
	
	ReactDOM.render(<Div_team_list data={data} />, document.getElementById("div_team_list"));
}