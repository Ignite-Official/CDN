let toggle_submit = 0

function toggle_btn_submit() {
	if (toggle_header_selection_toggle_region == 1 &&
		toggle_header_selection_toggle_gender == 1 &&
		toggle_header_selection_toggle_genre == 1 &&
		toggle_header_selection_toggle_role == 1 &&
		toggle_header_selection_toggle_due_date == 1
	   ) {
		document.getElementById("btn_submit").className = "bg-[#340BB8] text-[18px] text-white font-[600] w-[224px] h-[48px] rounded-lg text-center"
		toggle_submit = 1
		
	} else {
		document.getElementById("btn_submit").className = "bg-[#3B3B3B] text-[18px] text-[#727272] font-[600] w-[224px] h-[48px] rounded-lg text-center cursor-not-allowed"
		toggle_submit = 0
	}
}