function Div_region() {
	return (
		<div class="flex flex-col justify-center items-start w-full space-y-[12px]">
			<Div_sub_title title={"활동 지역을 선택해주세요. (필수)"} />

			<div class="flex flex-col h-[200px] min-h-[200px] max-h-[200px] p-[20px] space-y-[10px] overflow-auto">
				<div id="div_region_list"></div>
			</div>

			<div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b w-full">
				<div class="flex flex-col w-full">
					<span class="text-[12px] font-[400] text-[#A3A3A3] w-full mb-2">
						지역 추가
					</span>
					<div class="grid grid-cols-3 w-full justify-center items-center px-4">
						<div class="px-1 w-full col-span-2">
							<input type="text" placeholder="추가할 지역를 입력해주세요." id="txt_add_region" name="txt_add_region"
									class="w-full h-[48px] bg-[#292929] border-0 rounded-lg
											text-start text-white text-[14px] font-[500]
											focus:ring-white focus:border-white focus:text-white" />
						</div>
						<div class="px-1 w-full">
							<button class="text-white bg-[#340BB8] font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]" id="btn_add_region"
									onClick={() => click_btn_add_region()}>
								추가
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[16px] p-6 border-t border-gray-200" id="div_region_counter"></div>
		</div>
	)
}