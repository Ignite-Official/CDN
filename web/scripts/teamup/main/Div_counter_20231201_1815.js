function Div_counter(props) {
	return (
		<div class="flex flex-row justify-between items-center w-full">
			<div class="flex flex-row h-[24px] space-x-[8px] justify-start items-center">
				<span class="text-white font-[600] text-[20px] w-fit mb-4">
					{props.title}
				</span>
				<span class="text-[#AE9DE3] font-[600] text-[16px] w-fit mb-4">
					{props.counter}
				</span>
			</div>

			{
				props.button != null
				?   <div>
						<button type="button" 
								class="flex flex-row justify-center items-center bg-[#340BB8] text-white font-[600] text-[14px] px-[10px] py-[4px] rounded-lg
									   hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]"
								onClick={() => location.href='/teamup/create/'}>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/teamup_plus.svg" class="w-[18px] h-[18px] mr-[2px]" />
							팀 만들기                                
						</button>
					</div>
				:   ""
			}
			
		</div>
	)
}