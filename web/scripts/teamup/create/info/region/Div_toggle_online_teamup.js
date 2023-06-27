function Div_toggle_online_teamup() {
	let ischeck = false
	if (toggle_region_online == 1) {
		ischeck = true
	}

	return(
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" class="sr-only peer" id="toggle_teamup" checked={ischeck} onClick={() => click_toggle_online_teamup()}/>
			<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#37B24D]
						rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
						after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#37B24D]">
			</div>
		</label>
	)
}