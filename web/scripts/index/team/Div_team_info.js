function Div_team_info(props) {
	const creator_act_list = Object.keys(props.data.user_creator_act_list).map((btn_data) =>
		<button type="button" 
				class="w-fit h-[20px] mt-[8px] px-[6px]
					   flex justify-center items-center text-[11px] font-[600] text-[#3B3B3B]
					   border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
			{props.data.user_creator_act_list[btn_data].name}
		</button>
	)

	const genre_list = Object.keys(props.data.genre_list).map((btn_data) =>
		<button type="button" 
				class="w-fit h-[20px] mt-[8px] px-[6px]
					   flex justify-center items-center text-[11px] font-[600] text-[#3B3B3B]
					   border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
			{props.data.genre_list[btn_data].name}
		</button>
	)

	const region_list = Object.keys(props.data.region_list).map((btn_data) =>
		<span class="text-[#BCBCBC] font-[500] text-[11px]">
			{props.data.region_list[btn_data].name}
		</span>
	)

	const role_list = Object.keys(props.data.role_list).map((btn_data) =>
		<div class="flex flex-row justify-start items-start">
			<span class="flex justify-center items-center
						text-white font-[500] text-[14px] w-fit px-[16px] h-[40px] border-white border-2 bg-[#292929] rounded-lg">
				{props.data.role_list[btn_data].name}
			</span>
			<span class="flex justify-center items-center ml-[16px]
						text-white font-[500] text-[14px] w-fit px-[16px] h-[40px] bg-[#292929] rounded-lg">
				{props.data.role_list[btn_data].cnt}
			</span>
		</div>
	)


	function Div_header(props){
		return(
			<span class="flex justify-start items-center w-[328px] text-[14px] font-[700] text-white">
				<img src={props.img_url} class="w-[14px] h-[15px] mr-[6px]"/>{props.text}
			</span>
		)
	}


	return (
		<div class="flex flex-col justify-center items-center h-fit pb-[96px]">
			<div class="flex flex-col justify-center items-center w-full pb-[24px] border-b-4 border-[#292929]">
				<div class="flex flex-row justify-between items-center w-[328px]">
					<span class="text-[18px] font-[700] text-white w-[288px] truncate ...">
						{props.data.info.name}
					</span>
	
					<div class="flex flex-row items-center cursor-pointer" onClick={() => copy_to_clipboard()}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/index/me/favoriate_link.svg" class="w-[16px] h-[22px]"/>
					</div>
				</div>
	
				<div class="flex flex-row justify-start items-center w-[328px] h-[28px] mt-[16px]">
					{ props.data.info.due_date_remain_checker == "YES"
					? <span class="flex justify-between items-center bg-[#292929] w-[158px] h-[28px] text-[11px] font-[500] text-[#D4D4D4] px-[8px] rounded-lg">
						팀업가능
	
						<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3" cy="3" r="3" fill="#40C057"/>
						</svg>
					  </span>
					: <span class="flex justify-between items-center bg-[#292929] w-[158px] h-[28px] text-[11px] font-[500] text-[#D4D4D4] px-[8px] rounded-lg">
						팀업불가
	
						<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3" cy="3" r="3" fill="#A4A4A4"/>
						</svg>
					  </span>
					}
				</div>
	
				<div class="flex flex-col justify-center items-center w-[328px] h-[70px] mt-[16px] p-[14px]
							bg-transparent border-2 border-[#8B8B8B] rounded-lg">
					{
						props.data.info.due_date_remain < 0 
						? <p class="flex items-center text-white font-[700] text-[14px] w-full">
							 <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/clock.svg" class="w-[14px] h-[15px] mr-[6px]"/>
							 팀업 모집이 <span class="text-[#FA5252] mx-[4px]">마감</span>되었습니다.
						  </p>
						: <p class="flex items-center text-white font-[700] text-[14px] w-full">
							 <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/clock.svg" class="w-[14px] h-[15px] mr-[6px]"/>
							 팀업 마감일까지 <span class="text-[#FA5252] mx-[4px]">{props.data.info.due_date_remain}일</span> 남았습니다.
						  </p>
						
					}
					
					<p class="flex items-center text-[#BCBCBC] font-[500] text-[11px] mt-[4px] w-full">
						팀업 모집 마감일은 {props.data.info.due_date} 입니다.
					</p>
				</div>
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/guitar.svg" text="활동 음악 장르에요." />
	
				<div class="flex flex-wrap justify-center items-center mt-[6px] space-x-[6px]">
					{genre_list}
				</div>
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/red_bell.svg" text="주로 여기서 활동해요." />
				
				<div class="flex flex-wrap justify-center items-center mt-[6px] space-x-[6px] mx-auto">
					{props.data.info.region_online == "ONLINE"
					? <span class="text-[#BCBCBC] font-[500] text-[11px]">
						온라인
					  </span>
					: ""
					}
					{region_list}
				</div>
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				{Object.keys(props.data.gender_list).length == 2 
				 ? <Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/smile.svg" 
							   text="남녀 모두 참여할 수 있는 팀이에요." />
				 : <Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/smile.svg" 
							   text={props.data.gender_list[0].name + "만 참여할 수 있는 팀이에요."} />
				}
				
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/speech_bubble2.svg" text="자세히 소개해요." />
	
				<div class="flex flex-row justify-start items-center mt-[6px] space-x-[6px]">
					<span class="text-[#BCBCBC] font-[500] text-[11px]">
						{props.data.info.txt_intro}
					</span>
				</div>
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/leader2.svg" text="리더를 소개해요." />
	
				<div class="flex flex-row justify-start items-center space-x-[6px] mt-[24px]">
					{props.data.info.url_image_profile_creator == "Unknown"
					? <a class="flex flex-row justify-center items-center rounded-full
								bg-[#6337C1] w-[56px] h-[56px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid cursor-pointer"
						 href={props.data.info.url_creater_portfolio}>
							<span class="text-white text-[18px] font-[700]">
								{props.data.info.nickname_creator.charAt(0)}
							</span>
						</a>
					: <img class="rounded-full w-[56px] h-[56px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid cursor-pointer"
						   src={props.data.info.url_image_profile_creator}
						   alt={props.data.info.nickname_creator} 
						   onClick={() => location.href=props.data.info.url_creater_portfolio}/>
					}

					<div class="flex flex-col justify-center items-center text-center pl-[24px]">
						<span class="text-[14px] font-[700] text-white w-full">
							{props.data.info.nickname_creator}
						</span>
						<div class="flex flex-wrap justify-center items-center mt-[6px] space-x-[6px]">
							{creator_act_list}
						</div>
					</div>
				</div>
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/member2.svg" text={props.data.info.cnt_member + "명이 참여중이에요."} />
			</div>
	
			<div class="px-[16px] py-[26px] border-b-4 border-[#292929] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/requirements2.svg" text={props.data.info.cnt_member_requirement + "명이 참여를 요청했어요."} />
			</div>
	
			<div class="px-[16px] py-[26px] w-full h-fit">
				<Div_header img_url="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/eye2.svg" text="새로 합류할 팀원을 찾고 있어요." />

				<div class="flex flex-col justify-start items-start mt-[24px] space-y-[16px]">
					{role_list}
				</div>
			</div>
	
		</div>
	)
}