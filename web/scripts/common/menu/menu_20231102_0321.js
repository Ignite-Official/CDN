function menu(mode) {
	/* Letter */
	if (mode == "letter" && !toggle_letter) {
			$("#div_main").hide()
			$("#div_letter").show()
			$("#div_alert").hide()
			$("#div_footer").hide()

			document.getElementById("div_menu_mobile").className = "hidden"
			document.getElementById("btn_menu_opened").className = class_menu_btn
			document.getElementById("btn_menu_closed").className = "hidden"
			document.getElementById("btn_letter_opened").className = class_letter_btn
			document.getElementById("btn_letter_closed").className = "hidden"
			document.getElementById("btn_alert_opened").className = "hidden"
			document.getElementById("btn_alert_closed").className = class_alert_btn
			
			toggle_hamburger = false
			toggle_letter = true
			toggle_alert = false
	
	/* Alert */
	} else if (mode == "alert" && !toggle_alert) {
			$("#div_main").hide()
			$("#div_letter").hide()
			$("#div_alert").show()
			$("#div_footer").hide()

			document.getElementById("div_menu_mobile").className = "hidden"
			document.getElementById("btn_menu_opened").className = class_menu_btn
			document.getElementById("btn_menu_closed").className = "hidden"
			document.getElementById("btn_letter_opened").className = "hidden"
			document.getElementById("btn_letter_closed").className = class_letter_btn
			document.getElementById("btn_alert_opened").className = class_alert_btn
			document.getElementById("btn_alert_closed").className = "hidden"
			
			toggle_hamburger = false
			toggle_letter = false
			toggle_alert = true

	/* Hamburger */
	} else if (mode == "hamburger" && !toggle_hamburger) {
		$("#div_main").hide()
		$("#div_letter").hide()
		$("#div_alert").hide()
		$("#div_footer").hide()

		document.getElementById("div_menu_mobile").className = ""
		document.getElementById("btn_menu_opened").className = class_menu_btn
		document.getElementById("btn_menu_closed").className = "hidden"
		document.getElementById("btn_letter_opened").className = "hidden"
		document.getElementById("btn_letter_closed").className = class_letter_btn
		document.getElementById("btn_alert_opened").className = "hidden"
		document.getElementById("btn_alert_closed").className = class_alert_btn
		
		toggle_hamburger = true
		toggle_letter = false
		toggle_alert = false

	} else {
		$("#div_main").show()
		$("#div_letter").hide()
		$("#div_alert").hide()
		$("#div_footer").show()

		document.getElementById("div_menu_mobile").className = "hidden"
		document.getElementById("btn_menu_opened").className = "hidden"
		document.getElementById("btn_menu_closed").className = class_menu_btn
		document.getElementById("btn_letter_opened").className = "hidden"
		document.getElementById("btn_letter_closed").className = class_letter_btn
		document.getElementById("btn_alert_opened").className = "hidden"
		document.getElementById("btn_alert_closed").className = class_alert_btn

		toggle_hamburger = false
		toggle_letter = false
		toggle_alert = false
	}
}