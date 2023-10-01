function Div_menu() {
	function Div_menu_text(props) {
		return (
			<a href={props.url} class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer
									   hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
				{props.text}
			</a>
		)
	}

	function Div_menu_text_mobile(props) {
		return (
			<li>
				<div class="flex flex-row justify-start items-center content-center w-full h-[56px]">
					<a href={props.url} class="text-[#E4E4E7] w-full hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
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
								 hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_letter.svg" class="w-[18px] h-[18px]"/>
					</span>

					<span class="flex flex-row justify-center items-center text-white text-[14px] font-[600] cursor-pointer
								 hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
						  id="btn_alert_closed" onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/menu_bell.svg" class="w-[24px] h-[24px]"/>
					</span>

					<span class="hidden" id="btn_alert_opened"
						  onClick={() => menu('alert')}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/menu/menu_cancel.svg" class="w-[14px] h-[14px]" />
					</span>
		
					<Div_menu_text text={"로그인"} url={"/signin/"} />
				</div>
		
				<div class="items-center justify-end hidden md:flex md:visible">
					<button type="button" id="btn_menu_closed" onClick={() => menu('hamburger')}
							class="inline-flex justify-center items-center text-sm text-white rounded-lg 
								   ml-[12px] w-[24px] h-[24px]
								   hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
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

				<div class="grid grid-cols-4 sm:grid-cols-3 text-white">
					<div class="flex justify-center items-center w-full h-[56px] cursor-pointer
								hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
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
					<div class="flex justify-center items-center w-full h-[56px] cursor-pointer
								hover:bg-[#D9D9D9] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
						  onClick={() => location.href='/signin/'}>
						로그인
					</div>
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

	function Div_menu_alert() {
		return (
			<div id="div_alert" class="hidden">
				<div class="flex justify-end items-center w-[360px] max-w-[360px] border-t-2 pt-[10px] pb-[10px] border-[#292929] mx-auto">
					<a href="/intro/notice/read/1/"
					   class="w-full h-fit px-[18px] py-[20px] space-y-[4px] border-b-2 border-[#292929]">
						<p class="text-white font-[700] text-[16px]">
							[공지사항] 이그나이트 페스티벌
						</p>
						<p class="text-[#D4D4D4] font-[500] text-[14px]">
							작곡가 팀 '투챔프'의 프로듀싱 앨범 주인공이 될 수 있는 기회!
						</p>
						<p class="text-[#8B8B8B] font-[500] text-[11px]">
							2023.07.16
						</p>
					</a>
				</div>
			</div>
		)
	}


	return (
		<nav class="bg-backgroundblack border-gray-200 w-full justify-center items-center 
					h-[68px] px-[100px] py-[12px] 
					sm:h-[60px] sm:px-[16px]">
			<Div_menu_pc />
			<Div_menu_mobile />
			<Div_menu_alert />
		</nav>
	)
}
