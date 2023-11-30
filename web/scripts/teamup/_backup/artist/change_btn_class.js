function change_btn_class(sort_method) {
	let class_btn_enabled = "w-fit h-[26px] px-[10px] bg-[#340BB8] rounded-xl text-white font-[700] text-[12px]"
	let class_btn_disabled = "w-fit h-[26px] px-[10px] bg-transparent rounded-xl text-[#5F5F5F] border-2 border-[#5F5F5F] font-[700] text-[12px]"
	
	if (sort_method == "date_joined") {
		document.getElementById('btn_sort_method_date_joined').className = class_btn_enabled
		document.getElementById('btn_sort_method_total_cnt').className = class_btn_disabled
		document.getElementById('btn_sort_method_last_login').className = class_btn_disabled
	} else if (sort_method == "total_cnt") {
		document.getElementById('btn_sort_method_date_joined').className = class_btn_disabled
		document.getElementById('btn_sort_method_total_cnt').className = class_btn_enabled
		document.getElementById('btn_sort_method_last_login').className = class_btn_disabled
	} else if (sort_method == "last_login") {
		document.getElementById('btn_sort_method_date_joined').className = class_btn_disabled
		document.getElementById('btn_sort_method_total_cnt').className = class_btn_disabled
		document.getElementById('btn_sort_method_last_login').className = class_btn_enabled
	}
}