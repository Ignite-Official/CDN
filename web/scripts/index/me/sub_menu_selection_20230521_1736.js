// 프로필 / 포트폴리오 메뉴 선택 스크립트
function sub_menu_selection(mode = "portfolio") {
	let class_div_active = "pt-[16px]"
	let class_div_inactive = "pt-[16px] hidden"
	let class_menu_active = "flex justify-center items-center w-[180px] h-[24px] pb-[12px] border-b-4 border-white text-white cursor-pointer"
	let class_menu_inactive = "flex justify-center items-center w-[180px] h-[24px] pb-[12px] text-[#4B4B4B] cursor-pointer"

	if (mode == "portfolio") {
		document.getElementById("div_portfolio").className = class_div_active
		document.getElementById("div_profile").className = class_div_inactive
		document.getElementById("sub_menu_portfolio").className = class_menu_active
		document.getElementById("sub_menu_profile").className = class_menu_inactive
		toggle_sub_menu_portfolio = 1
		toggle_sub_menu_profile = 0

	} else if (mode == "profile") {
		document.getElementById("div_portfolio").className = class_div_inactive
		document.getElementById("div_profile").className = class_div_active
		document.getElementById("sub_menu_portfolio").className = class_menu_inactive
		document.getElementById("sub_menu_profile").className = class_menu_active
		toggle_sub_menu_portfolio = 0
		toggle_sub_menu_profile = 1
		
	}

	// 버튼 모양 변경
	if (toggle_btn_bottom == 1) {
		btn_bottom_change()
	}
}

btn_bottom_showhide()