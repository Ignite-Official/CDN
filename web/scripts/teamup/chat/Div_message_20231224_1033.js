function Div_message(props) {
	return (
		<div class="w-full">
			<div class="flex fles-row justify-start items-center w-full space-x-[8px]">
				{
					props.data.url_image_profile == "Unknown"
					?   <div class="flex flex-row justify-center items-center w-[24px] min-w-[24px] max-w-[24px] h-[24px] min-h-[24px] max-h-[24px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5] cursor-pointer"
							 onClick={() => window.open(props.data.url_mypage)}>
							<span class="text-white font-[700] text-[10px]">
								{props.data.nickname.charAt(0)}
							</span>
						</div>
					:   <div class="flex flex-row justify-center items-center w-[24px] min-w-[24px] max-w-[24px] h-[24px] min-h-[24px] max-h-[24px] cursor-pointer">
							<img src={props.data.url_image_profile}
								class="bg-cover bg-center rounded-full border border-2 border-[#E5E5E5]" 
								onError={(e) => e.target.src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/onerror/profile.png"}
								onClick={() => window.open(props.data.url_mypage)} />
								
						</div>
				}
				<p class="text-white font-[600] text-[14px] truncate ... hover:underline cursor-pointer" onClick={() => window.open(props.data.url_mypage)}>
					{props.data.nickname}
				</p>
				<p class="text-[#737373] font-[400] w-fit text-[12px]">
					{props.data.created_at}
				</p>
			</div>

			<div class="flex flex-row justify-start items-center w-full p-[4px] pl-[32px]">
				<p class="text-white font-[400] text-[12px]">
					{props.data.content}
				</p>
			</div>
		</div>
	)
}