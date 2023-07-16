function Div_message_list(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<div class="flex flex-col w-[360px] h-fit px-[16px] py-[20px] mb-[2px]
					bg-transparent rounded-xl border-b-2 border-[#292929] space-y-[6px]">
			<p class="text-white text-[14px] font-[700] w-[210px] max-w-[210px]">
				팀업 활동 알림
			</p>

			<p class="text-[14px] font-[500] text-[#D4D4D4]">
				<span class="text-[#37B24D] mr-[4px]">{props.data[btn_data].requester_nickname}</span>님이 
				<span class="text-[#37B24D] mx-[4px]">{props.data[btn_data].team_name}</span>팀으로 팀업을 요청했어요. 
				받은 요청과 함께 아티스트를 확인해보세요!
			</p>

			<p class="text-[11px] font-[500] text-[#8B8B8B]">
				{props.data[btn_data].request_date_at}
			</p>

			<div class="flex flex-row justify-end items-center w-[328px] space-x-[6px]">
				<button class="flex flex-row justify-center items-center w-fit h-[24px] p-[8px] rounded-lg
							   bg-white text-dark font-[700] text-[11px]"
						onClick = {() => location.href=props.data[btn_data].requester_url_portfolio}>
					유저 확인
				</button>
				<button class="flex flex-row justify-center items-center w-fit h-[24px] p-[8px] rounded-lg
							   bg-white text-dark font-[700] text-[11px]"
						onClick = {() => location.href=props.data[btn_data].team_url_team}>
					팀 확인
				</button>
				<button class="flex flex-row justify-center items-center w-fit h-[24px] p-[8px] rounded-lg
							   bg-[#37B24D] text-white font-[700] text-[11px]"
						onClick = {() => team_request_confirm(props.data[btn_data].requester_uuid,
															  props.data[btn_data].team_uuid,
															  "accept")}>
					수락
				</button>
				<button class="flex flex-row justify-center items-center w-fit h-[24px] p-[8px] rounded-lg
							   bg-[#FA5252] text-white font-[700] text-[11px]"
						onClick = {() => team_request_confirm(props.data[btn_data].requester_uuid,
															  props.data[btn_data].team_uuid,
															  "reject")}>
					거절
				</button>
			</div>
		</div>
	)

	return (
		<div>
			{btnList}
		</div>
	)
}