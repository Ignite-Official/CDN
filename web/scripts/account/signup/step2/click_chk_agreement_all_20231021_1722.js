function click_chk_agreement_all() {
	if (toggle_chk_agreement) {
		document.getElementById("chk_agreement").checked = document.getElementById("chk_agreement1").checked = document.getElementById("chk_agreement2").checked = false
		toggle_chk_agreement = toggle_chk_agreement1 = toggle_chk_agreement2 = false

		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} text={"다음"} function={null} />, document.getElementById("btn_submit"))

	} else {
		document.getElementById("chk_agreement").checked = document.getElementById("chk_agreement1").checked = document.getElementById("chk_agreement2").checked = true
		toggle_chk_agreement = toggle_chk_agreement1 = toggle_chk_agreement2 = true

		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} text={"다음"} function={() => click_step2_btn_next()} />, document.getElementById("btn_submit"))
	}
}