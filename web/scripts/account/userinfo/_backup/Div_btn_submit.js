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