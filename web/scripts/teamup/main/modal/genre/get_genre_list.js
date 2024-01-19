async function get_genre_list() {
	// 모달 안의 장르 목록
	function Div_genre_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" 
					id={"genre_" + props.target + "_" +  props.data[btn_data].uuid} 
					name={"genre_" + props.target + "_" + props.data[btn_data].uuid}
					onClick={() => click_btn_genre(props.data[btn_data].uuid, props.target)}
					class={class_btn_act_notselected}>
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_genre_btn_list_sub">
				<div class="hidden"></div>
				{btnList}
			</div>
		)
	}

	// 데이터 가져오기
	let data_genre = await fetch("/teamup/ajax_get_genre_list/")
						  .then(res=> { return res.json(); })
						  .then(res=> { return res; });

	data_artist_genre = data_genre
	data_team_genre = data_genre

	ReactDOM.render(<Div_genre_list data={data_artist_genre} target={"artist"} />, document.getElementById("div_artist_genre_list"));
	ReactDOM.render(<Div_genre_list data={data_team_genre} target={"team"} />, document.getElementById("div_team_genre_list"));
}