// 헤더
function Div_header(props) {
	return (
		<div class="flex flex-col justify-center items-center">
			<div class="w-[360px] h-[100px]">
				<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/index/me/header_default.svg" class="w-[360px] h-[100px]"/>
			</div>
	
			<div class="flex flex-row justify-center items-center
						bg-[#6337C1] w-[80px] h-[80px] rounded-full border-2 border-[#A4A4A4] mt-[-40px]">
				<span class="text-white text-[34px] font-[700]">
					{props.data.nickname_firstletter}
				</span>
			</div>
	
			<div class="flex justify-between items-center w-[360px] pl-[16px] pr-[16px] mt-[-34px]">
				<div class="flex flex-row text-[#8B8B8B] text-[11px] font-[500] space-x-[4px]">
					<span>{props.data.gender}</span>
					<span>·</span>
					<span>TODAY {props.data.today_cnt}</span>
				</div>
	
				<div class="flex flex-row items-center">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/index/me/favoriate_link.svg" class="w-[16px] h-[22px]"/>
				</div>
			</div>
	
			<span class="text-[14px] font-[700] text-white mt-[24px]">
				{props.data.nickname}
			</span>
		</div>
	)
}