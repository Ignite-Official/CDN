function Div_right() {

	function Div_member_status() {
		function Div_member_counter_card(props) {
			return (
				<div class="flex flex-col justify-between items-start w-full min-w-[205px] h-[95px] min-h-[95px] max-h-[95px] bg-[#262626] p-[16px] rounded-xl">
					<p class="text-white font-[600] text-[14px]">
						{props.role}
					</p>

					<div class="flex flex-row w-full justify-start items-end space-x-[4px]">
						<p class="text-[#9CA3AF] font-[700] text-[20px]">
							{props.count_joined}
						</p>
						<p class="text-[#9CA3AF] font-[700] text-[14px]">
							/
						</p>
						<p class="text-[#9CA3AF] font-[700] text-[14px]">
							{props.count_all}
						</p>
					</div>
				</div>
			)
		}

		return (
			<div class="flex flex-col w-full space-y-[24px]">
				<div class="flex flex-col w-full justify-center items-start space-y-[2px]">
					<p class="text-white font-[600] text-[14px]">
						팀업 마감일까지 x일 남았습니다.
					</p>
					<p class="text-[#A3A3A3] font-[400] text-[12px]">
						팀업 모집 마감일은 xxxx년 xx월 xx일 입니다.
					</p>
				</div>
				
				<div class="grid grid-cols-4 w-full justify-center items-center gap-[12px] md:grid-cols-2">
					<Div_member_counter_card role={"역할1"} count_joined={"x"} count_all={"x"} />
					<Div_member_counter_card role={"역할2"} count_joined={"x"} count_all={"x"} />
					<Div_member_counter_card role={"역할3"} count_joined={"x"} count_all={"x"} />
					<Div_member_counter_card role={"역할4"} count_joined={"x"} count_all={"x"} />
				</div>
			</div>
		)
	}


	function Div_member_card() {
		return (
			<div class="flex flex-col justify-between items-start w-full space-y-[12px] bg-[#1D1D1D] p-[16px] rounded-lg">

				<div class="flex flex-row justify-start items-center w-full space-x-[12px]">
					<div class="flex flex-row justify-center items-center w-[40px] h-[40px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
						<span class="text-white font-[700] text-[18px]">
							닉
						</span>
					</div>
					<p class="text-white font-[600] text-[14px]">
						닉네임
					</p>
				</div>

				<div class="flex flex-row justify-start items-center space-x-[8px]">
					<Div_btn_act_22 name={"역할"} />
					<Div_btn_act_22 name={"역할"} />
				</div>

				<div class="flex flex-row justify-between items-center w-full">
					<p class="flex flex-row justify-center items-center h-[14px] text-[#D1D5DB] font-[400] text-[12px]">
						성별
						<svg class="mx-[4px]" width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="1" cy="1.22266" r="1" fill="#D1D5DB"/>
						</svg>
						조회 수
					</p>
					<p class="flex flex-row justify-center items-center h-[14px] text-white font-[500] text-[11px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/heart.svg" class="w-4 h-4 mr-[4px]" />
						00                                    
					</p>
				</div>

				<hr class="w-full h-px bg-[#404040] border-0" />

				<p class="text-[#A3A3A3] font-[500] text-[14px] w-full">
					자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
				</p>
			</div>
		)
	}

	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[24px] rounded-xl px-[48px] md:px-[0px]">

			<Div_title text={"모집현황"} more={false} />
			<Div_member_status />

			<Div_title text={"멤버현황"} more={false} />

			<div class="flex flex-col justify-center items-center w-full">
				<div class="flex flex-row justify-start items-center w-full">
					<p class="flex flex-row justify-center items-center w-[105px] h-[45px] text-[#AE9DE3] font-[600] text-[16px] border-b border-4-[#AE9DE3] cursor-pointer">
						현재 멤버
					</p>
					<p class="flex flex-row justify-center items-center w-[105px] h-[45px] text-[#A3A3A3] font-[600] text-[16px] cursor-pointer">
						받은 요청
					</p>
					<p class="flex flex-row justify-center items-center w-[105px] h-[45px] text-[#A3A3A3] font-[600] text-[16px] cursor-pointer">
						보낸 요청
					</p>
				</div>
			</div>

			<div class="grid grid-cols-3 justify-center items-center w-full gap-[24px] md:grid-cols-1">
				<Div_member_card />
				<Div_member_card />
				<Div_member_card />
				<Div_member_card />
				<Div_member_card />
				<Div_member_card />
				<Div_member_card />
			</div>
		</div>
	)
}