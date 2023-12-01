// "회원님을 위한 아티스트" 목록
async function get_list_collaborator() {
	function Div_collaborator(props) {
		const collaborator_List = Object.keys(props.data).map((btn_data) =>                    
            <Div_artist_card nickname={props.data[btn_data].nickname}
                             gender={props.data[btn_data].gender}
                             url_image_profile={props.data[btn_data].url_image_profile}
                             url_image_bg={props.data[btn_data].url_image_bg}
                             url_mypage={props.data[btn_data].url_mypage}
                             use_youtube={props.data[btn_data].use_youtube}
                             use_soundcloud={props.data[btn_data].use_soundcloud}
                             teamup_available={props.data[btn_data].teamup_available} />
		)

		return (
			<div class="flex flex-col w-full h-fit" id="div_artist_sub">
				<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_collaborator_slider">
					{collaborator_List}
					<div id="div_collaborator_prev"
						 class="absolute top-[1535px] left-[68px] z-10 sm:top-[1025px] sm:left-[-5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
					</div>

					<div id="div_collaborator_next"
						 class="absolute top-[1535px] right-[82px] z-10 sm:top-[1025px] sm:right-[5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
					</div>
				</div>
			</div>
		)
	}

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_collaborator.svg"}
										 title={"회원님을 위한 아티스트"}
										 more_url={"/teamup/"} />, document.getElementById("div_collaborator_title"))
	//ReactDOM.render(<Div_main_skeleton_artist_buttons />, document.getElementById("div_collaborator_buttons"))
	document.getElementById("div_collaborator_buttons").className = "hidden"
	ReactDOM.render(<Div_main_skeleton_collaborator />, document.getElementById("div_collaborator_contents"))


	// 프로필 데이터 가져오기
	const data = await fetch("/get_list_collaborator/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_collaborator data={data} />, document.getElementById("div_collaborator_contents"));


	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_collaborator_next');
	const prev = document.querySelectorAll('#div_collaborator_prev');
	const slider = document.querySelectorAll('#div_collaborator_slider')

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