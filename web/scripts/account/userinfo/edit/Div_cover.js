function Div_cover() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-start w-full text-start">
				<Div_sub_title text={"서버 사진"} />
			</div>
	
			<button id="btn_cover_change"
					class="rounded-lg w-[108px] h-[32px] bg-transparent border border-[#525252] text-[#D4D4D4] text-[14px] font-[600]
						   hover:text-white hover:border-white"
					type="button" onClick={() => document.getElementById("btn_modal_cover").click()}>
				커버 사진 변경
			</button>
	
			<div class="flex flex-col justify-center items-center w-full space-x-[4px]">
				<span class="text-[#A3A3A3] font-[400] text-[12px] w-full text-start">
					10MB 이내의 이미지 파일을 업로드 해주세요.
				</span>
	
				<div class="flex items-center justify-center w-[452px] h-[258px] bg-[#262626]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/blank_img_white.svg" class="w-10 h-10" />
				</div>
			</div>
		</div>
	)
}