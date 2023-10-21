function Div_step1_content(props) {
	return (
		<div class="space-y-[24px]">
			<div class="w-full items-start text-white font-[600] text-[16px]">
				이메일을 인증해주세요.
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-[4px]">
				<span class="w-full items-start text-[#D4D4D4] font-[500] text-[14px]">
					이메일
				</span>
				<input type="text" id="txt_email" 
						class="bg-[#292929] text-white text-[14px] font-[500] rounded-lg w-full h-[40px] 
							focus:ring-white focus:border-white focus:bg-transparent block" 
						placeholder="example@gmail.com" onKeyDown={() => input_checker()} onkeyup={() => input_checker()} required/>

				<div id="desc_email_msg" class="flex flex-row justify-start items-center w-full">
				{
					props.reauth == true
					?<span class="text-[#FA5252] text-[12px] font-[500] mb-[12px]">인증 코드가 만료되었습니다.</span>
					:""
				}
				</div>
			</div>

			<div id="btn_submit" class="w-full">
				<button type="button"
						class="bg-[#EDEDED] text-[16px] text-[#A4A4A4] font-[600] w-full h-[40px] rounded-lg text-center px-[16px] py-[10px] cursor-not-allowed"
						onclick="check_email_exist();">
					이메일로 본인인증 하기
				</button>
			</div>
		</div>
	)
}