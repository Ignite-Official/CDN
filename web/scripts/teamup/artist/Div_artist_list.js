function Div_artist_list(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<div class="bg-[#292929] w-full rounded-xl h-[134px] mb-[2px] cursor-pointer">
			<a class="flex flex-col ml-[16px] mr-[16px]" href={props.data[btn_data].url_portfolio}>

				<div class="flex flex-row">
					<div class="flex flex-col justify-center w-[48px] mr-[16px]">
						{
							props.data[btn_data].url_image_profile != "Unknown"
							? <div class={"flex flex-row justify-center items-center "
										+ "bg-[url('/" + props.data[btn_data].url_image_profile + "')] bg-cover " 
										+ "w-[48px] h-[48px] rounded-full border-2 border-[#A4A4A4] mt-[12px] mr-[16px]"}>
							  </div>
							: <div class="flex flex-row justify-center items-center rounded-full
										bg-[#6337C1] w-[48px] h-[48px] mt-[12px] mr-[16px] border-[2px] border-[#A4A4A4] border-solid">
								 <span class="text-white text-[20px] font-[700]">
									{props.data[btn_data].nickname.charAt(0)}
								 </span>
							  </div>
						}

						<div class="flex justify-center items-center w-[48px] mt-[8px] text-white font-[500] text-[11px]">
							<svg class="mr-[5.33px]"
								width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.09967 12.1999L4.94967 11.1499C3.7719 10.0722 2.70812 9.0026 1.75834 7.94127C0.808119 6.88038 0.333008 5.71105 0.333008 4.43327C0.333008 3.38882 0.683008 2.5166 1.38301 1.8166C2.08301 1.1166 2.95523 0.766602 3.99967 0.766602C4.58856 0.766602 5.14412 0.89149 5.66634 1.14127C6.18856 1.39149 6.63301 1.73327 6.99967 2.1666C7.36634 1.73327 7.81079 1.39149 8.33301 1.14127C8.85523 0.89149 9.41079 0.766602 9.99967 0.766602C11.0441 0.766602 11.9163 1.1166 12.6163 1.8166C13.3163 2.5166 13.6663 3.38882 13.6663 4.43327C13.6663 5.71105 13.1941 6.88327 12.2497 7.94993C11.3052 9.0166 10.233 10.0888 9.03301 11.1666L7.89967 12.1999C7.64412 12.4333 7.34412 12.5499 6.99967 12.5499C6.65523 12.5499 6.35523 12.4333 6.09967 12.1999Z" fill="#FF6B6B"/>
							</svg>
							{props.data[btn_data].sum_respect}
						</div>
					</div>


					<div class="flex flex-col mt-[12px]">
						<div class="flex flex-row justify-between items-center">
							<p class="text-white text-[14px] font-[700] w-[210px] max-w-[210px] truncate ...">{props.data[btn_data].nickname}</p>
							{
								props.data[btn_data].teamup_available == "YES"
								? <span class="flex flex-row justify-center items-center text-[#40C057] text-[11px] font-[500] w-[50px]">
									 팀업가능
									 <svg class="ml-[4px]" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										 <circle cx="3" cy="3" r="3" fill="#40C057"/>
									 </svg>                                
								  </span>
								: <span class="flex flex-row justify-center items-center text-[#AB45E6] text-[11px] font-[500] w-[50px]">
									팀업불가
									<svg class="ml-[4px]" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="3" cy="3" r="3" fill="#AB45E6"/>
									</svg>                                
								 </span>
							}
							

						</div>

						<div class="flex flex-row mt-[8px] space-x-[6px]" id={props.data[btn_data].uuid}>
							<Div_btn_act act={props.data[btn_data].act} />
							{
								props.data[btn_data].use_youtube == "YES"
								? <button type="button" 
										  class="w-[20px] h-[20px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
									  <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[10px] h-[10px]" />
								  </button>
								: ""
							}
							{
								props.data[btn_data].use_soundcloud == "YES"
								? <button type="button" 
										  class="w-[20px] h-[20px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
									  <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[10px] h-[10px]" />
								  </button>
								: ""
							}
						</div>

						<div class="flex flex-row justify-start items-center mt-[8px] space-x-[4px]">
							<span class="text-[#8B8B8B] font-[500] text-[11px]">{props.data[btn_data].gender}</span>
							<svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="1" cy="1" r="1" fill="#727272"/>
							</svg>
							<span class="text-[#8B8B8B] font-[500] text-[11px]">조회 {props.data[btn_data].total_cnt}</span>
						</div>
					</div>
				</div>
				

				<div class="flex justify-start items-center h-[28px] mt-[12.45px] bg-[#191919] rounded-lg">
					<span class="w-[328px] max-w-[328px] pl-[8px] pr-[8px] text-[#D4D4D4] font-[500] text-[11px] truncate ...">
						{props.data[btn_data].txt_head_intro}
					</span>
				</div>

			</a>

		</div>
	)

	return (
		<div>
			{btnList}
		</div>
	)
}