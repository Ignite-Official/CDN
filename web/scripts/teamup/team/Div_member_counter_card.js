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