function Div_account() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-between w-full text-start">
				<Div_sub_title text={"계정명"} />
			</div>

			<input type="text" placeholder="계정명을 작성해주세요" id="txt_account" name="txt_account"
				   onInput= {() => input_txt_account()}
				   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
						  text-start text-white text-[14px] font-[500]
						  focus:ring-white focus:border-white focus:text-white" />

			<div class="hidden" id="div_alert_account">
				<p class="text-red-400 text-sm">
					계정명을 입력하지 않으면, 임의로 생성됩니다.
				</p>
			</div>
		</div>
	)
}