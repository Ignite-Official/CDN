function Div_left() {
	function Div_sub_title(props) {
		return (
			<p class="text-[#E5E5E5] font-[600] text-[14px] w-full text-start">
				{props.title}
			</p>
		)
	}

	function Div_counter(props) {
		return (
			<div class="flex flex-col w-full justtiy-center items-center">
				<p class="text-white font-[600] text-[16px]">
					{props.count}
				</p>

				<p class="text-[#737373] font-[500] text-[14px]">
					{props.title}
				</p>
			</div>                
		)
	}    
	

	/*
	const instrumentList_active = Object.keys(userdata.instrument).map(function(i) {
		if (userdata.instrument[i].active == 1) {   return userdata.instrument[i].name  }
	}).filter(data => data !== undefined)

	const instrumentList = Object.keys(instrumentList_active).map((btn_data) =>
		<Div_btn_act name={instrumentList_active[btn_data]} />
	)


	function Div_list(props) {
		return (
			<div class="flex flex-col w-full space-y-[12px]">
				<Div_sub_title title={props.title} />

				<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
					<div></div>
					{props.list}
				</div>
			</div>
		)
	}
	*/

	return (
		<div class="flex flex-col justify-center items-center bg-[#262626] w-full p-[24px] space-y-[44px] rounded-xl md:px-[16px]">
			<div class="flex flex-col justify-center items-center w-full space-y-[30px]">
				<div class="flex flex-row justify-center items-center w-full space-x-[8px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_crown.svg" class="w-6 h-6" />
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_joined.svg" class="w-6 h-6" />
				</div>

				<div class="flex flex-col justify-center items-center w-full space-y-[19px]">
					<div class="flex justify-center items-center w-[100px] h-[100px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
						<span class="text-white font-[700] text-[36px]">
							팀
						</span>
					</div>

					<div class="flex flex-col justify-center items-center space-y-[4px] w-full">
						<p class="text-[#D1D5DB] font-[400] text-[12px]">
							장르
						</p>
						
						<p class="text-white font-[600] text-[20px]">
							팀 이름
						</p>
	
						<p class="text-[#40C057] font-[500] text-[14px]">
							팀업 가능
						</p>
					</div>
				</div>

				
				<p class="text-[#D1D5DB] font-[400] text-[12px]">
					한 줄 소개
				</p>

			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
				<p class="flex flex-row justify-center items-center bg-[#340BB8] w-full h-[44px] rounded-xl
						  text-white font-[600] text-[14px] cursor-pointer
						  hover:bg-[#26009F] hover:border hover:border-white">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_chat.svg" class="w-[20px] h-[20px] mr-[10px]" />    
					대화하기
				</p>
				<p class="flex flex-row justify-center items-center bg-translate w-full h-[44px] rounded-xl
						  text-white font-[600] text-[14px] cursor-pointer">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/pen.svg" class="w-4 h-4 mr-[10px]" />
					팀 프로필 수정
				</p>
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[28px]">
				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title={"팀업가능 여부"} />

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
					<Div_sub_title title="모집 기간" />
	
					<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
						<div></div>
					</div>
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title="주로 여기서 활동해요." />
	
					<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
						<div></div>
					</div>
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title="활동 음악 장르에요." />
	
					<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
						<div></div>
					</div>
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title="남성만 모집해요." />
				</div>

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title="팀을 자세히 소개합니다." />

					<p class="w-full text-[#D4D4D4] font-[400] text-[12px]">
						자세한 소개
						자세한 소개
						자세한 소개
						자세한 소개
						자세한 소개
					</p>
				</div>
			</div>
		</div>
	)
}