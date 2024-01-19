async function get_genre_list() {        
	// 데이터 가져오기
	let data_genre = await fetch("/teamup/ajax_get_genre_list/")
							.then(res=> { return res.json(); })
							.then(res=> { return res; });

	data_artist_genre = JSON.parse(JSON.stringify(data_genre))
	data_team_genre = JSON.parse(JSON.stringify(data_genre))

	ReactDOM.render(<Div_genre_list data={data_artist_genre} target={"artist"} />, document.getElementById("div_artist_genre_list"));
	ReactDOM.render(<Div_genre_list data={data_team_genre} target={"team"} />, document.getElementById("div_team_genre_list"));
}