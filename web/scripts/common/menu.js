function menu(mode) {
	if (mode == "alert") {
		// 메뉴 열기
		if (toggle_alert == 0) {
			$("#div_main").hide()
			$("#div_alert").show()
			$("#div_footer").hide()
			document.getElementById("div_menu_mobile").className = "hidden"
			document.getElementById("btn_menu_opened").className = class_menu_btn
			document.getElementById("btn_menu_closed").className = "hidden"
			document.getElementById("btn_alert_opened").className = class_alert_btn
			document.getElementById("btn_alert_closed").className = "hidden"
			
			toggle_menu = 0
			toggle_alert = 1
	
		// 메뉴 닫기
		} else {
			$("#div_main").show()
			$("#div_alert").hide()
			$("#div_footer").show()
			document.getElementById("div_menu_mobile").className = "hidden"
			document.getElementById("btn_menu_opened").className = "hidden"
			document.getElementById("btn_menu_closed").className = class_menu_btn
			document.getElementById("btn_alert_opened").className = "hidden"
			document.getElementById("btn_alert_closed").className = class_alert_btn
	
			toggle_menu = 0
			toggle_alert = 0
		}

	} else {
		// 메뉴 열기
		if (toggle_menu == 0) {
			$("#div_main").hide()
			$("#div_alert").hide()
			$("#div_footer").hide()
			document.getElementById("div_menu_mobile").className = ""
			document.getElementById("btn_menu_opened").className = class_menu_btn
			document.getElementById("btn_menu_closed").className = "hidden"
			
			toggle_menu = 1
			toggle_alert = 0
	
		// 메뉴 닫기
		} else {
			$("#div_main").show()
			$("#div_alert").hide()
			$("#div_footer").show()
			document.getElementById("div_menu_mobile").className = "hidden"
			document.getElementById("btn_menu_opened").className = "hidden"
			document.getElementById("btn_menu_closed").className = class_menu_btn
	
			toggle_menu = 0
			toggle_alert = 0
		}
	}
}