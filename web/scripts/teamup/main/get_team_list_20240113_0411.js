async function get_team_list() {
	function Div_team_sub(props) {
		const card_List = Object.keys(props.data).map((btn_data) =>  
		<Div_team_card name={props.data[btn_data].name}
					   url_team={props.data[btn_data].url_team}
					   role={props.data[btn_data].role}
					   due_date_remain={props.data[btn_data].due_date_remain}
					   total_cnt={props.data[btn_data].total_cnt}
					   nickname_creator={props.data[btn_data].nickname_creator}
					   url_image_profile_creator={props.data[btn_data].url_image_profile_creator}
					   teamup_available={props.data[btn_data].teamup_available}
					   genre_name={props.data[btn_data].genre_name}
					   genre_count={props.data[btn_data].genre_count}
					   role_name={props.data[btn_data].role_name}
					   role_count={props.data[btn_data].role_count}
					   region_online={props.data[btn_data].region_online}
					   region_name={props.data[btn_data].region_name}
					   region_count={props.data[btn_data].region_count} />
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

	if (gv_username == "") {
		ReactDOM.render(<Div_counter title={"팀"}
									 counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_team_counter"))
	} else {
		ReactDOM.render(<Div_counter title={"팀"}
									 counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} 
									 button={"true"} />, document.getElementById("div_team_counter"))
	}

	//ReactDOM.render(<Div_team_filter />, document.getElementById("div_team_filter"))
	document.getElementById("div_team_filter").className = "hidden"
	ReactDOM.render(<Div_team_sub data={data} />, document.getElementById("div_team_sub"))
}