function Div_main_skeleton_collaborator() {
	function Div_main_skeleton_collaborator_sub() {
		return (
			<div class="grid grid-cols-1 content-between bg-gray-500 rounded-xl w-[187.5px] min-w-[187.5px] h-[250px] p-[16px]">

					<div class="flex justify-between">
						<div class="bg-gray-400 rounded-full w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid"
							 alt="profile picture"></div>
					</div>
	
					<div class="space-y-[6px]">
						<div class="bg-gray-400 rounded-full w-3/4 h-[14px]"></div>
				
						<div class="flex flex-row space-x-[5px]">
							<button type="button" class="w-[28px] h-[22px] bg-gray-400 rounded-md"></button>
							<button type="button" class="w-[28px] h-[22px] bg-gray-400 rounded-md"></button>
							<button type="button" class="w-[28px] h-[22px] bg-gray-400 rounded-md"></button>
						</div>
	
						<div class="bg-gray-400 rounded-full w-1/2 h-[12px]"></div>
					</div>
			</div>
		)
	}

	return (
		<div class="flex flex-nowrap w-full space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide animate-pulse">
			<Div_main_skeleton_collaborator_sub /> <Div_main_skeleton_collaborator_sub />
			<Div_main_skeleton_collaborator_sub /> <Div_main_skeleton_collaborator_sub />
			<Div_main_skeleton_collaborator_sub /> <Div_main_skeleton_collaborator_sub />
			<Div_main_skeleton_collaborator_sub /> <Div_main_skeleton_collaborator_sub />
			<Div_main_skeleton_collaborator_sub /> <Div_main_skeleton_collaborator_sub />
		</div>
	)
}