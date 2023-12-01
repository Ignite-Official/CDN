// Status
function Div_status(props) {
	return (
		<div class="flex flex-row justify-center items-center">
			<div class="flex flex-col justify-center items-center">
				<div class="flex flex-row justify-center items-center space-x-[4px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/fire_1f525.png" 
						class="w-[20px] h-[20px]" />
					<span class="text-[#FF6B6B] text-[16px] font-[700]">{props.data.sum_respect}</span>
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
	
	
			<div class="flex flex-col justify-center items-center" id="div_teamup">
					{ props.data.self_portfolio == "FALSE"
					  ? <Div_toggle_teamup teamup_available={props.data.teamup_available} />
					  : <Div_toggle_teamup_edit teamup_available={props.data.teamup_available} />
					}
			</div>
		</div>
	)
}