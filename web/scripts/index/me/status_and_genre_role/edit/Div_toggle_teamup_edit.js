// 팀업 토글 (수정 모드)
function Div_toggle_teamup_edit(props) {
	console.log(props)
	let ischeck = false
	let text = "팀업 불가"
	if (props.teamup_available == "YES") {
		ischeck = true
		text = "팀업 가능"
	}

	return(
		<div class="flex flex-col justify-center items-center">
			<label class="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" class="sr-only peer" id="toggle_teamup" checked={ischeck} onClick={() => click_toggle_teamup()}/>
				<div class="w-11 h-6 bg-gray-200 rounded-full 
							peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white 
							after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
							after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#37B24D]"></div>
			</label>
			<span class="text-[#8B8B8B] text-[12px] font-[500] mt-[4px]">{text}</span>
		</div>
	)
}