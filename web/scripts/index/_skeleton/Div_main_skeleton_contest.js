function Div_main_skeleton_contest() {
	function Div_main_skeleton_contest_sub() {
		return (
			<div class="grid grid-cols-1 content-between bg-gray-500 rounded-xl w-[300px] min-w-[300px] h-[225px] p-[16px]"></div>
		)
	}

	return (
		<div class="flex flex-nowrap w-full space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide animate-pulse">
			<Div_main_skeleton_contest_sub /> <Div_main_skeleton_contest_sub />
			<Div_main_skeleton_contest_sub /> <Div_main_skeleton_contest_sub />
			<Div_main_skeleton_contest_sub /> <Div_main_skeleton_contest_sub />
			<Div_main_skeleton_contest_sub /> <Div_main_skeleton_contest_sub />
			<Div_main_skeleton_contest_sub /> <Div_main_skeleton_contest_sub />
		</div>
	)
}