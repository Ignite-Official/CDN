// 모달 - 역할 입력 여부 체크
function check_txt_popup_role_add() {
	let txt_popup_role_add = document.getElementById("txt_popup_role_add").value.trim()

	if (txt_popup_role_add.length > 0) {
		check_txt_popup_role_add_toggle = 1
		document.getElementById("btn_popup_role_add_save").className = "text-white bg-[#340BB8] font-medium rounded-lg text-sm text-center w-[57px] h-[32px] cursor-pointer"
	} else {
		check_txt_popup_role_add_toggle = 0
		document.getElementById("btn_popup_role_add_save").className = "text-[#A4A4A4] bg-[#EDEDED] font-medium rounded-lg text-sm text-center w-[57px] h-[32px] cursor-not-allowed"
	}
}