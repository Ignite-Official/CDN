function click_chk_agreement1(only_True = false) {
	if (only_True || !toggle_chk_agreement1) {
		document.getElementById("chk_agreement1").checked = true
		toggle_chk_agreement1 = true

		if (!toggle_chk_agreement && toggle_chk_agreement2) {
			click_chk_agreement_all()
		}

	} else {
		document.getElementById("chk_agreement1").checked = false
		toggle_chk_agreement1 = false

		document.getElementById("chk_agreement").checked = false
		toggle_chk_agreement = false

		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} text={"다음"} function={null} />, document.getElementById("btn_submit"))

	}
}