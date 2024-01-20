async function get_role_list() {        
	// 데이터 가져오기
	let data_role = await fetch("/teamup/ajax_get_role_list/")
							.then(res=> { return res.json(); })
							.then(res=> { return res; });

	data_artist_role = JSON.parse(JSON.stringify(data_role))
	data_team_role = JSON.parse(JSON.stringify(data_role))

	ReactDOM.render(<Div_role_list data={data_artist_role} target={"artist"} />, document.getElementById("div_artist_role_list"));
	ReactDOM.render(<Div_role_list data={data_team_role} target={"team"} />, document.getElementById("div_team_role_list"));
}