function Div_message() {
	return (
		<div class="flex flex-row justify-center itesm-center border border-gray-700 rounded-lg w-full p-[18px] space-x-[12px]">
			<input type="text" placeholder="" id="txt_msg" name="txt_msg"
				   class="w-9/12 h-[48px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
						 text-start text-white text-[14px] font-[500]
						 focus:ring-white focus:border-white focus:text-white" />

			<button type="button" 
					onClick={ () => insert_chat_log()}
					class="flex flex-row justify-center items-center bg-[#340BB8] text-white font-[600] text-[16px] px-[16px] py-[10px] rounded-lg w-fit
						   hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]">
					전송
			</button>
		</div>
	)
}