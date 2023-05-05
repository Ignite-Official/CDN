let toggle_menu = 0

function menu() {
	let class_btn = "inline-flex justify-center items-center text-sm text-white rounded-lg ml-[12px] w-[24px] h-[24px] hover:bg-[#D9D9D9] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"

	// 메뉴 열기
	if (toggle_menu == 0) {
		$("#div_main").hide()
		$("#div_menu").show()
		document.getElementById("btn_menu_opened").className = class_btn
		document.getElementById("btn_menu_closed").className = "hidden"
		
		toggle_menu = 1

	// 메뉴 닫기
	} else {
		$("#div_main").show()
		$("#div_menu").hide()
		document.getElementById("btn_menu_opened").className = "hidden"
		document.getElementById("btn_menu_closed").className = class_btn

		toggle_menu = 0
	}
}