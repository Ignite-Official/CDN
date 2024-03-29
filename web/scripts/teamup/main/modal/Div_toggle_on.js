function Div_toggle_on(props) {
	return (
		<label class="relative inline-flex items-center cursor-pointer"
			onClick={props.function}>
			<input type="checkbox" value="" class="sr-only peer" checked />
			<div class="w-11 h-6 bg-gray-200 rounded-full peer 
						peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
						rtl:peer-checked:after:-translate-x-full after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
			<span class="ms-3 text-sm font-medium text-white">{props.label}</span>
		</label>
	)
}