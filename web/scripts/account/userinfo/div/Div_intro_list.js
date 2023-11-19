function Div_intro_list() {
	function Div_sub_contents(props) {
		return (
			<span class="text-[#A3A3A3] font-[400] text-[12px] w-full text-start">
				{props.text}
			</span>
		)
	}

	function Div_textarea(props) {
		return (
			<textarea placeholder={props.placeholder} id={props.id} name={props.id}
			class="w-full h-fit bg-[#292929] border-0 rounded-lg resize-none scroll-hide
				   text-start text-white text-[14px] font-[500]"></textarea>                
		)
	}

	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[12px]">
			<div class="flex flex-row justify-between w-full text-start">
				<Div_sub_title text={"상세소개"} />
			</div>

			<div class="flex flex-col justify-center items-center w-full space-x-[4px]">
				<Div_sub_contents text={"한 줄 소개"} />

				<input type="text" placeholder="한 줄 소개를 입력해주세요" id="txt_intro_1line" name="txt_intro_1line"
					   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
							  text-start text-white text-[14px] font-[500]
							  focus:ring-white focus:border-white focus:text-white" />
			</div>

			<div class="flex flex-col justify-center items-center w-full space-x-[4px]">
				<Div_sub_contents text={"자기소개"} />
				<Div_textarea id={"txt_intro"} placeholder={"스스로에 대한 소개를 자유롭게 작성해주세요"} />
			</div>

			<div class="flex flex-col justify-center items-center w-full space-x-[4px]">
				<Div_sub_contents text={"만들고 싶은 음악"} />
				<Div_textarea id={"txt_intro_music"} placeholder={"만들고 싶은 음악에 대해 자유롭게 작성해주세요"} />
			</div>

			<div class="flex flex-col justify-center items-center w-full space-x-[4px]">
				<Div_sub_contents text={"협업하고 싶은 사람"} />
				<Div_textarea id={"txt_intro_collaboration"} placeholder={"협업하고 싶은 사람에 대해 자유롭게 작성해주세요"} />
			</div>
		</div>
	)
}