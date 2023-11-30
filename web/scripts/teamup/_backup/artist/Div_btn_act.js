function Div_btn_act(props) {
	const btnList = Object.keys(props.act).map((btn_data) =>
		<button type="button" 
				class="w-fit min-w-[24px] max-w-[84px] px-[8px] h-[20px] flex justify-center items-center
						border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 
						hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
			<p class="text-[11px] font-[600] text-[#3B3B3B] truncate ...">{props.act[btn_data].name}</p>
		</button>
	)

	return (
		<div class="flex flex-row space-x-[6px]">
			{btnList}
		</div>
	)
}