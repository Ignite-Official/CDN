function input_txt_nickname() {
	let txt_nickname = document.getElementById("txt_nickname").value.trim()

	if (txt_nickname.length == 0) {
		document.getElementById("div_alert_nickname").className = "pt-[-12px] w-full justify-start"
	} else {
		document.getElementById("div_alert_nickname").className = "hidden"
	}
}