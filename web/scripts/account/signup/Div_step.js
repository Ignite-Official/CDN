function Div_step(props) {
	return (
		<div class="flex flex-row justify-between items-center w-full">
			<div class="flex flex-row justify-center items-center space-x-[8px]">
				{   props.step1 == false 
				?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_1_gray.svg" class="w-[18px] h-[18px]"/>
				:   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_1_violet.svg" class="w-[18px] h-[18px]"/>
				}
				
				{   props.step1 == false 
					?   <span class="text-[#A3A3A3] font-[600] text-[16px]">이메일 인증</span>
					:   <span class="text-white font-[600] text-[16px]">이메일 인증</span>
				}
				
			</div>

			<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle2.svg" class="w-[20px] h-[20px]"/>
			
			<div class="flex flex-row justify-center items-center space-x-[8px]">
				{   props.step2 == false 
				?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_2_gray.svg" class="w-[18px] h-[18px]"/>
				:   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_2_violet.svg" class="w-[18px] h-[18px]"/>
				}

				{   props.step2 == false 
					?   <span class="text-[#A3A3A3] font-[600] text-[16px]">약관 동의</span>
					:   <span class="text-white font-[600] text-[16px]">약관 동의</span>
				}
			</div>

			<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle2.svg" class="w-[20px] h-[20px]"/>

			<div class="flex flex-row justify-center items-center space-x-[8px]">
				{   props.step3 == false 
				?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_3_gray.svg" class="w-[18px] h-[18px]"/>
				:   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/circle_3_violet.svg" class="w-[18px] h-[18px]"/>
				}

				{   props.step3 == false 
					?   <span class="text-[#A3A3A3] font-[600] text-[16px]">내 정보 입력</span>
					:   <span class="text-white font-[600] text-[16px]">내 정보 입력</span>
				}
			</div>
		</div>   
	)
}