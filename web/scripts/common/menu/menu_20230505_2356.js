let toggle_menu = 0
let toggle_alert = 0
let class_alert_btn = "inline-flex justify-center items-center text-sm text-white rounded-lg w-[24px] h-[24px] hover:bg-[#D9D9D9] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
let class_menu_btn = "inline-flex justify-center items-center text-sm text-white rounded-lg ml-[12px] w-[24px] h-[24px] hover:bg-[#D9D9D9] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"

function menu() {
	// 메뉴 열기
	if (toggle_menu == 0) {
		$("#div_main").hide()
		$("#div_alert").hide()
		$("#div_menu").show()
		document.getElementById("btn_menu_opened").className = class_menu_btn
		document.getElementById("btn_menu_closed").className = "hidden"
		document.getElementById("btn_alert_opened").className = "hidden"
		document.getElementById("btn_alert_closed").className = class_alert_btn
		
		toggle_menu = 1
		toggle_alert = 0

	// 메뉴 닫기
	} else {
		$("#div_main").show()
		$("#div_alert").hide()
		$("#div_menu").hide()
		document.getElementById("btn_menu_opened").className = "hidden"
		document.getElementById("btn_menu_closed").className = class_menu_btn
		document.getElementById("btn_alert_opened").className = "hidden"
		document.getElementById("btn_alert_closed").className = class_alert_btn

		toggle_menu = 0
		toggle_alert = 0
	}
}

function menu_alert() {
	// 알림 열기
	if (toggle_alert == 0) {
		$("#div_main").hide()
		$("#div_alert").show()
		$("#div_menu").hide()
		document.getElementById("btn_menu_opened").className = "hidden"
		document.getElementById("btn_menu_closed").className = class_menu_btn
		document.getElementById("btn_alert_opened").className = class_alert_btn
		document.getElementById("btn_alert_closed").className = "hidden"
		
		toggle_menu = 0
		toggle_alert = 1

	// 알림 닫기
	} else {
		$("#div_main").show()
		$("#div_alert").hide()
		$("#div_menu").hide()
		document.getElementById("btn_menu_opened").className = "hidden"
		document.getElementById("btn_menu_closed").className = class_menu_btn
		document.getElementById("btn_alert_opened").className = "hidden"
		document.getElementById("btn_alert_closed").className = class_alert_btn

		toggle_menu = 0
		toggle_alert = 0
	}
}