function Div_left() {
	return (
		<div class="flex flex-col justify-center items-center bg-[#262626] w-full p-[24px] space-y-[44px] rounded-xl md:px-[16px]">
			<div class="flex flex-col justify-center items-center w-full space-y-[30px]">
				<div class="flex flex-row justify-center items-center w-full space-x-[8px]">
					{
						teamdata.teaminfo.my_type == "creator"
						?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_crown.svg" class="w-6 h-6" />
						:   ""
					}
					{
						teamdata.teaminfo.my_type == "member"
						?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_joined.svg" class="w-6 h-6" />
						:   ""
					}
					{
						teamdata.teaminfo.my_type == "pending"
						?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_waiting.svg" class="w-6 h-6" />
						:   ""
					}
				</div>

				<div class="flex flex-col justify-center items-center w-full space-y-[19px]">
					<div class="flex justify-center items-center w-[100px] h-[100px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
						<span class="text-white font-[700] text-[36px]">
							{teamdata.teaminfo.name.charAt(0)}
						</span>
					</div>

					<div class="flex flex-col justify-center items-center space-y-[4px] w-full">
						
						<p class="text-white font-[600] text-[20px]">
							{teamdata.teaminfo.name}
						</p>
						
						{
							teamdata.teaminfo.teamup_available == "YES"
							?   <p class="text-[#40C057] font-[500] text-[14px]">
									팀업 가능
								</p>
							:   <p class="text-[#8C6BF7] font-[500] text-[14px]">
									팀업 불가
								</p>
						}
					</div>
				</div>

			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[12px]" id="div_left_btn_join">
				{
					teamdata.teaminfo.my_type == "creator" || teamdata.teaminfo.my_type == "member"
					?   <p class="flex flex-row justify-center items-center bg-[#340BB8] w-full h-[44px] rounded-xl
								  text-white font-[600] text-[14px] cursor-pointer
								  hover:bg-[#26009F] hover:border hover:border-white"
						   onClick = {() => location.href=href + "/chat/"}>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_chat.svg" class="w-[20px] h-[20px] mr-[10px]" />    
							대화하기
						</p>
					:   ""
				}
				{
					teamdata.teaminfo.my_type == "creator"
					?   <p class="flex flex-row justify-center items-center bg-gray-900 w-full h-[44px] rounded-xl
								  text-white font-[600] text-[14px] cursor-pointer
								  hover:bg-gray-800 hover:border hover:border-white"
						   onClick = {() => location.href=href + "/edit/"}>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/pen.svg" class="w-4 h-4 mr-[10px]" />
							팀 프로필 수정
						</p>
					:   ""
				}
				
				
				{
					teamdata.teaminfo.my_type == "guest"
					?   <p class="flex flex-row justify-center items-center bg-yellow-900 w-full h-[44px] rounded-xl
								  text-white font-[600] text-[14px] cursor-pointer
								  hover:bg-yellow-800 hover:border hover:border-white"
						   onClick = {() => document.getElementById("btn_modal_join").click()}>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_join.svg" class="w-[20px] h-[20px] mr-[10px]" />    
							가입 신청
						</p>
					:   ""
				}

				{
					teamdata.teaminfo.my_type == "pending"
					?   <p class="flex flex-row justify-center items-center bg-yellow-900 w-full h-[44px] rounded-xl
								  text-white font-[600] text-[14px] cursor-pointer
								  hover:bg-yellow-800 hover:border hover:border-white"
						   onClick = {() => document.getElementById("btn_modal_join_cancel").click()}>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_join_cancel_2.svg" class="w-[20px] h-[20px] mr-[10px]" />    
							가입 신청 취소
						</p>
					:   ""
				}
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[28px]">
				<div class="hidden">
					<Div_left_sub_title title={"팀업가능 여부"} />

					<label class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" class="sr-only peer" checked />
						<div class="w-11 h-6 bg-gray-200 rounded-full 
									peer peer-focus:ring-4 peer-focus:ring-blue-300 
									peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
									after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
									peer-checked:bg-gray-600"></div>
						<span class="ms-3 text-sm font-medium text-green-600">
							가능
						</span>
					</label>
					
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_left_sub_title title="모집 기간" />
	
					<div class="flex flex-row justify-start items-center w-full space-x-[4px]">
						<p class="w-fit text-[#D4D4D4] font-[400] text-[12px] h-[14px]">
							{teamdata.teaminfo.created_at} ~ {teamdata.teaminfo.due_date}
						</p>
					</div>
				</div>

				<div id="div_left_genre_list" class="w-full"></div>
				<div id="div_left_role_list" class="w-full"></div>

				<div class="flex flex-col w-full space-y-[12px]">
					{
						Object.keys(teamdata.gender).length == 0 || Object.keys(teamdata.gender).length == 2
						?   <Div_left_sub_title title={"남성과 여성을 모두 모집해요."} />
						:   <Div_left_sub_title title={teamdata.gender[0].gender + "만 모집해요."} />
					}
					
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_left_sub_title title="팀을 자세히 소개합니다." />

					<p class="w-full text-[#D4D4D4] font-[400] text-[12px]">
						{teamdata.teaminfo.txt_intro}
					</p>
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					{
						teamdata.teaminfo.my_type == "creator"
						?   <p class="flex flex-row justify-center items-center bg-red-900 w-full h-[44px] rounded-xl
									  text-white font-[600] text-[14px] cursor-pointer
									  hover:bg-red-800 hover:border hover:border-white"
							   onClick = {() => document.getElementById("btn_modal_delete").click()}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_exit_white.svg" class="w-[20px] h-[20px] mr-[10px]" />    
								팀 삭제
							</p>
						:   ""
					}
					{
						teamdata.teaminfo.my_type == "member"
						?   <p class="flex flex-row justify-center items-center bg-red-900 w-full h-[44px] rounded-xl
									  text-white font-[600] text-[14px] cursor-pointer
									  hover:bg-red-800 hover:border hover:border-white"
							   onClick = {() => document.getElementById("btn_modal_exit").click()}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_exit.svg" class="w-[20px] h-[20px] mr-[10px]" />    
								팀 나가기
							</p>
						:   ""
					}
					
					
				</div>
			</div>
		</div>
	)
}