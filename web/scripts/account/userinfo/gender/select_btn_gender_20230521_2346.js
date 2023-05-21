// 성별 선택
function select_btn_gender(mode) {
	const class_btn_default = "rounded-full w-[328px] h-[48px] text-[18px] font-[500] "
	const class_btn_male = class_btn_default + "bg-[#26009F] text-white hover:bg-[#26009F] hover:text-white focus:bg-[#26009F] focus:text-white"
	const class_btn_female = class_btn_default + "bg-[#600298] text-white hover:bg-[#600298] hover:text-white focus:bg-[#600298] focus:text-white"
	const class_btn_male_inactive = class_btn_default + "bg-[#292929] text-[#8B8B8B] hover:bg-[#292929] hover:text-[#8B8B8B]"
	const class_btn_female_inactive = class_btn_default + "bg-[#292929] text-[#8B8B8B] hover:bg-[#292929] hover:text-[#8B8B8B]"
	
	selected_gender = mode
	// 남성
	if (mode == "male") {
		document.getElementById("btn_gender_male").className = class_btn_male
		document.getElementById("btn_gender_female").className = class_btn_female_inactive

	// 여성
	} else if (mode == "female") {
		document.getElementById("btn_gender_male").className = class_btn_male_inactive
		document.getElementById("btn_gender_female").className = class_btn_female

	// 알 수 없음
	} else {
		document.getElementById("btn_gender_male").className = class_btn_male_inactive
		document.getElementById("btn_gender_female").className = class_btn_female_inactive

	}
	
	btn_submit_enable()
}