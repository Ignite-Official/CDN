// "지금, 새롭게 등장한 아티스트" 목록
async function get_list_new_artist() {
	function Div_artist(props) {
		const artist_List = Object.keys(props.data).map((btn_data) =>
			<div class="bg-[#292929] rounded-lg 
						w-[144px] min-w-[144px] h-[160px] min-h-[160px] max-h-[160px] cursor-pointer">

				<div class="flex flex-row">
					{props.data[btn_data].url_image_profile == "Unknown"
					? <a class="flex flex-row justify-center items-center rounded-full
								bg-[#6337C1] w-[48px] h-[48px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
						 href={props.data[btn_data].url_mypage}>
							<span class="text-white text-[18px] font-[700]">
								{props.data[btn_data].nickname.charAt(0)}
							</span>
						</a>
					: <img class="rounded-full w-[48px] h-[48px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
						   src={props.data[btn_data].url_image_profile}
						   alt={props.data[btn_data].nickname} 
						   onClick={() => location.href=props.data[btn_data].url_mypage}
                           onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"}/>
					}


					<div class="flex flex-col">
						<a href={props.data[btn_data].url_mypage}
						   class="text-white text-[14px] font-[700] mt-[10px] ml-[8px] w-[68px] max-w-[68px] truncate ...">
							{props.data[btn_data].nickname}
						</a>

						{props.data[btn_data].name_role == null
						 ? <div></div>
						 : <button type="button" onClick={() => location.href=props.data[btn_data].url_mypage}
                                   class="w-fit min-w-[32px] max-w-[64px] px-[8px] h-[20px] mt-[8px] ml-[8px] 
										  flex justify-center items-center border-gray-100 bg-white rounded-md border border-gray-200
                                          hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">
                                <p class="text-[11px] font-[600] text-[#3B3B3B] truncate ...">{props.data[btn_data].name_role}</p>
							</button>
						}

					</div>
				</div>

				<div class="flex flex-row bg-[#3B3B3B] rounded-lg p-[8px]
							ml-[10px] mt-[10px] w-[124px] min-w-[124px] max-w-[124px] h-[82px] min-h-[82px] max-h-[82px] p-4
							text-left text-[11px] font-[500] text-[#BCBCBC]
							justify-start items-start">
					<p class="multi-line-truncate-4">
						{props.data[btn_data].txt_intro}
					</p>
				</div>
			</div>
		)

		return (
			<div class="flex flex-nowrap space-x-[12px] overflow-x-scroll scroll-smooth scroll-hide" id="div_artist_sub">
				{artist_List}
			</div>
		)
	}

	// 프로필 데이터 가져오기
	const data = await fetch("/get_list_new_artist/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_artist data={data} />, document.getElementById("div_artist"));

	const slider_artist_sub = document.getElementById('div_artist_sub');
	add_mouse_grab_slider_event(slider_artist_sub)
}