function Div_member_card(props) {
	function temp_click_left_btn_kick(account, nickname) {
		ReactDOM.render(<Div_modal_kick account={account} nickname={nickname} />, document.getElementById("modal_kick"));         // 강제 퇴장
		document.getElementById("btn_modal_kick").click()
	}

	function temp_click_left_btn_join_accept(account, nickname) {
		ReactDOM.render(<Div_modal_join_accept account={account} nickname={nickname} />, document.getElementById("modal_join_accept"));         // 가입 승인
		document.getElementById("btn_modal_join_accept").click()
	}

	function temp_click_left_btn_join_deny(account, nickname) {
		ReactDOM.render(<Div_modal_join_deny account={account} nickname={nickname} />, document.getElementById("modal_join_deny"));       // 가입 거절
		document.getElementById("btn_modal_join_deny").click()
	}


	return (
		<div class="flex flex-col justify-between items-start w-full space-y-[12px] bg-[#1D1D1D] p-[16px] rounded-lg">

			<div class="flex flex-row justify-start items-center w-full space-x-[12px] cursor-pointer"
				 onClick={() => window.open("/" + props.account + ".me")}>
				 {
					props.url_image_profile == "Unknown"
					?   <div class="flex flex-row justify-center items-center w-[40px] min-w-[40px] max-w-[40px] h-[40px] min-h-[40px] max-h-[40px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
							<span class="text-white font-[700] text-[18px]">
								{props.nickname.charAt(0)}
							</span>
						</div>
					:   <div class={"flex flex-row justify-center items-center w-[40px] min-w-[40px] max-w-[40px] h-[40px] min-h-[40px] max-h-[40px] " +
									"bg-[url('" + props.url_image_profile + "')] bg-cover bg-center rounded-full border border-2 border-[#E5E5E5]"}>
						</div>
				 }
				
				<p class="text-white font-[600] text-[14px] truncate ...">
					{props.nickname}
				</p>
			</div>

			<div class="flex flex-row justify-between items-center w-full cursor-pointer"
				 onClick={() => window.open("/" + props.account + ".me")}>
				<p class="flex flex-row justify-center items-center h-[14px] text-[#D1D5DB] font-[400] text-[12px]">
					{props.gender}
					<svg class="mx-[4px]" width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="1" cy="1.22266" r="1" fill="#D1D5DB"/>
					</svg>
					조회 수 {props.total_cnt}
				</p>
				<p class="flex flex-row justify-center items-center h-[14px] text-white font-[500] text-[11px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/heart.svg" class="w-4 h-4 mr-[4px]" />
					{props.sum_respect}
				</p>
			</div>

			<hr class="w-full h-px bg-[#404040] border-0" />

			<p class="text-[#A3A3A3] font-[500] text-[14px] w-full cursor-pointer"
			   onClick={() => window.open("/" + props.account + ".me")}>
				{props.txt_intro}
			</p>

			{
				teamdata.teaminfo.my_type == "creator" && props.type == "member" && props.member_type == "Member"
				?   <div class="flex flex-between justify-center items-center w-full space-x-[4px]">
						<p class="flex flex-row justify-center items-center bg-red-800 w-full h-[20px] rounded-lg
								text-white font-[600] text-[12px] cursor-pointer
								hover:bg-red-700 hover:border hover:border-white"
						   onClick = {() => temp_click_left_btn_kick(props.account, props.nickname)}>
							강제 퇴장
						</p>
					</div>
				:   ""
			}

			{
				teamdata.teaminfo.my_type == "creator" && props.type == "pending"
				?   <div class="flex flex-between justify-center items-center w-full space-x-[4px]">
						<p class="flex flex-row justify-center items-center bg-green-800 w-full h-[20px] rounded-lg
								text-white font-[600] text-[12px] cursor-pointer
								hover:bg-green-700 hover:border hover:border-white"
						onClick = {() => temp_click_left_btn_join_accept(props.account, props.nickname)}>
							승인
						</p>
						<p class="flex flex-row justify-center items-center bg-red-800 w-full h-[20px] rounded-lg
								text-white font-[600] text-[12px] cursor-pointer
								hover:bg-red-700 hover:border hover:border-white"
						   onClick = {() => temp_click_left_btn_join_deny(props.account, props.nickname)}>
							거절
						</p>
					</div>
				:   ""
			}
			
		</div>
	)
}