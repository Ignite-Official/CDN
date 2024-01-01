function Div_right() {
  let class_tab_enabled = "flex flex-row justify-center items-center w-[105px] h-[45px] text-[#AE9DE3] font-[600] text-[16px] border-b border-4-[#AE9DE3] cursor-pointer"
  let class_tab_disabled = "flex flex-row justify-center items-center w-[105px] h-[45px] text-[#A3A3A3] font-[600] text-[16px] cursor-pointer"


  function Div_member_counter_card_skeleton() {
	   return (
			<div class="flex flex-col justify-between items-start w-full h-[95px] min-h-[95px] max-h-[95px] bg-[#262626] p-[16px] rounded-xl"></div>
	   )
  }

  function Div_member_card_skeleton() {
	   return (
			<div class="flex flex-col justify-between items-start w-full h-[200px] bg-[#1D1D1D] space-y-[12px] p-[16px] rounded-lg">
			</div>
	   )
  }

  function Div_right_due_date(props) {
	   return (
			<div class="flex flex-col w-full justify-center items-start space-y-[2px]">
				 {
					  teamdata.teaminfo.due_date_remain == "모집 종료"
					  ?   <p class="text-white font-[600] text-[14px]">
								팀원 모집이 종료되었습니다.
						   </p>
					  :   <p class="text-white font-[600] text-[14px]">
								팀업 마감일까지 {teamdata.teaminfo.due_date_remain.substring(2)}일 남았습니다.
						   </p>
				 }
				 
				 {
					  teamdata.teaminfo.due_date_remain == "모집 종료"
					  ?   ""
					  :   <p class="text-[#A3A3A3] font-[400] text-[12px]">
								팀업 모집 마감일은 {teamdata.teaminfo.due_date.split("-")[0]}년 {teamdata.teaminfo.due_date.split("-")[1]}월 {teamdata.teaminfo.due_date.split("-")[2]}일 입니다.
						   </p>
				 }
			</div>
	   )
  }

  function click_tab(id) {
	   if (id == "right_member_list") {
			document.getElementById("tab_right_member_list").className = class_tab_enabled
			document.getElementById("tab_right_pending_list").className = class_tab_disabled
			document.getElementById("tab_right_sending_list").className = class_tab_disabled
			
			document.getElementById("div_right_member_list").className = "w-full"
			document.getElementById("div_right_pending_list").className = "hidden"
			document.getElementById("div_right_sending_list").className = "hidden"

	   } else if (id == "right_pending_list") {
			document.getElementById("tab_right_member_list").className = class_tab_disabled
			document.getElementById("tab_right_pending_list").className = class_tab_enabled
			document.getElementById("tab_right_sending_list").className = class_tab_disabled

			document.getElementById("div_right_member_list").className = "hidden"
			document.getElementById("div_right_pending_list").className = "w-full"
			document.getElementById("div_right_sending_list").className = "hidden"

	   } else if (id == "right_sending_list") {
			document.getElementById("tab_right_member_list").className = class_tab_disabled
			document.getElementById("tab_right_pending_list").className = class_tab_disabled
			document.getElementById("tab_right_sending_list").className = class_tab_enabled

			document.getElementById("div_right_member_list").className = "hidden"
			document.getElementById("div_right_pending_list").className = "hidden"
			document.getElementById("div_right_sending_list").className = "w-full"
			
	   }
  }

  return (
	   <div class="flex flex-col justify-center items-center w-full space-y-[24px] rounded-xl px-[48px] md:px-[0px]">

			<Div_title text={"모집현황"} more={false} />
			<div class="flex flex-col w-full space-y-[24px]">
				 <div id="div_right_due_date" class="w-full">
					  <Div_right_due_date />
				 </div>

				 <div id="div_right_role_list" class="w-full">
					  <div class="grid grid-cols-4 w-full justify-center items-center gap-[12px] md:grid-cols-2">
						   <Div_member_counter_card role={"모집 인원 (방장 제외)"}
														 count_joined={teamdata.teaminfo.cnt_member}
														 count_all={teamdata.teaminfo.cnt_member_limit} />
					  </div>
				 </div>
			</div>

			<Div_title text={"멤버현황"} more={false} />

			<div class="flex flex-col justify-center items-center w-full">
				 <div class="flex flex-row justify-start items-center w-full">
					  <p id="tab_right_member_list" class={class_tab_enabled} onClick={() => click_tab('right_member_list')}>
						   현재 멤버
					  </p>
					  <p id="tab_right_pending_list" class={class_tab_disabled} onClick={() => click_tab('right_pending_list')}>
						   받은 요청
					  </p>
					  <p id="tab_right_sending_list" class={class_tab_disabled} onClick={() => click_tab('right_sending_list')}>
						   보낸 요청
					  </p>
				 </div>
			</div>

			<div id="div_right_member_list" class="w-full">
				 <div class="grid grid-cols-3 justify-center items-center w-full gap-[24px] md:grid-cols-1 animate-pulse">
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
				 </div>
			</div>

			<div id="div_right_pending_list" class="hidden">
				 <div class="grid grid-cols-3 justify-center items-center w-full gap-[24px] md:grid-cols-1 animate-pulse">
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
				 </div>
			</div>

			<div id="div_right_sending_list" class="hidden">
				 <div class="grid grid-cols-3 justify-center items-center w-full gap-[24px] md:grid-cols-1 animate-pulse">
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
					  <Div_member_card_skeleton />
				 </div>
			</div>
	   </div>
  )
}