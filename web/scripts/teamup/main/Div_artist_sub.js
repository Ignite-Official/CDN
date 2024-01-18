function Div_artist_sub(props) {
	const card_List = Object.keys(props.data).map((btn_data) =>                    
		<Div_artist_card nickname={props.data[btn_data].nickname}
						 gender={props.data[btn_data].gender}
						 url_image_profile={props.data[btn_data].url_image_profile}
						 url_image_bg={props.data[btn_data].url_image_bg}
						 url_mypage={props.data[btn_data].url_mypage}
						 use_youtube={props.data[btn_data].use_youtube}
						 use_soundcloud={props.data[btn_data].use_soundcloud}
						 teamup_available={props.data[btn_data].teamup_available} />
	)

	return (
		<div class="space-y-4">
			<div class="grid grid-cols-6 w-full justify-center items-center gap-4 lg:grid-cols-4 md:grid-cols-2" id={props.id}>
				{card_List}
			</div>
			<div id={"div_artist_list_" + (page_artist + 1).toString()}></div>
		</div>
	)
}