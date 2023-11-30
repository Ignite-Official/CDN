function change_btn_class(sort_method) {
	let class_btn_enabled = "w-fit h-[26px] px-[10px] bg-[#340BB8] rounded-xl text-white font-[700] text-[12px]"
	let class_btn_disabled = "w-fit h-[26px] px-[10px] bg-transparent rounded-xl text-[#5F5F5F] border-2 border-[#5F5F5F] font-[700] text-[12px]"
	
	if (sort_method == "total_cnt") {
		document.getElementById('btn_sort_method_total_cnt').className = class_btn_enabled
		document.getElementById('btn_sort_method_created_at').className = class_btn_disabled
	} else if (sort_method == "created_at") {
		document.getElementById('btn_sort_method_total_cnt').className = class_btn_disabled
		document.getElementById('btn_sort_method_created_at').className = class_btn_enabled
	}
}