function Div_menu() {
	function Div_menu_text(props) {
		return (
			<a href={props.url} class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer
									   hover:border-b-4 hover:border-gray-900">
				{props.text}
			</a>
		)
	}

	function Div_menu_text_mobile(props) {
		return (
			<li>
				<div class="flex flex-row justify-start items-center content-center w-full h-[56px]
							hover:border-b-2 hover:border-gray-900">
					<a href={props.url} class="text-[#E4E4E7] w-full">
						{props.text}
					</a>
	
					<div class="flex items-stretch h-[24px] max-h-[24px] pt-[4px] ml-[4px] hidden">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_red_dot.svg" class="w-[4px] h-[4px]"/>
					</div>
				</div>
			</li>
		)
	}

	function Div_menu_pc() {
		return (
			<div class="flex justify-between items-center h-[48px]">
				<span id="menu_logo" onClick={() => location.href='/'} class="cursor-pointer">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/logo/logo_004.svg"
							class="object-scale-down w-[120px] h-[32px] sm:w-[60px] sm:h-[24px]" alt="Logo" />
				</span>
		
				<div id="menu_name" class="flex justify-center items-center space-x-[40px] md:hidden">
					<Div_menu_text text={"메인"} url={"/"} />
					<Div_menu_text text={"팀업(아티스트/팀)"} url={"/teamup/"} />
					<Div_menu_text text={"송캠프"} url={"/songcamp/"} />
					<Div_menu_text text={"공모전"} url={"/contest/"} />
		
					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600]">
						<svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 0V12" stroke="#262626"/>
						</svg>
					</span>

					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer 
								 w-[24px] h-[24px] min-w-[24px] max-w-[24px] h-[24px] min-h-[24px] max-h-[24px]
								 hover:border-b-2 hover:border-gray-900"
						  id="btn_letter_closed" onClick={() => menu('letter')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_letter.svg" class="w-[18px] h-[18px]"/>
					</span>

					<span class="hidden" id="btn_letter_opened"
						  onClick={() => menu('letter')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]" />
					</span>

					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer
								 hover:border-b-2 hover:border-gray-900"
						  id="btn_alert_closed" onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_bell.svg" class="w-[24px] h-[24px]"/>
					</span>

					<span class="hidden" id="btn_alert_opened"
						  onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]" />
					</span>

					{ gv_username == ""
					? ""
					: <Div_menu_text text={"내 정보"} url={"/account/userinfo/"} />
					}

					{ gv_username == ""
					? <Div_menu_text text={"로그인"} url={"/account/"} />
					: <Div_menu_text text={"로그아웃"} url={"/account/logout/"} />
					}
					
				</div>
		
				<div class="items-center justify-end hidden md:flex md:visible">
					<button type="button" id="btn_menu_closed" onClick={() => menu('hamburger')}
							class="inline-flex justify-center items-center text-sm text-white rounded-lg 
								   ml-[12px] w-[24px] h-[24px]
								   hover:border-b-2 hover:border-gray-900">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_hamburger.svg" class="w-[18px] h-[12px]" />
					</button>
		
					<button type="button" id="btn_menu_opened" onClick={() => menu('hamburger')}
							class="hidden">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]" />
					</button>
						
				</div>
			</div>
		)
	}

	function Div_menu_mobile() {
		return (
			<div id="div_menu_mobile" class="hidden">

				<div class="grid grid-cols-5 sm:grid-cols-4 text-white">
					<div class="flex justify-center items-center w-full h-[56px] cursor-pointer
								hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
						 onClick={() => menu('letter')}>
						<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600]">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_letter.svg" class="w-[18px] h-[18px]"/>
						</span>
					</div>
					<div class="flex justify-center items-center w-full h-[56px] cursor-pointer
								hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
						 onClick={() => menu('alert')}>
						<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600]">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_bell.svg" class="w-[24px] h-[24px]"/>
						</span>
					</div>

					{ gv_username == ""
					?   ""
					:   <div class="flex justify-center items-center w-full h-[56px] cursor-pointer
									hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							onClick={() => location.href='/account/userinfo/'}>
							내 정보
						</div>
					}

					{ gv_username == ""
					?   <div class="flex justify-center items-center w-full h-[56px] cursor-pointer
									hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							onClick={() => location.href='/account/'}>
							로그인
						</div>
					:   <div class="flex justify-center items-center w-full h-[56px] cursor-pointer
									hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							onClick={() => location.href='/account/logout/'}>
							로그아웃
						</div>
					}

					<div class="flex justify-center items-center w-full h-[56px] cursor-pointer visible sm:hidden
								hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
						 onClick={() => menu('hamburger')}>
						서브 메뉴 닫기
					</div>
				</div>

				<ul class="flex-row text-[14px] font-[600]">
					<Div_menu_text_mobile text={"메인"} url={"/"} />
					<Div_menu_text_mobile text={"팀업(아티스트/팀)"} url={"/teamup/"} />
					<Div_menu_text_mobile text={"송캠프"} url={"/songcamp/"} />
					<Div_menu_text_mobile text={"공모전"} url={"/contest/"} />
				</ul>
			</div>
		)
	}
	
	return (
		<nav class="bg-backgroundblack border-gray-200 w-full justify-center items-center 
					h-[68px] px-[100px] py-[12px] 
					sm:h-[60px] sm:px-[16px]">
			<Div_menu_pc />
			<Div_menu_mobile />
			<Div_menu_letter />
			<Div_menu_alert />
		</nav>
	)
}