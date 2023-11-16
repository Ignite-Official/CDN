function Div_cover() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-start w-full text-start">
				<Div_sub_title text={"커버 사진"} />
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
	
				<div id="div_cover_img"></div>
			</div>
		</div>
	)
}