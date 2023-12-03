function Div_gender() {
	function Div_sub_check(props) {
		return (
			<div class="flex items-center space-x-[8px]">
				<input id={props.id} type="checkbox" value={props.value} name={props.name}
					   class="w-[24px] h-[24px] text-violet-500 border-[#E5E5E5]
							  focus:ring-violet-600 focus:ring-2" />
				<label for={props.id}
					   class="text-[14px] font-[500] text-[#D4D4D4]">
					   {props.label}
				</label>
			</div>
		)
	}

	return (
		<div class="flex flex-col justify-center items-start w-full space-y-[12px]">
			<Div_sub_title title={"모집 성별을 알려주세요. (필수)"} />

			<div class="flex flex-row justify-start items-center w-full space-x-[12px]">
				<Div_sub_check id={"check_gender_male"} name={"check_gender"} value={"male"} label={"남성"} />
				<Div_sub_check id={"check_gender_female"} name={"check_gender"} value={"female"} label={"여성"} />
			</div>
		</div>
	)
}