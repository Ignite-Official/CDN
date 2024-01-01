function Div_modal_request_team() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"영입 요청하기"} />

				{
					gv_username == ""
					?   <div class="flex flex-col justify-center items-centerh-[150px] min-h-[150px] max-h-[150px] p-[20px] space-y-[10px] overflow-auto" id="div_modal_team_list">
							<p class="text-white w-full text-center">
								로그인이 필요합니다.
							</p>
						</div>
					:   ""
				}
				{
					gv_username == userdata.userinfo.uuid && gv_username != ""
					?   <div class="flex flex-col justify-center items-centerh-[150px] min-h-[150px] max-h-[150px] p-[20px] space-y-[10px] overflow-auto" id="div_modal_team_list">
							<p class="text-white w-full text-center">
								자기 자신에게 영입 요청을 할 수 없습니다.
							</p>
						</div>
					:   ""
				}
				{
					gv_username != userdata.userinfo.uuid && gv_username != ""
					?   <div class="flex flex-col h-[300px] min-h-[300px] max-h-[300px] p-[20px] space-y-[10px] overflow-auto" id="div_modal_team_list"></div>
					:   ""
				}
				

				<div class={class_modal_div_close}>
					<button class={class_modal_btn_close}
							onClick={() => document.getElementById("btn_modal_request_team_close").click()}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}