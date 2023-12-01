function Div_team_list(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<div class="bg-[#292929] w-full rounded-xl h-[124px] mb-[2px] cursor-pointer">
			<a class="flex flex-col ml-[16px] mr-[16px]" href={props.data[btn_data].url_team}>

				<div class="flex flex-row w-[328px]">
					<div class="flex flex-col mt-[12px] w-[267px]">
						<div class="flex flex-row justify-between items-center">
							<p class="flex flex-row text-white text-[14px] font-[700] w-[210px] max-w-[210px] truncate ...">
								{
									props.data[btn_data].tag == "creator"
									? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_maker.svg" class="w-[22px] h-[22px] mr-[4px]"/>
									: ""
								}
								{props.data[btn_data].name}
							</p>

						</div>

						<div class="flex flex-row items-center mt-[12px] space-x-[6px]" id={props.data[btn_data].uuid}>
							<button type="button" 
									class="w-fit min-w-[24px] max-w-[84px] px-[8px] h-[20px] flex justify-center items-center
											border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 
											hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
								<p class="text-[11px] font-[600] text-[#3B3B3B] truncate ...">
									{props.data[btn_data].role_name}
								</p>
							</button>

							<svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="1" cy="1" r="1" fill="#727272"/>
							</svg>

							{
								props.data[btn_data].region_count == 18
								? <span class="text-[#8B8B8B] font-[500] text-[11px]">전국</span>
								: ""
							}
							{
								props.data[btn_data].region_count == 1
								? <span class="text-[#8B8B8B] font-[500] text-[11px]">{props.data[btn_data].region}</span>
								: ""
							}
							{
								props.data[btn_data].region_count > 1 && props.data[btn_data].region_count < 18
								? <span class="text-[#8B8B8B] font-[500] text-[11px]">
									{props.data[btn_data].region} 등 {props.data[btn_data].region_count} 지역
								  </span>
								: ""
							}

							<svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="1" cy="1" r="1" fill="#727272"/>
							</svg>

							<span class="text-[#8B8B8B] font-[500] text-[11px]">{props.data[btn_data].due_date_remain}</span>

							<svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="1" cy="1" r="1" fill="#727272"/>
							</svg>

							<span class="text-[#8B8B8B] font-[500] text-[11px]">조회 {props.data[btn_data].total_cnt}</span>
						</div>
					</div>

					<div class="flex flex-row justify-end items-center mt-[12px] w-[61px]">
						{
							props.data[btn_data].url_image_profile_creator != "Unknown"
							? <div class={"flex flex-row justify-center items-center "
										+ "bg-[url('/" + props.data[btn_data].url_image_profile_creator + "')] bg-cover " 
										+ "w-[56px] h-[56px] rounded-full border-2 border-[#A4A4A4]"}>
							</div>
							: <div class="flex flex-row justify-center items-center rounded-full
										bg-[#6337C1] w-[56px] h-[56px] border-[2px] border-[#A4A4A4] border-solid">
								<span class="text-white text-[20px] font-[700]">
									{props.data[btn_data].name.charAt(0)}
								</span>
							</div>
						}
					</div>
				</div>
				

				<div class="flex justify-start items-center w-[328px] h-[28px] mt-[16px] rounded-lg">
					<span class="flex justify-start items-center
								 w-[267px] h-[28px] pl-[8px] pr-[8px] bg-[#191919] text-[#D4D4D4] font-[500] text-[11px] truncate ...">
						{props.data[btn_data].txt_intro}
					</span>
					{
						props.data[btn_data].tag == "creator"
						? <span class="flex flex-row justify-center items-center text-[#40C057] text-[11px] font-[500] w-[50px] ml-[12px]">
							팀 리더
							<svg class="ml-[4px]" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="3" cy="3" r="3" fill="#40C057"/>
							</svg>
						  </span>
						: ""
					}
					{
						props.data[btn_data].tag == "member"
						? <span class="flex flex-row justify-center items-center text-[#40C057] text-[11px] font-[500] w-[50px] ml-[12px]">
							참여중
							<svg class="ml-[4px]" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="3" cy="3" r="3" fill="#40C057"/>
							</svg>
						  </span>
						: ""
					}
					{
						props.data[btn_data].tag == "join"
						? <span class="flex flex-row justify-center items-center text-[#A4A4A4] text-[11px] font-[500] w-[50px] ml-[12px]">
							요청중
							<svg class="ml-[4px]" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="3" cy="3" r="3" fill="#A4A4A4"/>
							</svg>
						  </span>
						: ""
					}
					
				</div>

			</a>

		</div>
	)

	return (
		<div>
			{btnList}
		</div>
	)
}