function Div_intro() {
	return (
		<div class="flex flex-col justify-center items-start w-full space-y-[12px]">
			<Div_sub_title title={"팀에 대해 소개해주세요. (필수)"} />

			<textarea placeholder="팀 소개를 입력해주세요." id="txt_intro" name="txt_intro"
					  class="w-full h-fit bg-[#292929] border-0 rounded-lg resize-none scroll-hide
							 text-start text-white text-[14px] font-[500]"></textarea>                
		</div>
	)
}