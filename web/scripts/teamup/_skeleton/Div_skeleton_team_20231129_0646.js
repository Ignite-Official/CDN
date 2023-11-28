function Div_skeleton_team() {
	function Div_skeleton_card() {
		return (
			<div class="flex flex-row w-full justify-center items-center">
				<div class="flex flex-col justify-start items-between bg-gray-500 rounded-lg animate-pulse
							w-full max-w-[300px] h-[140px] min-h-[140px] max-h-[140px] mx-auto">
				</div>
			</div>
		)
	}

	return (
		<div class="flex flex-col w-full px-[100px] pb-[40px] space-y-[24px] md:px-[20px] md:py-[16px]">
			<div id="div_team_counter">
				<Div_skeleton_counter />
			</div>
		
			<div id="div_team_filter" class="w-full">
				<div class="flex flex-row space-x-[12px] justify-start items-center
							md:grid md:grid-cols-2 md:space-x-[0px] md:justify-center md:gap-4">
					<Div_skeleton_filter /><Div_skeleton_filter /><Div_skeleton_filter /><Div_skeleton_filter />
				</div>
			</div>
		
			<div id="div_team_sub">
				<div class="grid grid-cols-4 w-full justify-center items-center gap-4 lg:grid-cols-2 md:grid-cols-1">
					<Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card />
				</div>
			</div>
		</div>
	)
}