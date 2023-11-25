function Div_modal_instrument() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"장르 설정"} />
	
				<div class="flex flex-col h-[300px] min-h-[300px] max-h-[300px] p-[20px] space-y-[10px] overflow-auto">
					<div id="div_instrument_list"></div>
				</div>

				<div class={class_modal_div_close}>
					<div class="flex flex-col w-full">
						<span class="text-[12px] font-[400] text-[#A3A3A3] w-full mb-2">
							악기 추가
						</span>
						<div class="grid grid-cols-3 w-full justify-center items-center px-4">
							<div class="px-1 w-full col-span-2">
								<input type="text" placeholder="추가할 악기를 입력해주세요." id="txt_add_instrument" name="txt_add_instrument"
									   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg
											  text-start text-white text-[14px] font-[500]
											  focus:ring-white focus:border-white focus:text-white" />
							</div>
							<div class="px-1 w-full">
								<button class={class_modal_btn_close} id="btn_add_instrument"
										onClick={() => click_add_instrument()}>
									추가
								</button>
							</div>
						</div>
					</div>
				</div>


				<div class={class_modal_div_close}>
					<button class={class_modal_btn_close}
							onClick={() => document.getElementById("btn_modal_instrument_close").click()}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}