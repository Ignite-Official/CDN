function Div_genre() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-between w-full text-start">
				<Div_sub_title text={"활동하는 음악 장르를 알려주세요!"} />

				<button class="text-[#EDEDED] font-[600] text-[12px] bg-transparent"
						type="button" onClick={() => document.getElementById("btn_modal_genre").click()}>
					장르 설정 >
				</button>
			</div>

			<div class="flex flex-row justify-start items-center w-full space-x-[4px]" id="div_modal_genre_list">
				<span class="text-[#A3A3A3] font-[400] text-[12px] w-full text-start">
					선택한 장르가 없습니다.
				</span>
			</div>
		</div>
	)
}