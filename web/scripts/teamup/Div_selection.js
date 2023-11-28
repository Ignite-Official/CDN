function Div_selection() {
	return (
		<div class="flex flex-row w-full h-fit space-x-[8px] justify-start items-center w-full px-[100px] py-[40px] cursor-pointer
					md:px-[20px] md:py-[16px]">
			<span class={class_tab_off} onClick={() => click_tab('team')} id="tab_team">
				팀
			</span>
			<span class={class_tab_on} onClick={() => click_tab('artist')} id="tab_artist">
				아티스트
			</span>
		</div>
	)
}