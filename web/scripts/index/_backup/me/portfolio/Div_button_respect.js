function Div_button_respect(props){
	return(
		<button type="button" onClick={() => click_respect(props.uuid)}
				class="w-fit min-w-[70px] max-w-[100x] h-[20px] bg-[#191919]
					   flex flex-row justify-center items-center rounded-md
					   border-gray-100 focus:outline-none border border-gray-200 
					   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
			<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_respect_plus.svg" class="w-[10px] h-[10px] mr-[4px]" />
			<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/fire_1f525.png" class="w-[10px] h-[10px] mr-[2px]" />
			<span class="text-[11px] font-[600] text-[#FF6B6B] truncate ...">
				{props.count}
			</span>
		</button>
	)
}