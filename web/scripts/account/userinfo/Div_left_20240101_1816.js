function Div_left() {    
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

	const genre_active = Object.keys(userdata.genre).map(function(i) {
		if (userdata.genre[i].active == 1) {   return userdata.genre[i].name  }
	}).filter(data => data !== undefined)

	const genreList = Object.keys(genre_active).map((btn_data) =>
		<Div_btn_act_22 name={genre_active[btn_data]} />
	)

	const role_active = Object.keys(userdata.role).map(function(i) {
		if (userdata.role[i].active == 1) {   return userdata.role[i].name  }
	}).filter(data => data !== undefined)

	const roleList = Object.keys(role_active).map((btn_data) =>
		<Div_btn_act_22 name={role_active[btn_data]} />
	)
	
	const instrumentList_active = Object.keys(userdata.instrument).map(function(i) {
		if (userdata.instrument[i].active == 1) {   return userdata.instrument[i].name  }
	}).filter(data => data !== undefined)

	const instrumentList = Object.keys(instrumentList_active).map((btn_data) =>
		<Div_btn_act_22 name={instrumentList_active[btn_data]} />
	)


	function Div_list(props) {
		return (
			<div class="flex flex-col w-full space-y-[12px]">
				<Div_left_sub_title title={props.title} />

				<div class="flex flex-wrap w-full space-x-[4px] space-y-[4px]">
					<div></div>
					{props.list}
				</div>
			</div>
		)
	}
	
	return (
		<div class="flex flex-col justify-center items-center bg-[#262626] w-full p-[24px] space-y-[44px] rounded-xl md:px-[16px]">
			<div class="flex flex-col justify-center items-center w-full space-y-[19px]">
				{
					userdata.userinfo.url_image_profile != "Unknown"
					?   <div class={"flex justify-center items-center w-[100px] h-[100px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5] "
									+ "bg-[url('/" + userdata.userinfo.url_image_profile + "')] bg-cover bg-full"}>
						</div>
					:   <div class="flex justify-center items-center w-[100px] h-[100px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
							<span class="text-white font-[700] text-[36px]">
								{userdata.userinfo.nickname.charAt(0)}
							</span>
						</div>
				}
				
				<div class="flex flex-col justify-center items-center space-y-[4px] w-full">
					<p class="text-[#D1D5DB] font-[400] text-[12px]">
						{userdata.userinfo.gender}
					</p>
					
					<p class="text-white font-[600] text-[20px]">
						{userdata.userinfo.nickname}
					</p>

					{
						userdata.userinfo.teamup_available == "YES"
						?   <p class="text-[#40C057] font-[500] text-[14px]" id="p_teamup_available">
								팀업 가능
							</p>
						:   <p class="text-[#AE9DE3] font-[500] text-[14px]" id="p_teamup_available">
								팀업 불가
							</p>
					}
					
				</div>

				<div class="grid grid-cols-2 w-full justify-center items-center">
					<Div_counter title={"받은 리스펙"} count={userdata.userinfo.sum_respect.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} />
					<Div_counter title={"총 조회 수"} count={userdata.userinfo.total_cnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} />
				</div>
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
				<Div_left_sub_title title={"이용중인 구독권"} />

				<p class="flex flex-row justify-center items-center bg-[#404040] w-full h-[44px] rounded-xl
						text-white font-[600] text-[14px] cursor-pointer">
					일반 이용자 >
				</p>
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
				{
					href.substr(-3) == ".me"
					?   <span class="flex flex-row justify-center items-center w-full h-[44px] rounded-xl bg-[#340BB8]
									 text-white font-[600] text-[14px] cursor-pointer
									 hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]"
							  onClick={() => document.getElementById("btn_modal_request_team").click()}>
							<svg class="w-6 h-6 mr-[10px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.2822 9.17043H11.3256V4.2138C11.3256 3.9947 11.2385 3.78458 11.0836 3.62966C10.9287 3.47473 10.7186 3.3877 10.4995 3.3877C10.2804 3.3877 10.0702 3.47473 9.91532 3.62966C9.7604 3.78458 9.67336 3.9947 9.67336 4.2138V9.17043H4.71673C4.49763 9.17043 4.28751 9.25747 4.13259 9.41239C3.97766 9.56732 3.89062 9.77744 3.89062 9.99653C3.89062 10.2156 3.97766 10.4258 4.13259 10.5807C4.28751 10.7356 4.49763 10.8226 4.71673 10.8226H9.67336V15.7793C9.67336 15.9984 9.7604 16.2085 9.91532 16.3634C10.0702 16.5183 10.2804 16.6054 10.4995 16.6054C10.7186 16.6054 10.9287 16.5183 11.0836 16.3634C11.2385 16.2085 11.3256 15.9984 11.3256 15.7793V10.8226H16.2822C16.5013 10.8226 16.7114 10.7356 16.8663 10.5807C17.0213 10.4258 17.1083 10.2156 17.1083 9.99653C17.1083 9.77744 17.0213 9.56732 16.8663 9.41239C16.7114 9.25747 16.5013 9.17043 16.2822 9.17043Z" fill="white"/>
							</svg>        
							영입 요청하기
						</span>
					:   ""
				}
				
				{
					href.substr(-3) != ".me"
					?  
						<a href="/account/userinfo/edit/"
							class="flex flex-row justify-center items-center w-full h-[44px] rounded-xl border border-gray-100
								   text-white font-[600] text-[14px] cursor-pointer
								   hover:bg-gray-900 focus:border focus:border-[#FFFFFF]">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/pen.svg" class="w-4 h-4 mr-[10px]" />
							프로필 수정
						</a>
						
					:   ""
				}
			</div>
			

			<div class="flex flex-col justify-center items-center w-full space-y-[28px]">
				{
					href.substr(-3) != ".me" && userdata.userinfo.teamup_available == "YES"
					?   <div id="div_toggle_teamup_available" class="w-full">
							<Div_teamup_enable />
						</div>
					:   ""
				}
				{
					href.substr(-3) != ".me" && userdata.userinfo.teamup_available == "NO"
					?   <div id="div_toggle_teamup_available" class="w-full">
							<Div_teamup_disable />
						</div>
					:   ""
				}

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_left_sub_title title={"상세 정보"} />
					
					<p class="text-[#A3A3A3] font-[500] text-[14px]">
						{userdata.userinfo.birthday}　{userdata.userinfo.gender}
					</p>
				</div>

				{
					genre_active.length > 0
					?	<Div_list title={"활동 음악 장르에요."} list={genreList} />
					:	""
				}
				
				{
					role_active.length > 0
					?	<Div_list title={"주로 하는 역할이에요."} list={roleList} />
					:	""
				}
				
				{
					instrumentList_active.length > 0
					?	<Div_list title={"이런 악기를 다룰 수 있어요."} list={instrumentList} />
					:	""
				}
				

			</div>
		</div>
	)
}