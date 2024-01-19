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
		<div class="space-y-4">
			<div class="grid grid-cols-4 w-full justify-center items-center gap-4 lg:grid-cols-2 md:grid-cols-1">
				{card_List}
			</div>
			<div id={"div_team_list_" + (page_team + 1).toString()}></div>
		</div>
	)
}