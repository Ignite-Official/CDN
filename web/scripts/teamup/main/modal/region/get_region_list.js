async function get_region_list() {        
	// 데이터 가져오기
	let data_region = await fetch("/teamup/ajax_get_region_list/")
							.then(res=> { return res.json(); })
							.then(res=> { return res; });

	data_artist_region = JSON.parse(JSON.stringify(data_region))
	data_team_region = JSON.parse(JSON.stringify(data_region))

	ReactDOM.render(<Div_region_list data={data_artist_region} target={"artist"} />, document.getElementById("div_artist_region_list"));
	ReactDOM.render(<Div_region_list data={data_team_region} target={"team"} />, document.getElementById("div_team_region_list"));
}