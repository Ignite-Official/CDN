let toggle_menu = 0

function menu() {
	// 메뉴 열기
	if (toggle_menu == 0) {
		$("#div_main").hide()
		$("#div_menu").show()
		
		toggle_menu = 1

	// 메뉴 닫기
	} else {
		$("#div_main").show()
		$("#div_menu").hide()

		toggle_menu = 0
	}
}