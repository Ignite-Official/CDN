function Div_account() {
	return (
		<div class="flex flex-col justify-center items-start w-full space-y-[12px]">
			<Div_sub_title title={"팀 계정명을 작성해주세요. (필수)"}
						   subtitle={"팀 소개 URL이 [팀 계정명].team으로 생성됩니다."}  />

			<input type="text" placeholder="팀 계정명을 작성해주세요" id="txt_account" name="txt_account"
				   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
						  text-start text-white text-[14px] font-[500]
						  focus:ring-white focus:border-white focus:text-white" />
		</div>
	)
}