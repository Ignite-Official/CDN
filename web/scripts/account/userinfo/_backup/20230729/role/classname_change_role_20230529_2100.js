// 역할 - 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change_role(id, image_url) {
	let class_focused = "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
						+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
						+ "bg-" + image_url + "-hover"
						+ " hover:bg-" + image_url + "-hover"
						+ " focus:bg-" + image_url + "-hover"
	let class_not_focused = "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
						+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
						+ "bg-" + image_url 
						+ " hover:bg-" + image_url + "-hover"
						+ " focus:bg-" + image_url

	// 이미 선택된 장르인 경우
	if (role_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		role_selected_list = role_selected_list.filter((element) => element !== id)

	} else {
		document.getElementById(id).className = class_focused
		role_selected_list.push(id)
	}

	btn_submit_enable()
}