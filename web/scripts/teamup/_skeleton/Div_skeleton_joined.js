function Div_skeleton_joined() {
	function Div_sub_card() {
		return (
			<div class="flex flex-col justify-start items-between bg-gray-500 rounded-lg animate-pulse
						w-[300px] min-w-[300px] h-[140px] min-h-[140px] max-h-[140px]
						sm:w-[268px] sm:min-w-[268px] sm:h-[108px] sm:min-h-[108px] sm:max-h-[108px]">
			</div>
		)
	}

	return (
		<div class="flex flex-col w-full px-[100px] py-[40px] space-y-[24px] md:px-[20px] md:py-[16px]">
			<span class="text-white text-[24px] font-[700]">팀업</span>
				
			<div id="div_joined_counter">
				<Div_skeleton_counter />
			</div>
		
			<div id="div_joined_content">
				<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide">
					<Div_sub_card /><Div_sub_card /><Div_sub_card /><Div_sub_card /><Div_sub_card />
					<Div_sub_card /><Div_sub_card /><Div_sub_card /><Div_sub_card /><Div_sub_card />
				</div>
			</div>
		</div>
	)
}