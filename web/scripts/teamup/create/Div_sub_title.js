function Div_sub_title(props) {
	return (
		<div class="flex flex-col w-full space-y-[12px]">
			<p class="text-[#E5E5E5] font-[600] text-[16px]">
				{props.title}
			</p>
			{
				props.subtitle != null
				?   <p class="text-[#A3A3A3] font-[400] text-[12px]">
						{props.subtitle}
					</p>
				:   ""
			}
			
		</div>
	)
}