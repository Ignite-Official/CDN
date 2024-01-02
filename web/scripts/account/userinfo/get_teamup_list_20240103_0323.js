// 소속 팀업을 불러온다.
async function get_teamup_list() {
	function Div_team_sub(props) {
		const card_List = Object.keys(props.data).map((btn_data) =>  
			<Div_team_card name={props.data[btn_data].name}
						   url_team={props.data[btn_data].url_team}
						   due_date_remain={props.data[btn_data].due_date_remain}
						   total_cnt={props.data[btn_data].total_cnt}
                           role={props.data[btn_data].role}
						   role_name={props.data[btn_data].role_name}
						   nickname_creator={props.data[btn_data].nickname_creator}
						   url_image_profile_creator={props.data[btn_data].url_image_profile_creator}
						   teamup_available={props.data[btn_data].teamup_available} />

		)

		return (
			<div class="grid grid-cols-3 w-full justify-center items-center gap-4 md:grid-cols-1">
				{card_List}
			</div>
		)
	}
	
	function Div_team_empty() {
		return (
			<p class="flex flex-row justify-center items-center w-full text-[#A3A3A3] font-[600] text-[16px]">
				가입한 팀이 없습니다.
			</p>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	const data = await fetch("/account/ajax_get_team_list/", {
                        method: "post", 
                        headers: { "X-CSRFToken": getCookie("csrftoken"), },
                        body: request_data
                        })
                        .then(res=> { return res.json(); })
                        .then(res=> { return res; });


	document.getElementById("tab_teamup_list").innerHTML = "소속 팀(" + Object.keys(data).length + ")"
	if (Object.keys(data).length > 0) {
		ReactDOM.render(<Div_team_sub data={data} />, document.getElementById("div_teamup_list"))
	} else {
		ReactDOM.render(<Div_team_empty data={data} />, document.getElementById("div_teamup_list"))
	}
}