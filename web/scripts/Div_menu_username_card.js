function Div_menu_username_card(props) {
	return(
		<a class="flex flex-row justify-start items-center content-center ml-[24px] pt-[16px]"
			href={props.data.url_portfolio}>
			<div class="flex flex-row justify-center items-center
						bg-[#6337C1] w-[40px] h-[40px] rounded-full border-2 border-[#A4A4A4]">
				<span class="text-white text-[18px] font-[700]">
					{props.data.nickname.charAt(0)}
				</span>
			</div>

			<div class="flex flex-col space-y-[2px] ml-[12px]">
				<p class="text-white text-[14px] font-[500]">
					{props.data.nickname}
				</p>

				<p class="text-[#8B8B8B] text-[12px] font-[500]">
					{props.data.email}
				</p>
			</div>
		</a>
	)
}