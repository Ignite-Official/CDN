function input_txt_account() {
	let txt_account = document.getElementById("txt_account").value.trim()

	if (txt_account.length == 0) {
		document.getElementById("div_alert_account").className = "pt-[-12px] w-full justify-start"
	} else {
		document.getElementById("div_alert_account").className = "hidden"
	}
}