function Div_teamup_enable(props) {
	return (
		<div class="flex flex-col w-full space-y-[12px]">
			<Div_left_sub_title title={"팀업가능 여부"} />
			<label class="relative inline-flex items-center cursor-pointer"
				onClick={() => click_toggle_teamup_available("NO")} >
				<input type="checkbox" value="" class="sr-only peer" checked />
				<div class="w-11 h-6 bg-gray-200 rounded-full 
							peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-green-600
							peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
							after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
				<span class="ms-3 text-sm font-medium text-green-600">
					가능
				</span>
			</label>
		</div>
	)
}