async function get_team_list() {
	function Div_team_sub(props) {
		const card_List = Object.keys(props.data).map((btn_data) =>  
			<div class={"flex flex-col justify-start items-between rounded-lg space-y-[12px] p-[16px] "
						+ "bg-[#1D1D1D] "
						+ "w-full max-w-[300px] h-[140px] min-h-[140px] max-h-[140px] mx-auto " 
						+ "hover:border hover:border-2 hover:border-gray-100 "
						+ "cursor-pointer"}>
				<div class="flex flex-row justify-start items-center space-x-[12px]">
					{
						props.data[btn_data].url_image_profile_creator == "Unknown"
						?   <div class="flex flex-row justify-center items-center rounded-full
									  bg-[#6337C1] w-[48px] h-[48px] border-[2px] border-[#A4A4A4] border-solid">
								<span class="text-white text-[18px] font-[700]">
									{props.data[btn_data].nickname_creator.charAt(0)}
								</span>
							</div>
						: <img class="rounded-full w-[48px] h-[48px] border-[2px] border-[#A4A4A4] border-solid"
							   src={"/" + props.data[btn_data].url_image_profile_creator}
							   alt={props.data[btn_data].nickname_creator} 
							   onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"} />
					}

					<div class="flex flex-col w-3/4">
						<p class="text-white font-[600] text-[16px] truncate ...">
							{props.data[btn_data].name}
						</p>

						{
							props.data[btn_data].teamup_available == "YES"
							?   <p class="flex flex-row justify-start items-center text-[#40C057] font-[400] text-[12px] space-x-[4px]">
									팀업 가능
									<svg class="ml-[4px]" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="3" cy="3.72266" r="3" fill="#40C057"/>
									</svg>                                                
								</p>
							:   <p class="flex flex-row justify-start items-center text-[#AE9DE3] font-[400] text-[12px] space-x-[4px]">
									팀업 불가
									<svg class="ml-[4px]" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="3" cy="3.72266" r="3" fill="#AE9DE3"/>
									</svg>                                                
								</p>
						}                                
					</div>
				</div>

				<p class="flex flex-row justify-start items-center w-full text-[#A3A3A3] font-[400] text-[12px] space-x-[4px]">
					{props.data[btn_data].due_date_remain}

					<svg class="px-[4px]" width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="1" cy="1.22266" r="1" fill="#A3A3A3"/>
					</svg>
						
					조회 {props.data[btn_data].total_cnt}
				</p>

				<div class="flex flex-row w-full">
					<p class="flex flex-row justify-center items-center bg-[#404040] text-white font-[400] text-[12px] w-fit h-[22px] px-[8px] rounded-md">
						{props.data[btn_data].role_name}
					</p>
				</div>

			</div>
		)

		return (
			<div class="grid grid-cols-4 w-full justify-center items-center gap-4 lg:grid-cols-2 md:grid-cols-1">
				{card_List}
			</div>
	)
	}

	const data = await fetch("/teamup/ajax_get_team_list/", {
								method: "post", 
								headers: {"X-CSRFToken": getCookie("csrftoken"),}
							})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_counter title="팀" counter={Object.keys(data).length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "건"} />, document.getElementById("div_team_counter"))
	ReactDOM.render(<Div_team_sub data={data} />, document.getElementById("div_team_sub"))
}