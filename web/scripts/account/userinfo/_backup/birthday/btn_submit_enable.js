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