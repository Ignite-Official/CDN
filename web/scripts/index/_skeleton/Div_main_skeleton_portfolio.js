function Div_main_skeleton_portfolio() {
	function Div_main_skeleton_portfolio_sub() {
		return (
			<div class="grid grid-cols-1 content-between bg-gray-500 rounded-xl w-[156px] min-w-[156px] h-[218px] p-[16px]">

				<div class="flex flex-row">
					<div class="bg-gray-400 rounded-full w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid"
						alt="profile picture"></div>
				</div>

				<div class="space-y-[6px]">
					<div class="h-[14px] w-1/3 bg-gray-400 rounded-full"></div>
					<div class="h-[14px] bg-gray-400 rounded-full"></div>

					<div class="flex flex-row space-x-[6px]">
						<button type="button" class="w-[20px] h-[20px] bg-gray-400 rounded-md"></button>
						<button type="button" class="w-[36px] h-[20px] bg-gray-400 rounded-md"></button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div class="flex flex-nowrap w-full space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide animate-pulse">
			<Div_main_skeleton_portfolio_sub /> <Div_main_skeleton_portfolio_sub />
			<Div_main_skeleton_portfolio_sub /> <Div_main_skeleton_portfolio_sub />
			<Div_main_skeleton_portfolio_sub /> <Div_main_skeleton_portfolio_sub />
			<Div_main_skeleton_portfolio_sub /> <Div_main_skeleton_portfolio_sub />
			<Div_main_skeleton_portfolio_sub /> <Div_main_skeleton_portfolio_sub />
		</div>
	)
}