function check_txt_intro_len() {
	txt_intro = document.getElementById("txt_intro").value.trim()
	
	if (txt_intro.length > 0) {
		toggle_btn_submit = 1
		document.getElementById("btn_submit").className = "bg-[#340BB8] text-[18px] text-white font-[600] w-[224px] h-[48px] rounded-lg text-center"
	} else {
		toggle_btn_submit = 0
		document.getElementById("btn_submit").className = "bg-[#3B3B3B] text-[18px] text-[#727272] font-[600] w-[224px] h-[48px] rounded-lg text-center cursor-not-allowed"
	}
}