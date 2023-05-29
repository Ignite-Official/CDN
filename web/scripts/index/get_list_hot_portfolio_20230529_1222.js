// "핫한 포트폴리오" 목록
async function get_list_hot_portfolio() {
	function Div_portfolio(props) {
		const portfolio_List = Object.keys(props.data).map((btn_data) =>
			<div class={"bg-[url('" + props.data[btn_data].url_thumbnail + "')] bg-cover bg-center "
					  + "rounded-lg w-[144px] min-w-[144px] h-[160px] min-h-[160px] max-h-[160px] cursor-pointer"}>

				<div class="rounded-lg w-[144px] min-w-[144px] h-[160px]">
				
					<div class="flex justify-between pb-[62px]">
						{props.data[btn_data].img_profile == "Unknown"
						? <a class="flex flex-row justify-center items-center rounded-full
									bg-[#6337C1] w-[32px] h-[32px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
							href={props.data[btn_data].url_mypage}>
								<span class="text-white text-[14px] font-[700]">
									{props.data[btn_data].nickname.charAt(0)}
								</span>
							</a>
						: <img class="rounded-full w-[48px] h-[48px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
							src={props.data[btn_data].img_profile}
							alt={props.data[btn_data].nickname} 
							onClick={() => location.href=props.data[btn_data].url_mypage}/>
						}
				
						<p class="text-[11px] font-[500] text-white mt-[10px] mr-[10px]">▷ 0</p>
					</div>
				
					<div onClick={() => window.open(props.data[btn_data].url)}
					     class="ml-[10px] mr-[10px]">
						<p class="text-[14px] font-[700] text-white truncate ...">{props.data[btn_data].title}</p>
                    </div>
					<div class="flex flex-row space-x-[6px] ml-[10px] mb-[6px]">
						<button type="button" onClick={() => window.open(props.data[btn_data].url)}
								class="w-[20px] h-[20px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							{props.data[btn_data].source  == "YOUTUBE"
							? <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[10px] h-[10px]" />
							: <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[10px] h-[10px]" />
							}
						</button>
						<button type="button" 
								class="w-[36px] h-[20px] flex justify-center items-center text-[11px] font-[600] text-[#3B3B3B]
										border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							{props.data[btn_data].name_role}
						</button>
					</div>
				</div>
			</div>
		)

		return (
			<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_portfolio_sub">
				{portfolio_List}
			</div>
		)
	}

	// 프로필 데이터 가져오기
	const data = await fetch("/get_list_hot_portfolio/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_portfolio data={data} />, document.getElementById("div_portfolio"));

	const slider_portfolio_sub = document.getElementById('div_portfolio_sub');
	add_mouse_grab_slider_event(slider_portfolio_sub)
}