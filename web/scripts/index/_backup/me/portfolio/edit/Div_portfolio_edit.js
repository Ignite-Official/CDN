// 포트폴리오 리스트 (수정 모드)
function Div_portfolio_edit(props) {
	
	const portfolio_list = Object.keys(props.data).map((btn_data) =>
		<div class="flex flex-col justify-center items-center pb-[50px]">
			<div role="status" onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}
				 class={"flex items-center justify-center w-[360px] max-w-[360px] h-[128px] rounded-lg cursor-pointer "
					  + "bg-[url('" + props.data[btn_data].url_thumbnail +"')] bg-cover bg-center"}>
				<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/play_btn_video.svg" class="w-[40px] h-[40px] rounded-lg" />
			</div>

			<div class="flex justify-between items-center w-[360px] max-w-[360px] mt-[19px]">
				<div class="flex justify-between items-center w-[360px] max-w-[360px] h-[20px] mb-[15px]"></div>

				{props.current_user_info == props.email
				 ? <Div_btn_portfolio_edit uuid={props.data[btn_data].uuid} />
				 : ""
				}
			</div>

			<div class="flex flex-col justify-start items-start w-[360px] max-w-[360px] mt-[15px]">
				<span onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}
					class="text-white text-[14px] font-[700] w-[360px] max-w-[360px] truncate ...">
					{props.data[btn_data].title}
				</span>
	
				<span class="text-[#BCBCBC] text-[11px] font-[500] mt-[8px] w-[360px] max-w-[360px] whitespace-pre-wrap multi-line-truncate-4">
					{props.data[btn_data].description}
				</span>
			</div>
		</div>
	)
	return (
		<div class="flex flex-col justify-center items-center pb-[150px]">
			{portfolio_list}
		</div>
	)
}