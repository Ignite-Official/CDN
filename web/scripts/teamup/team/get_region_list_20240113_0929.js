async function get_region_list() {
  function Div_left_region_list(props) {
		const left_region_List = Object.keys(props.data).map((btn_data) =>  
			   <Div_btn_act_22 name={props.data[btn_data].name}/>
		)

		return (
			   <div class="flex flex-col w-full space-y-[12px]">
					 <Div_left_sub_title title="주로 여기서 활동해요." />

					 <div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
						   <div></div>
						   {
								 teamdata.teaminfo.region_online == "ONLINE"
								 ?    <Div_btn_act_22 name={"온라인 가능"}/>
								 :    <Div_btn_act_22 name={"온라인 불가"}/>
						   }

						   {
								Object.keys(props.data).length == 0
								?    <Div_btn_act_22 name={"지역 무관"}/>
								:    left_region_List
						   }
						   
					 </div>
			   </div>
		)
  }

  // 데이터 가져오기
  const request_data = new FormData();
  request_data.append('href', href);

  let region_list = await fetch("/teamup/ajax_get_team_region_list/", {
													method: "post", 
													headers: { "X-CSRFToken": getCookie("csrftoken"), },
													body: request_data
													})
													.then(res=> { return res.json(); })
													.then(res=> { return res; });
  teamdata['region_list'] = region_list['region_list']

  ReactDOM.render(<Div_left_region_list data={teamdata['region_list']} />, document.getElementById("div_left_region_list"))
}