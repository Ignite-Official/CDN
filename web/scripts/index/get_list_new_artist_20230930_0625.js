// 지금, 새롭게 등장한 아티스트
async function get_list_new_artist() {
	function Div_skeleton() {
		function Div_skeleton_sub() {
			return (
                <div class="flex flex-col justify-start items-between bg-gray-500 rounded-lg animate-pulse
                            w-[300px] min-w-[300px] h-[170px] min-h-[170px] max-h-[170px]">
                </div>
			)
		}

		return (
			<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_portfolio_sub">
				<Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub />
				<Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub /> <Div_skeleton_sub />
			</div>
		)
	}

    
	function Div_artist(props) {            
		const artist_List = Object.keys(props.data).map((btn_data) =>
			<div class={"flex flex-col justify-start items-between rounded-lg space-y-[12px] "
					  + "bg-[#404040] "
					  + "w-[300px] min-w-[300px] max-w-[300px] h-[170px] min-h-[170px] max-h-[170px] p-[16px] sm:p-[12px] " 
					  + "hover:border hover:border-2 hover:border-gray-100 "
					  + "cursor-pointer"}
                 onClick={() => location.href=props.data[btn_data].url_mypage}>
				
                 <div class="flex flex-row justify-start items-center">
					{props.data[btn_data].url_image_profile == "Unknown"
					? <a class="flex flex-row justify-center items-center rounded-full mr-[12px]
								bg-[#6337C1] w-[40px] h-[40px] border-[2px] border-[#A4A4A4] border-solid"
						 href={props.data[btn_data].url_mypage}>
							<span class="text-white text-[18px] font-[700]">
								{props.data[btn_data].nickname.charAt(0)}
							</span>
						</a>
					: <img class="rounded-full w-[40px] h-[40px] border-[2px] border-[#A4A4A4] border-solid mr-[12px]"
						   src={props.data[btn_data].url_image_profile}
						   alt={props.data[btn_data].nickname} 
						   onClick={() => location.href=props.data[btn_data].url_mypage}
                           onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"}/>
					}


					<div class="flex flex-col">
						<a href={props.data[btn_data].url_mypage}
						   class="text-white text-[14px] font-[700] min-w-[32px] max-w-[216px] truncate ...">
							{props.data[btn_data].nickname}
						</a>
					</div>
				</div>

                {props.data[btn_data].name_role == null
                    ? <div></div>
                    : <button type="button" onClick={() => location.href=props.data[btn_data].url_mypage}
                              class="w-fit min-w-[32px] max-w-[216px] px-[8px] h-[22px] 
                                     flex justify-center items-center border-gray-100 bg-white rounded-md border border-gray-200
                                     hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">
                           <p class="text-[12px] font-[600] text-[#3B3B3B] truncate ...">{props.data[btn_data].name_role}</p>
                       </button>
                   }

				<div class="flex flex-row rounded-lg 
							w-fit min-w-[268px] max-w-[268px] h-[48px] min-h-[48px] max-h-[48px]
							text-left text-[14px] font-[500] text-[#BCBCBC]
							justify-start items-start">
					<p class="multi-line-truncate-2">
						{props.data[btn_data].txt_intro}
					</p>
				</div>

			</div>
		)

		return (
			<div class="flex flex-col w-full h-fit" id="div_artist_sub">
				<div class="flex w-full justify-items-stretch space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_artist_slider">
					{artist_List}
					<div id="div_artist_prev"
						 class="absolute top-[1025px] left-[68px] z-10 sm:top-[625px] sm:left-[-5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
					</div>

					<div id="div_artist_next"
						 class="absolute top-[1025px] right-[82px] z-10 sm:top-[625px] sm:right-[5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
					</div>
				</div>
			</div>
		)
	}
	
	// 스켈레톤
    ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_singer.svg"}
                                         title={"지금, 새롭게 등장한 아티스트"}
                                         more_url={"/teamup/artist"} />, document.getElementById("div_artist_title"))    
    ReactDOM.render(<Div_skeleton />, document.getElementById("div_artist_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/get_list_new_artist/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist data={data} />, document.getElementById("div_artist_contents"));


	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_artist_next');
	const prev = document.querySelectorAll('#div_artist_prev');
	const slider = document.querySelectorAll('#div_artist_slider')

	for(let i = 0 ; i < slider.length ; i++){
		makeSlider(slider[i], prev[i], next[i]);
	}

	function makeSlider(element, prev, next){
		next.addEventListener('click',()=>{
			const offsetX = Math.round(element.offsetWidth/2);
			element.scrollBy(offsetX,0)
		})
		prev.addEventListener('click',()=>{
			const offsetX = Math.round(element.offsetWidth/2);
			element.scrollBy(-offsetX,0)
		})
	}
}