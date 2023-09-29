// 핫한 포트폴리오
async function get_list_hot_portfolio() {
	function Div_skeleton() {
		function Div_skeleton_sub() {
			return (
				<div class="flex flex-col justify-start items-between bg-gray-500 rounded-lg animate-pulse
							w-[187.5px] min-w-[187.5px] max-w-[187.5px] h-[250px] min-h-[250px] max-h-[250px] 
							sm:w-[140px] sm:min-w-[140px] sm:max-w-[140px] sm:h-[185x] sm:min-h-[185px] sm:max-h-[185px]"></div>
			)
		}

		return (
			<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_portfolio_sub">
				<Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub />
				<Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub />
			</div>
		)
	}

	function Div_portfolio(props) {            
		const portfolio_List = Object.keys(props.data).map((btn_data) =>
			<div class={"flex flex-col justify-start items-between "
					  + "bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('" + props.data[btn_data].url_thumbnail + "')] bg-cover bg-center "
					  + "w-[187.5px] min-w-[187.5px] max-w-[187.5px] h-[250px] min-h-[250px] max-h-[250px] p-[16px] "
					  + "sm:w-[140px] sm:min-w-[140px] sm:max-w-[140px] sm:h-[185px] sm:min-h-[185px] sm:max-h-[185px] sm:p-[12px] " 
					  + "hover:border hover:border-2 hover:border-gray-100 "
					  + "cursor-pointer"}
				 onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}>
				
				<div class="flex justify-between h-full">
					{props.data[btn_data].url_image_profile == "Unknown"
					? <a class="flex flex-row justify-center items-center rounded-full
								bg-[#6337C1] w-[36px] h-[36px] border-[2px] border-[#A4A4A4] border-solid"
						 href={props.data[btn_data].url_mypage}>
							<span class="text-white text-[14px] font-[700]">
								{props.data[btn_data].nickname.charAt(0)}
							</span>
						</a>
					: <img class="rounded-full w-[36px] h-[36px] border-[2px] border-[#A4A4A4] border-solid"
						src={props.data[btn_data].url_image_profile}
						alt={props.data[btn_data].nickname} 
						onClick={() => location.href=props.data[btn_data].url_mypage}
						onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"}/>
					}
				</div>
			
				<div class="flex flex-col justify-center items-between space-y-[4px]
							w-[155.5px] min-w-[155.5px] max-w-[155.5px] h-[65px] min-h-[65px] max-h-[65px]
							sm:w-[116px] min-w-[116px] max-w-[116px] h-[65px] min-h-[65px] max-h-[65px]">

					<p class="text-[11px] font-[500] text-white">▷&nbsp;&nbsp;{props.data[btn_data].cnt_click}</p>

					<div class="w-[155.5px] min-w-[155.5px] max-w-[155.5px] sm:w-[116px] sm:min-w-[116px] sm:max-w-[116px]">
						<p class="text-[14px] font-[700] text-white truncate ...">{props.data[btn_data].title}</p>
					</div>
					
					<div class="flex flex-row space-x-[6px]">
						<button type="button" 
								class="w-[20px] h-[20px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 
									   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							{props.data[btn_data].source  == "YOUTUBE"
							? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[10px] h-[10px]" />
							: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[10px] h-[10px]" />
							}
						</button>
						<button type="button" 
								class="w-fit min-w-[32px] max-w-[64px] px-[8px] h-[20px] flex justify-center items-center
										border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 
										hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<p class="text-[11px] font-[600] text-[#3B3B3B] truncate ...">
								{props.data[btn_data].name_role == "" || props.data[btn_data].name_role == null
								? "장르 무관"
								: props.data[btn_data].name_role}
							</p>
						</button>
					</div>
				</div>

			</div>
		)

		return (
			<div class="flex flex-col w-full h-fit" id="div_portfolio_sub">
				<div class="flex w-full justify-items-stretch space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_portfolio_slider">
					{portfolio_List}
					<div id="div_portfolio_prev"
						 class="absolute top-[675px] left-[75px] z-10 sm:top-[375px] sm:left-[2px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
					</div>

					<div id="div_portfolio_next"
						 class="absolute top-[675px] right-[82px] z-10 sm:top-[375px] sm:right-[5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
					</div>
				</div>
			</div>
		)
	}
	

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_hot_portfolio.svg"}
										 title={"핫한 포트폴리오"} />, document.getElementById("div_portfolio_title"))    
	ReactDOM.render(<Div_skeleton />, document.getElementById("div_portfolio_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/get_list_hot_portfolio/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_portfolio data={data} />, document.getElementById("div_portfolio_contents"));


	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_portfolio_next');
	const prev = document.querySelectorAll('#div_portfolio_prev');
	const slider = document.querySelectorAll('#div_portfolio_slider')

	for(let i = 0 ; i < slider.length ; i++){
		makeSlider(slider[i], prev[i], next[i]);
	}

	function makeSlider(element, prev, next){
		next.addEventListener('click',()=>{
			const offsetX = element.offsetWidth;
			element.scrollBy(offsetX,0)
		})
		prev.addEventListener('click',()=>{
			const offsetX = element.offsetWidth;
			element.scrollBy(-offsetX,0)
		})
	}
}