// 선택한 성별
let selected_gender = "Unknown"

let class_btn_submit_enabled = "bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center"
let class_btn_submit_disabled = "bg-[#3B3B3B] text-[18px] text-[#727272] font-[600] w-[328px] h-[48px] rounded-lg text-center cursor-not-allowed"

// 성별 선택
function select_btn_gender(mode) {
	const class_btn_default = "rounded-full w-[328px] h-[48px] text-[18px] font-[500] "
	const class_btn_male = class_btn_default + "bg-[#26009F] text-white hover:bg-[#26009F] hover:text-white focus:bg-[#26009F] focus:text-white"
	const class_btn_female = class_btn_default + "bg-[#600298] text-white hover:bg-[#600298] hover:text-white focus:bg-[#600298] focus:text-white"
	const class_btn_male_inactive = class_btn_default + "bg-[#292929] text-[#8B8B8B] hover:bg-[#26009F] hover:text-white focus:bg-[#26009F] focus:text-white"
	const class_btn_female_inactive = class_btn_default + "bg-[#292929] text-[#8B8B8B] hover:bg-[#600298] hover:text-white focus:bg-[#600298] focus:text-white"
	
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

}


// form 완료 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" id="btn_submit" onClick={props.function} class={props.class}>
			{props.text}
		</button>
	)
}

// 성별이 입력되어 있어야 버튼이 활성화된다.
function btn_submit_enable() {
	if (selected_gender != "") {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_enabled}
										text={btn_text} 
										function={() => submit()} />, document.getElementById("div_btn_submit"))
	} else {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_disabled}
										text={btn_text} 
										function={null} />, document.getElementById("div_btn_submit"))
	}
}

btn_submit_enable()