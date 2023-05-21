// 프로필
function Div_profile(props) {
	return (
		<div class="flex flex-col">
			<div class="bg-[#292929] w-full h-[24px] rounded-xl justify-center items-center text-center">
				<span class="text-[#D4D4D4] text-[11px] font-600">
					{props.data.txt_head_intro}
				</span>
			</div>
	
			<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
				<div class="flex flex-row justify-between items-center text-start">
					<div class="flex flex-row justify-between items-center">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/bust-in-silhouette_1f464.png"
							class="w-[20px] h-[20px] mr-[6px]" />
						<h2 class="text-[14px] font-[700] text-white">저를 소개해요.</h2>
					</div>
				</div>
	
				<div class="flex flex-wrap">
					<span class="text-[#BCBCBC] text-[11px] font-[500]">
						{props.data.txt_intro}
					</span>
				</div>
			</div>
	
	
			<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
				<div class="flex flex-row justify-between items-center text-start">
					<div class="flex flex-row justify-between items-center">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/guitar_1f3b8.png"
							class="w-[20px] h-[20px] mr-[6px]" />
						<h2 class="text-[14px] font-[700] text-white">이런 음악을 만들고 싶어요.</h2>
					</div>
				</div>
	
				<div class="flex flex-wrap">
					<span class="text-[#BCBCBC] text-[11px] font-[500]">
						{props.data.txt_intro2}
					</span>
				</div>
			</div>
	
	
			<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
				<div class="flex flex-row justify-between items-center text-start">
					<div class="flex flex-row justify-between items-center">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/raising-hands_1f64c.png"
							class="w-[20px] h-[20px] mr-[6px]" />
						<h2 class="text-[14px] font-[700] text-white">이런 분과 협업하고 싶어요.</h2>
					</div>
				</div>
	
				<div class="flex flex-wrap">
					<span class="text-[#BCBCBC] text-[11px] font-[500]">
						{props.data.txt_intro3}
					</span>
				</div>
			</div>
	
	
			<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
				<div class="flex flex-row justify-between items-center text-start">
					<div class="flex flex-row justify-between items-center">
						<h2 class="text-[14px] font-[700] text-white">참여 중인 팀업</h2>
					</div>
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle.svg" class="w-[7px] h-[10px]"/>
				</div>
			</div>
		</div>
	)
}