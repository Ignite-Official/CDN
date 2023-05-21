// 악기 - 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change_instrument(id, image_url) {
	let class_focused = "rounded-lg border border-[#5F5F5F] "
						+ "w-fit max-w-[150px] h-[48px] pt-[10px] pb-[10px] pl-[19.5px] pr-[19.5px] ml-[8px] mb-[8px] "
						+ "bg-[#292929] text-white "
						+ "hover:bg-[#292929] hover:text-white "
						+ "focus:bg-[#292929] focus:text-white"
	let class_not_focused = "rounded-lg border border-[#5F5F5F] "
						+ "w-fit max-w-[150px] h-[48px] pt-[10px] pb-[10px] pl-[19.5px] pr-[19.5px] ml-[8px] mb-[8px] "
						+ "bg-transparent text-[#5F5F5F] "
						+ "hover:bg-[#292929] hover:text-white "
						+ "bg-transparent text-[#5F5F5F]"

	// 이미 선택된 장르인 경우
	if (instrument_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		instrument_selected_list = instrument_selected_list.filter((element) => element !== id)

	} else {
		document.getElementById(id).className = class_focused
		instrument_selected_list.push(id)
	}
}