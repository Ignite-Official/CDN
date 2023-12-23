function Div_header_refresh() {
	return (
		<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/refresh.svg" 
			 class="w-[20px] h-[20px] cursor-pointer" 
			 onClick={() => get_chat_log(false)} />
	)
}