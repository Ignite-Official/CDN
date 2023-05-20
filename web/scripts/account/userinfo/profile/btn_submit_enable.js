// 닉네임, 계정명이 모두 입력되어야 버튼이 활성화된다.
function btn_submit_enable() {
	let txt_nickname = document.getElementById("txt_nickname").value.trim();
	let txt_account = document.getElementById("txt_account").value.trim();

	if (txt_nickname.length > 0 && txt_account.length > 0) {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_enabled}
										text={btn_text} 
										function={() => submit()} />, document.getElementById("div_btn_submit"))
	} else {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_disabled}
										text={btn_text} 
										function={null} />, document.getElementById("div_btn_submit"))
	}
}