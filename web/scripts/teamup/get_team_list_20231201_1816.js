async function get_team_list() {
	function Div_team_sub(props) {
		const card_List = Object.keys(props.data).map((btn_data) =>  
			<Div_team_card name={props.data[btn_data].name}
						   url_team={props.data[btn_data].url_team}
						   due_date_remain={props.data[btn_data].due_date_remain}
						   total_cnt={props.data[btn_data].total_cnt}
						   role_name={props.data[btn_data].role_name}
						   nickname_creator={props.data[btn_data].nickname_creator}
						   url_image_profile_creator={props.data[btn_data].url_image_profile_creator}
						   teamup_available={props.data[btn_data].teamup_available} />

		)

		return (
			<div class="grid grid-cols-4 w-full justify-center items-center gap-4 lg:grid-cols-2 md:grid-cols-1">
				{card_List}
			</div>
		)
	}

	const data = await fetch("/teamup/ajax_get_team_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_counter title={"팀"}
								 counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} 
								 button={"true"} />, document.getElementById("div_team_counter"))
	ReactDOM.render(<Div_team_sub data={data} />, document.getElementById("div_team_sub"))
}