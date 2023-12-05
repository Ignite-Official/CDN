async function get_pending_list() {
	function Div_right_pending_list(props) {
		const right_pending_List = Object.keys(props.data).map((btn_data) =>  
			<Div_member_card account={props.data[btn_data].account}
							 nickname={props.data[btn_data].nickname}
							 gender={props.data[btn_data].gender}
							 total_cnt={props.data[btn_data].total_cnt}
							 sum_respect={props.data[btn_data].sum_respect}
							 txt_intro={props.data[btn_data].txt_intro}
							 member_type={props.data[btn_data].member_type}
							 type={"pending"}
							/>
		)

		return (
			<div class="grid grid-cols-3 justify-center items-center w-full gap-[24px] md:grid-cols-2 sm:md:grid-cols-1">
				{right_pending_List}
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let teamdata_pending_list = await fetch("/teamup/ajax_get_team_pending_list/", {
								  method: "post", 
								  headers: { "X-CSRFToken": getCookie("csrftoken"), },
								  body: request_data
								  })
								  .then(res=> { return res.json(); })
								  .then(res=> { return res; });
	teamdata['pending_list'] = teamdata_pending_list['pending_list']

	ReactDOM.render(<Div_right_pending_list data={teamdata['pending_list']} />, document.getElementById("div_right_pending_list"))
}