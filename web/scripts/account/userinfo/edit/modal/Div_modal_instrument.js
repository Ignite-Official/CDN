function Div_modal_instrument() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"장르 설정"} />
	
				<div class="flex flex-col h-[350px] min-h-[350px] max-h-[350px] p-[20px] space-y-[10px] overflow-auto">
					<div id="div_instrument_list"></div>
				</div>
	
				<div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
					<button class="text-white bg-[#340BB8] font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full
								   hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]"
							onClick={() => document.getElementById("btn_modal_instrument_close").click()}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}