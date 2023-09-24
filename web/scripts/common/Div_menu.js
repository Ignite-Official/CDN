function Div_menu() {
	function Div_menu_sub(props) {
		return (
			<a href={props.url} class="flex flex-row justify-center items-center text-white text-[14px] font-[600] px-[20px] cursor-pointer">
				{props.text}
			</a>
		)
	}

	return (
		<nav class="bg-backgroundblack border-gray-200 w-full justify-center items-center 
					h-[68px] px-[100px] py-[12px] 
					sm:h-[60px] sm:px-[16px]">
		
			<div class="flex justify-between items-center h-[48px]">
				<span id="menu_logo" onclick="location.href='/'" class="cursor-pointer">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/logo/logo_005.svg"
							class="object-scale-down w-[120px] h-[32px] sm:w-[60px] sm:h-[24px]" alt="Logo" />
				</span>
		
				<div id="menu_name" class="flex justify-center items-center md:hidden">
					<Div_menu_sub text={"메인"} url={"/"} />
					<Div_menu_sub text={"팀업(아티스트/팀)"} url={"/teamup/"} />
					<Div_menu_sub text={"송캠프"} url={"#"} />
					<Div_menu_sub text={"공모전"} url={"#"} />
		
					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] pl-[12px]">
						<svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 0V12" stroke="#262626"/>
						</svg>
					</span>
						
					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] px-[12px] cursor-pointer">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_spliter.svg"/>
					</span>
		
					<Div_menu_sub text={"로그인"} url={"#"} />
				</div>
		
				<div class="items-center justify-end hidden md:flex md:visible">
					<button type="button" id="btn_alert_closed" onclick="menu_alert();"
							class="inline-flex justify-center items-center text-sm text-white rounded-lg 
								   w-[24px] h-[24px]
								   hover:bg-[#D9D9D9] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_bell.svg" class="w-[16px] h-[20px]"/>
					</button>
		
					<button type="button" id="btn_alert_opened" onclick="menu_alert();"
							class="hidden">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]"/>
					</button>
		
					<button type="button" id="btn_menu_closed" onclick="menu();"
							class="inline-flex justify-center items-center text-sm text-white rounded-lg 
								   ml-[12px] w-[24px] h-[24px]
								   hover:bg-[#D9D9D9] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_hamburger.svg" class="w-[18px] h-[12px]"/>
					</button>
		
					<button type="button" id="btn_menu_opened" onclick="menu();"
							class="hidden">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]"/>
					</button>
						
				</div>
			</div>
		</nav>
	)
}