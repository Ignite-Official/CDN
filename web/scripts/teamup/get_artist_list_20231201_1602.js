async function get_artist_list() {
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
				<div class="grid grid-cols-6 w-full justify-center items-center gap-4 lg:grid-cols-4 md:grid-cols-2">
					{card_List}
				</div>
		)
	}

	const data = await fetch("/teamup/ajax_get_artist_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_counter title="아티스트" counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_artist_counter"))
	ReactDOM.render(<Div_artist_sub data={data} />, document.getElementById("div_artist_sub"))
}