function click_chk_agreement2(only_True = false) {
	if (only_True || !toggle_chk_agreement2) {
		document.getElementById("chk_agreement2").checked = true
		toggle_chk_agreement2 = true

		if (!toggle_chk_agreement && toggle_chk_agreement1) {
			click_chk_agreement_all()
		}

	} else {
		document.getElementById("chk_agreement2").checked = false
		toggle_chk_agreement2 = false

		document.getElementById("chk_agreement").checked = false
		toggle_chk_agreement = false

	}
}