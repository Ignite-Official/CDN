function Div_profile() {
	return (
		<div class="flex flex-col justify-start items-center w-full space-y-[12px]">
			<div class="w-full text-start">
				<Div_sub_title text={"프로필 사진"} />
			</div>

			<div class="flex flex-row justify-start items-center w-full space-x-[20px]">
				<div class="flex justify-center items-center w-[80px] h-[80px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
					<span class="text-white font-[700] text-[36px]"></span>
				</div>

				<div class="flex flex-col justify-start items-start w-1/2 space-y-[12px]">
					<button id="btn_profile_change"
							class="rounded-lg w-[93px] h-[32px] bg-transparent border border-[#525252] text-[#D4D4D4] text-[14px] font-[600]
								   hover:text-white hover:border-white"
							type="button" onClick={() => document.getElementById("btn_modal_profile").click()}>
						프로필 변경
					</button>

					<span class="text-[#A3A3A3] font-[400] text-[12px]">
						10MB 이내의 이미지 파일을 업로드 해주세요.
					</span>

				</div>
			</div>
		</div>
	)
}