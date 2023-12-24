function Div_comment_toolbar_opened(props) {
	return (
		<div class="flex flex-row justicy-center items-center text-white space-x-[10px] text-[12px] w-full pl-[32px]">
			<p class="font-[700] cursor-pointer" onClick={() => click_toggle_comment(null)}>
				답글 {props.cnt_comment}
			</p>
			<p class="flex flex-row font-[400] cursor-pointer" onClick={() => click_toggle_comment(null)}>
				접기
				<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/comment_down.svg" 
					 class="w-[18px] h-[18px] cursor-pointer" />
			</p>
		</div>
	)
}