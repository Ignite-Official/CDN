async function get_artist_list() {
	function Div_artist_sub(props) {
		const card_List = Object.keys(props.data).map((btn_data) =>                    
			<div class="flex flex-row w-full justify-center items-center">
				<div class={    
								props.data[btn_data].url_image_bg == "Unknown"
								? "grid grid-cols-1 bg-gray-900 flex flex-col content-between items-between rounded-lg p-[16px] w-full max-w-[200px] h-[250px] min-h-[250px] max-h-[250px]  hover:border hover:border-2 hover:border-gray-100 mx-auto cursor-pointer"
								: "grid grid-cols-1 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('" + props.data[btn_data].url_image_bg + "')] bg-cover bg-center flex flex-col content-between items-between rounded-lg p-[16px] w-full max-w-[200px] h-[250px] min-h-[250px] max-h-[250px]  hover:border hover:border-2 hover:border-gray-100 mx-auto cursor-pointer"
						   }
					 onClick={() => location.href=url_mypage}>
					{
						props.data[btn_data].url_image_profile == "Unknown"
						?   <div class="flex flex-row justify-center items-center rounded-full
									  bg-[#6337C1] w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid">
								<span class="text-white text-[12px] font-[700]">
									{props.data[btn_data].nickname.charAt(0)}
								</span>
							</div>
						: <img class="rounded-full w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid"
							   src={"/" + props.data[btn_data].url_image_profile}
							   alt={props.data[btn_data].nickname} 
							   onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"} />
					}
					
					<div class="flex flex-col w-full space-y-[4px]">
						<p class="w-full text-white font-[600] text-[14px] truncate ...">
							{props.data[btn_data].nickname}
						</p>


						<div class="flex flex-wrap space-x-[4px] justify-start items-center">
							{    
								props.data[btn_data].use_youtube == "YES"
								?   <p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-[28px] h-[22px] px-[8px] rounded-md">
										<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[12px] h-[12px]" />
									</p>
								: ""
							}
							{
								props.data[btn_data].use_soundcloud == "YES"
								?   <p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-[28px] h-[22px] px-[8px] rounded-md">
										<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[12px] h-[12px]" />
									</p>
								: ""
							}
						</div>

						<div class="flex flex-row justify-start items-center space-x-[4px]">

							<p class="text-[#D1D5DB] font-[400] text-[12px]">
								{props.data[btn_data].gender}
							</p>
							<p class="flex flex-row justify-center items-center">
								<svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="1" cy="1.22266" r="1" fill="#D1D5DB"/>
								</svg>                                            
							</p>
							{
								props.data[btn_data].teamup_available == "YES"
								?   <p class="text-[#8C6BF7] font-[400] text-[12px]">
										협업가능
									</p>
								:   <p class="text-[#D1D5DB] font-[400] text-[12px]">
										협업불가
									</p>
							}
							
						</div>
					</div>
				</div>
			</div>
		)
	
		return (
				<div class="grid grid-cols-6 w-full justify-center items-center gap-4 lg:grid-cols-4 md:grid-cols-2">
					{card_List}
				</div>
		)
	}

	const data = await fetch("/teamup/ajax_get_artist_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	console.log(data)

	ReactDOM.render(<Div_counter title="아티스트" counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_artist_counter"))
	ReactDOM.render(<Div_artist_sub data={data} />, document.getElementById("div_artist_sub"))
}