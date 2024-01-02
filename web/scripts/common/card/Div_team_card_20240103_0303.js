function Div_team_card(props) {
	return (
		<div class={"flex flex-col justify-start items-between rounded-lg space-y-[12px] p-[16px] "
					+ "bg-[#1D1D1D] "
					+ "w-full min-w-[300px] max-w-[300px] h-[140px] min-h-[140px] max-h-[140px] mx-auto " 
					+ "hover:border hover:border-2 hover:border-gray-100 "
					+ "cursor-pointer"}
			onClick={() => location.href=props.url_team}>
			<div class="flex flex-row justify-start items-center space-x-[12px]">
				{
					props.url_image_profile_creator == "Unknown"
					?   <div class="flex flex-row justify-center items-center rounded-full
								bg-[#6337C1] w-[48px] h-[48px] border-[2px] border-[#A4A4A4] border-solid">
							<span class="text-white text-[18px] font-[700]">
								{props.name.charAt(0)}
							</span>
						</div>
					: <img class="rounded-full w-[48px] h-[48px] border-[2px] border-[#A4A4A4] border-solid"
						src={"/" + props.url_image_profile_creator}
						alt={props.nickname_creator} 
						onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"} />
				}

				<div class="flex flex-col w-3/4">
					<p class="text-white font-[600] text-[16px] truncate ...">
						{props.name}
					</p>

					{
						props.teamup_available == "YES"
						?   <p class="flex flex-row justify-start items-center text-[#40C057] font-[400] text-[12px] space-x-[4px]">
								팀업 가능
								<svg class="ml-[4px]" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="3" cy="3.72266" r="3" fill="#40C057"/>
								</svg>                                                
							</p>
						:   <p class="flex flex-row justify-start items-center text-[#AE9DE3] font-[400] text-[12px] space-x-[4px]">
								팀업 불가
								<svg class="ml-[4px]" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="3" cy="3.72266" r="3" fill="#AE9DE3"/>
								</svg>                                                
							</p>
					}                                
				</div>
			</div>

			<p class="flex flex-row justify-start items-center w-full text-[#A3A3A3] font-[400] text-[12px] space-x-[4px]">
				{props.due_date_remain}

				<svg class="px-[4px]" width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="1" cy="1.22266" r="1" fill="#A3A3A3"/>
				</svg>
					
				조회 {props.total_cnt}
			</p>

			<div class="flex flex-row justify-start items-center space-x-[4px]">
				{
					props.role == "requested"
					?   <p class="flex flex-row justify-center items-center bg-yellow-700 text-white font-[400] text-[12px] w-fit h-[22px] px-[8px] rounded-md">
							영입 요청
						</p>
					:   ""
				}
				{
					props.role == "creator"
					?   <p class="flex flex-row justify-center items-center bg-red-700 text-white font-[400] text-[12px] w-fit h-[22px] px-[8px] rounded-md">
							팀 리더
						</p>
					:   ""
				}
				{
					props.role == "member"
					?   <p class="flex flex-row justify-center items-center bg-blue-700 text-white font-[400] text-[12px] w-fit h-[22px] px-[8px] rounded-md">
							팀 멤버
						</p>
					:   ""
				}


				<p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-fit h-[22px] px-[8px] rounded-md">
					{props.role_name}
				</p>
			</div>

		</div>
	)
}