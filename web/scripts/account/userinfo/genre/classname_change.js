// 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change(id) {
	let class_focused = "rounded-lg w-[98px] h-[98px] bg-account-genre-focus focus:bg-center mb-[14px] ml-[8px] mr-[8px] hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F] justify-items-center text-white"
	let class_not_focused = "rounded-lg w-[98px] h-[98px] bg-[#5F5F5F] focus:bg-center mb-[14px] ml-[8px] mr-[8px] hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F] justify-items-center text-white"

	// 이미 선택된 장르인 경우
	if (genre_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		genre_selected_list = genre_selected_list.filter((element) => element !== id)

	} else if (genre_selected_list.length < 3) {
			document.getElementById(id).className = class_focused
			genre_selected_list.push(id)
	}

	btn_submit_enable()
}