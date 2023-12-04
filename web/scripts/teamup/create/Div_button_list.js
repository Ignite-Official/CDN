function Div_button_list() {
	return (
		<div class="flex flex-row justify-center items-center space-x-[10px] w-full">
			<button type="button" id="btn_pass"
					onClick={() => location.href='/teamup/'}
					class="rounded-lg w-[85px] h-[40px] bg-transparent text-[#EDEDED] text-[16px] font-[600]
						   hover:text-white hover:border hover:border-white">
				취소
			</button>

			<button type="button" id="btn_complete" 
					onClick={() => click_btn_submit()}
					class="rounded-lg w-[85px] h-[40px] bg-red-500 text-white text-[16px] font-[600] hover:bg-red-600 hover:border hover:border-white">
				완료
			</button>
		</div>
	)
}