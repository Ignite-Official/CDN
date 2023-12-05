async function get_genre_list() {
	function Div_left_genre_list(props) {
		const left_genre_List = Object.keys(props.data).map((btn_data) =>  
			<Div_btn_act_22 name={props.data[btn_data].name}/>
		)

		return (
			<div class="flex flex-col w-full space-y-[12px]">
				<Div_left_sub_title title="활동 음악 장르에요." />

				<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
					<div></div>
					{left_genre_List}
				</div>
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let genre_list = await fetch("/teamup/ajax_get_team_genre_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	teamdata['genre_list'] = genre_list['genre_list']

	ReactDOM.render(<Div_left_genre_list data={teamdata['genre_list']} />, document.getElementById("div_left_genre_list"))
}