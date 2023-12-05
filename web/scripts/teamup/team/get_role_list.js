async function get_role_list() {
	function Div_left_role_list(props) {
		const left_role_List = Object.keys(props.data).map((btn_data) =>  
			<Div_btn_act_22 name={props.data[btn_data].name}/>
		)

		return (
			<div class="flex flex-col w-full space-y-[12px]">
				<Div_left_sub_title title="이런 역할을 모집해요." />

				<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
					<div></div>
					{left_role_List}
				</div>
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let role_list = await fetch("/teamup/ajax_get_team_role_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	teamdata['role_list'] = role_list['role_list']
	
	ReactDOM.render(<Div_left_role_list data={teamdata['role_list']} />, document.getElementById("div_left_role_list"))
}