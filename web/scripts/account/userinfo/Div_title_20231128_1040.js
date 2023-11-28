function Div_title(props) {
	return (
		<div class="grid grid-cols-2 justify-center items-center w-full h-[26px] space-y-[8px]">
			<div class="flex flex-row justify-start items-center h-full">
				<p class="text-white font-[700] text-[20px] text-start">
					{props.text}
				</p>
			</div>
			{
				props.more == true
				?   <div class="flex flex-row justify-end items-center h-full">
						<p class="text-[#AE9DE3] font-[600] text-[16px] text-end cursor-pointer" onClick={props.function}>
							더 보기
						</p>
					</div>
				: ""
			}

		</div>
	)
}