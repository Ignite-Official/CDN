function Div_counter(props) {
	return (
		<div class="flex flex-row h-[24px] space-x-[8px] justify-start items-center">
			<span class="text-white font-[600] text-[20px] w-fit mb-4">
				{props.title}
			</span>
			<span class="text-[#AE9DE3] font-[600] text-[16px] w-fit mb-4">
				{props.counter}
			</span>
		</div>
	)
}