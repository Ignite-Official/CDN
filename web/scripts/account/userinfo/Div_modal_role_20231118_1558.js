function Div_modal_role() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"역할 설정"} />
	
				<div class="flex flex-col h-[300px] min-h-[300px] max-h-[300px] p-[20px] space-y-[10px] overflow-auto">
					<span class="text-[12px] font-[400] text-[#A3A3A3] w-full">
						최대 3개까지 설정해주세요.
					</span>
	
					<div id="div_role_list"></div>
				</div>

				<div class={class_modal_div_close}>
					<div class="flex flex-col w-full">
						<span class="text-[12px] font-[400] text-[#A3A3A3] w-full mb-2">
							역할 추가
						</span>
						<div class="grid grid-cols-3 w-full justify-center items-center px-4">
							<div class="px-1 w-full col-span-2">
								<input type="text" placeholder="추가할 역할을 입력해주세요." id="txt_add_role" name="txt_add_role"
									   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg
											  text-start text-white text-[14px] font-[500]
											  focus:ring-white focus:border-white focus:text-white" />
							</div>
							<div class="px-1 w-full">
								<button class={class_modal_btn_close} id="btn_add_role"
										onClick={() => click_add_role()}>
									추가
								</button>
							</div>
						</div>
					</div>
				</div>
	
				<div class={class_modal_div_close}>
					<button class={class_modal_btn_close}
							onClick={() => document.getElementById("btn_modal_role_close").click()}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}