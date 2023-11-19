function Div_nickname() {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-between w-full text-start">
				<Div_sub_title text={"닉네임"} />
			</div>

			<input type="text" placeholder="불리고 싶은 이름을 작성해주세요" id="txt_nickname" name="txt_nickname"
				   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
						  text-start text-white text-[14px] font-[500]
						  focus:ring-white focus:border-white focus:text-white" />
		</div>
	)
}