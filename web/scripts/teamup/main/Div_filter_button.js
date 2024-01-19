function Div_filter_button(props) {
	return (
		<div class="w-full space-x-[8px]" onClick={props.function}>
			<span class="text-[#8B8B8B] font-[600] text-[16px]">{props.title}</span>
			<span class="text-[#AE9DE3] font-[600] text-[16px]">{props.content}</span>
		</div>
	)
}