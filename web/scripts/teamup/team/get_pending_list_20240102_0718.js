async function get_pending_list() {
  function Div_right_pending_list(props) {
	   const right_pending_List = Object.keys(props.data).map((btn_data) =>  
			<Div_member_card account={props.data[btn_data].account}
									 nickname={props.data[btn_data].nickname}
									 url_image_profile={props.data[btn_data].url_image_profile}
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

  function Div_right_pending_empty() {
	   return (
			<p class="flex flex-row justify-center items-center w-full text-[#A3A3A3] font-[600] text-[16px]">
				 받은 요청이 없습니다.
			</p>
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

  document.getElementById("tab_right_pending_list").innerHTML = "받은 요청(" + Object.keys(teamdata['pending_list']).length + ")"
  if (Object.keys(teamdata['pending_list']).length > 0) {
	   ReactDOM.render(<Div_right_pending_list data={teamdata['pending_list']} />, document.getElementById("div_right_pending_list"))
  } else {
	   ReactDOM.render(<Div_right_pending_empty />, document.getElementById("div_right_pending_list"))
  }

}