function Div_sub_title(props) {
	return (
		<div class="flex flex-col justify-start items-center w-full space-y-[8px]">
			<p class="flex flex-row justify-start items-center space-x-[6px] text-white font-[600] text-[16px] text-start w-full">
				<img src={props.img_url} class="w-6 h-6 mr-[6px]"/>
				{props.title}                       
			</p>
			<p class="text-[#A3A3A3] font-[500] text-[14px] w-full text-start" id={props.id_text}>
				{props.text}
			</p>
		</div>
	)
}