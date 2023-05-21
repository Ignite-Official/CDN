// Status
function Div_status(props) {
	return (
		<div class="flex flex-row justify-center items-center">
			<div class="flex flex-col justify-center items-center">
				<div class="flex flex-row justify-center items-center space-x-[4px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/fire_1f525.png" 
						class="w-[20px] h-[20px]" />
					<span class="text-[#FF6B6B] text-[16px] font-[700]">0</span>
				</div>
				<div><span class="text-[#8B8B8B] text-[12px] font-[500]">받은 리스펙</span></div>
			</div>
	
			<div class="flex justify-center items-center ml-[28px] mr-[28px]">
				<svg width="1" height="46" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="1" height="46" fill="#292929"/>
				</svg>
			</div>
	
			<div class="flex flex-col justify-center items-center">
				<div><span class="text-white text-[16px] font-[700]">{props.data.total_cnt}</span></div>
				<div><span class="text-[#8B8B8B] text-[12px] font-[500]">TOTAL</span></div>
			</div>
	
			<div class="flex justify-center items-center ml-[28px] mr-[28px]">
				<svg width="1" height="46" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="1" height="46" fill="#292929"/>
				</svg>                    
			</div>
	
	
			<div class="flex flex-col justify-center items-center">
					{
						// 다른 사람의 포트폴리오에 들어왔을 경우
						props.data.self_portfolio == "FALSE"
						? ( props.data.teamup_available == "YES"
							? <div class="flex flex-row items-center text-[#40C057] text-[11px] font-[500] space-x-[4px] hidden">
								  <span>팀업 가능</span>
								  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									  <circle cx="3" cy="3" r="3" fill="#40C057"/>
								  </svg>
							  </div>
							: <div class="flex flex-row items-center text-[#8C6BF7] text-[11px] font-[500] space-x-[4px] hidden">
								  <span>팀업 불가</span>
								  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									  <circle cx="3" cy="3" r="3" fill="#8C6BF7"/>
								  </svg>
							  </div>
						  )
						// 자기 자신의 포트폴리오에 들어왔을 경우
						: ( props.data.teamup_available == "YES"
							? <Div_toggle_teamup teamup_available={props.data.teamup_available}
												 checked={true}
												 text="팀업 가능" />
							: <Div_toggle_teamup teamup_available={props.data.teamup_available}
												 checked={false}
												 text="팀업 불가" />
						  )
					}
			</div>
		</div>
	)
}