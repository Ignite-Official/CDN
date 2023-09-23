function Div_main_card_title(props) {
	return (
		<div class="flex flex-row justify-between items-center text-start w-full">
			<div class="flex flex-row justify-between items-center space-x-[6px]">
				<img src={props.img_url} class="w-[26px] h-[26px] sm:w-[20px] sm:h-[20px] mr-[6px]" />
				<h2 class="text-white text-[24px] font-[700] sm:text-[20px] sm:font-[600]">{props.title}</h2>

			</div>

			{props.more_url != null
				?<a class="text-[#8C6BF7] text-[16px] font-[600] sm:text-[14px]" href={props.more_url}>더 보기</a>
				:""
			}
		</div>
	)
}