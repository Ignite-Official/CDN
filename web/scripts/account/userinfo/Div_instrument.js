function Div_instrument() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-between w-full text-start">
				<Div_sub_title text={"다루는 악기를 알려주세요!"} />

				<button class="text-[#EDEDED] font-[600] text-[12px] bg-transparent"
						type="button" onClick={() => document.getElementById("btn_modal_instrument").click()}>
					악기 설정 >
				</button>
			</div>

			<div class="flex flex-row justify-start items-center w-full space-x-[4px]" id="div_modal_instrument_list">
				<span class="text-[#A3A3A3] font-[400] text-[12px] w-full text-start">
					선택한 악기가 없습니다.
				</span>
			</div>
		</div>
	)
}