async function get_list_hot_portfolio() {
	function Div_portfolio(props) {
		const portfolio_List = Object.keys(props.data).map((btn_data) =>
			<div class={"bg-[url('" + props.data[btn_data].url_thumbnail + "')] bg-cover bg-center "
					+ "rounded-lg w-[144px] min-w-[144px] h-[160px] min-h-[160px] max-h-[160px] cursor-pointer"}>

				<div class="rounded-lg w-[144px] min-w-[144px] h-[160px]">
				
					<div class="flex justify-between pb-[62px]">
						{props.data[btn_data].url_image_profile == "Unknown"
						? <a class="flex flex-row justify-center items-center rounded-full
									bg-[#6337C1] w-[32px] h-[32px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
							href={props.data[btn_data].url_mypage}>
								<span class="text-white text-[14px] font-[700]">
									{props.data[btn_data].nickname.charAt(0)}
								</span>
							</a>
						: <img class="rounded-full w-[32px] h-[32px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
							src={props.data[btn_data].url_image_profile}
							alt={props.data[btn_data].nickname} 
							onClick={() => location.href=props.data[btn_data].url_mypage}
                            onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"}/>
						}
				
						<p class="text-[11px] font-[500] text-white mt-[10px] mr-[10px]">▷&nbsp;&nbsp;{props.data[btn_data].cnt_click}</p>
					</div>
				
					<div onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}
						class="ml-[10px] mr-[10px]">
						<p class="text-[14px] font-[700] text-white truncate ...">{props.data[btn_data].title}</p>
					</div>
					<div class="flex flex-row space-x-[6px] ml-[10px] mb-[6px]">
						<button type="button" onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}
								class="w-[20px] h-[20px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
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