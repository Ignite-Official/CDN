function Div_artist_card(props) {
	return (
		<div class="flex flex-row w-full justify-center items-center">
			<div class={    
							props.url_image_bg == "Unknown"
							? "grid grid-cols-1 bg-gray-900 flex flex-col content-between items-between rounded-lg p-[16px] w-full min-w-[200px] max-w-[200px] h-[250px] min-h-[250px] max-h-[250px]  hover:border hover:border-2 hover:border-gray-100 mx-auto cursor-pointer"
							: "grid grid-cols-1 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('" + props.url_image_bg + "')] bg-cover bg-center flex flex-col content-between items-between rounded-lg p-[16px] w-full max-w-[200px] h-[250px] min-h-[250px] max-h-[250px]  hover:border hover:border-2 hover:border-gray-100 mx-auto cursor-pointer"
					   }
				 onClick={() => location.href=props.url_mypage}>
				{
					props.url_image_profile == "Unknown"
					?   <div class="flex flex-row justify-center items-center rounded-full
								  bg-[#6337C1] w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid">
							<span class="text-white text-[12px] font-[700]">
								{props.nickname.charAt(0)}
							</span>
						</div>
					: <img class="rounded-full w-[32px] h-[32px] border-[2px] border-[#A4A4A4] border-solid"
						   src={"/" + props.url_image_profile}
						   alt={props.nickname} 
						   onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"} />
				}
				
				<div class="flex flex-col w-full space-y-[4px]">
					<p class="w-full text-white font-[600] text-[14px] truncate ...">
						{props.nickname}
					</p>


					<div class="flex flex-wrap space-x-[4px] justify-start items-center">
						{    
							props.use_youtube == "YES"
							?   <p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-[28px] h-[22px] px-[8px] rounded-md">
									<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[12px] h-[12px]" />
								</p>
							: ""
						}
						{
							props.use_soundcloud == "YES"
							?   <p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-[28px] h-[22px] px-[8px] rounded-md">
									<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[12px] h-[12px]" />
								</p>
							: ""
						}
					</div>

					<div class="flex flex-row justify-start items-center space-x-[4px]">

						<p class="text-[#D1D5DB] font-[400] text-[12px]">
							{props.gender}
						</p>
						<p class="flex flex-row justify-center items-center">
							<svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="1" cy="1.22266" r="1" fill="#D1D5DB"/>
							</svg>                                            
						</p>
						{
							props.teamup_available == "YES"
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
}