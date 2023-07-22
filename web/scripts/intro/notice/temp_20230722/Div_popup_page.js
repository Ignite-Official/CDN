function Div_popup_page(props) {
	return (
		<div class="flex flex-col justify-center items-center rounded-lg cursor-pointer bg-white">
			<div class="flex flex-row mt-[24px] space-x-[8px]">
				<div id="popup_dot_1" onClick={() => change_popup(1)} class="cursor-pointer">
					{
						props.page == 1
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_2" onClick={() => change_popup(2)} class="cursor-pointer">
					{
						props.page == 2
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_3" onClick={() => change_popup(3)} class="cursor-pointer">
					{
						props.page == 3
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_4" onClick={() => change_popup(4)} class="cursor-pointer">
					{
						props.page == 4
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_5" onClick={() => change_popup(5)} class="cursor-pointer">
					{
						props.page == 5
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_6" onClick={() => change_popup(6)} class="cursor-pointer">
					{
						props.page == 6
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_7" onClick={() => change_popup(7)} class="cursor-pointer">
					{
						props.page == 7
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
				<div id="popup_dot_8" onClick={() => change_popup(8)} class="cursor-pointer">
					{
						props.page == 8
						? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_enabled.svg"/>
						: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/dot_disabled.svg"/>
					}
				</div>
			</div>

			<div class="flex flex-row justify-center items-center text-center w-[328px] my-[22px]">
				<span class="text-[#292929] font-[500] text-[14px]">
					{props.text}
				</span>
			</div>
													
			{
				props.page == 8
				? <img src={props.image} class="w-[320px]"/>
				: <img src={props.image} onClick={() => change_popup(props.page + 1)} class="w-[320px]"/>
			}
			
		</div>
	)
}