function Div_online_disable(props) {
	return (
		<div class="flex flex-row justify-cetner items-center w-full space-x-[24px]">
			<p class="text-[#E5E5E5] font-[600] text-[14px] w-full text-start">
				온라인 가능 여부
			</p>
			<label class="relative inline-flex items-center cursor-pointer w-full"
				   onClick={() => click_toggle_online_available("YES")} >
				<input type="checkbox" value="" class="sr-only peer" />
				<div class="w-11 h-6 bg-gray-200 rounded-full 
							peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:bg-blue-600
							rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
							after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
				<span class="ms-3 text-sm font-medium text-[#AE9DE3] w-12">
					불가능
				</span>
			</label>
		</div>
	)
}