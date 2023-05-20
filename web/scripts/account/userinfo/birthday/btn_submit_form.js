let class_btn_submit_enabled = "bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center"
let class_btn_submit_disabled = "bg-[#3B3B3B] text-[18px] text-[#727272] font-[600] w-[328px] h-[48px] rounded-lg text-center cursor-not-allowed"

// form 완료 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" id="btn_submit" onClick={props.function} class={props.class}>
			{props.text}
		</button>
	)
}

// 생년월일이 입력되어 있어야 입력되어야 버튼이 활성화된다.
function btn_submit_enable() {
	let txt_birthday = document.getElementById("txt_birthday").value.trim();

	if (txt_birthday.length > 0) {
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