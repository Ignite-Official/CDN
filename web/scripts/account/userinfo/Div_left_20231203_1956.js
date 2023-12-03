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
				<Div_sub_title title={props.title} />

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
						?   <p class="text-[#40C057] font-[500] text-[14px]">
								팀업 가능
							</p>
						:   <p class="text-[#AE9DE3] font-[500] text-[14px]">
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
				<Div_sub_title title={"이용중인 구독권"} />

				<p class="flex flex-row justify-center items-center bg-[#404040] w-full h-[44px] rounded-xl
						  text-white font-[600] text-[14px] cursor-pointer">
					일반 이용자 >
				</p>
			</div>

			{
				href.substr(-3) != ".me"
				?   <div class="flex flex-col justify-center items-center w-full space-y-[12px]">
						<a href="/account/userinfo/edit/"
						class="flex flex-row justify-center items-center w-fit h-[44px] rounded-xl
								text-white font-[600] text-[14px] cursor-pointer">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/pen.svg" class="w-4 h-4 mr-[10px]" />
							프로필 수정
						</a>
					</div>
				:   ""
			}
			

			<div class="flex flex-col justify-center items-center w-full space-y-[28px]">
				{
					href.substr(-3) != ".me"
					?   <div class="flex flex-col w-full space-y-[12px]">
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
					:   ""
				}
				

				<div class="flex flex-col w-full space-y-[12px]">
					<Div_sub_title title={"상세 정보"} />
					
					<p class="text-[#A3A3A3] font-[500] text-[14px]">
						{userdata.userinfo.birthday}　{userdata.userinfo.gender}
					</p>
				</div>

				<Div_list title={"활동 음악 장르에요."} list={genreList} />
				<Div_list title={"주로 하는 역할이에요."} list={roleList} />
				<Div_list title={"이런 악기를 다룰 수 있어요."} list={instrumentList} />

			</div>
		</div>
	)
}