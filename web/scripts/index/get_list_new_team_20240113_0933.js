async function get_list_new_team() {
	function Div_team(props) {
		const team_List = Object.keys(props.data).map((btn_data) =>  
			<Div_team_card name={props.data[btn_data].name}
						   url_team={props.data[btn_data].url_team}
						   role={props.data[btn_data].role}
						   due_date_remain={props.data[btn_data].due_date_remain}
						   total_cnt={props.data[btn_data].total_cnt}
						   nickname_creator={props.data[btn_data].nickname_creator}
						   url_image_profile_creator={props.data[btn_data].url_image_profile_creator}
						   teamup_available={props.data[btn_data].teamup_available}
						   genre_name={props.data[btn_data].genre_name}
						   genre_count={props.data[btn_data].genre_count}
						   role_name={props.data[btn_data].role_name}
						   role_count={props.data[btn_data].role_count}
						   region_online={props.data[btn_data].region_online}
						   region_name={props.data[btn_data].region_name}
						   region_count={props.data[btn_data].region_count} />
		)

		return (
			<div class="flex flex-col w-full h-fit" id="div_team_sub">
				<div class="flex w-full justify-items-stretch space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_team_slider">
					{team_List}
					<div id="div_team_prev"
						 class="absolute top-[1875px] left-[68px] z-10 sm:top-[1300px] sm:left-[-5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_left.svg" class="w-[36px] h-[36px]" />
					</div>

					<div id="div_team_next"
						 class="absolute top-[1875px] right-[82px] z-10 sm:top-[1300px] sm:right-[5px] cursor-pointer
								hover:rounded-full hover:text-blue-700 focus:z-10 focus:ring-8 focus:ring-gray-200">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_scroll_right.svg" class="w-[36px] h-[36px]" />
					</div>
				</div>
			</div>
		)
	}

	// 스켈레톤
	ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_teamup.svg"}
										 title={"새로 만들어진 팀업"}
										 more_url={"/teamup/team/"} />, document.getElementById("div_teamup_title"))
	ReactDOM.render(<Div_main_skeleton_teamup />, document.getElementById("div_teamup_contents"))

	// 데이터 가져오기
	const data = await fetch("/get_list_new_team/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_team data={data} />, document.getElementById("div_teamup_contents"));

					
	// 스크롤 이벤트 추가
	const next = document.querySelectorAll('#div_team_next');
	const prev = document.querySelectorAll('#div_team_prev');
	const slider = document.querySelectorAll('#div_team_slider')

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