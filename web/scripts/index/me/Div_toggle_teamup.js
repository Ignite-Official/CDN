// 팀업 토글
function Div_toggle_teamup(props) {
	return(
		<div class="flex flex-col justify-center items-center">
			<label class="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" id="toggle_teamup" value={props.teamup_available} class="sr-only peer" checked={props.checked}/>
				<div class="w-11 h-6 bg-gray-200 rounded-full peer
							peer-focus:ring-4 peer-focus:ring-[#37B24D]
							peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-[#37B24D]
							after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
							after:rounded-full after:h-5 after:w-5 after:transition-all">
				</div>
			</label>
			<span class="text-[#8B8B8B] text-[12px] font-[500] mt-[4px]">{props.text}</span>
		</div>
	)
}