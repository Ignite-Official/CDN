function Div_skeleton_artist() {
	function Div_skeleton_filter() {
		return (
			<div class="w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl cursor-pointer animate-pulse
						w-[120px] min-w-[120px] h-[40px] min-h-[40px] max-h-[40px]">
			</div>
		)
	}

	function Div_skeleton_card() {
		return (
			<div class="w-full justify-center items-center">
				<div class="flex flex-col justify-start items-between bg-gray-500 rounded-lg animate-pulse
							w-[187px] min-w-[187px] h-[250px] min-h-[250px] max-h-[250px]">
				</div>
			</div>
		)
	}

	return (
		<div class="flex flex-col w-full px-[100px] pb-[40px] space-y-[24px] md:px-[20px] md:py-[16px]">
			<div id="div_artist_counter">
				<Div_skeleton_counter />
			</div>
		
			<div class="flex flex-row space-x-[12px] justify-start items-center">
				<Div_skeleton_filter /><Div_skeleton_filter /><Div_skeleton_filter /><Div_skeleton_filter />
			</div>
		
			<div class="grid grid-cols-6 w-full justify-center items-center gap-4 lg:grid-cols-4 md:grid-cols-2" id="div_artist_sub">
				<Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card /><Div_skeleton_card />
			</div>
		</div>
	)
}