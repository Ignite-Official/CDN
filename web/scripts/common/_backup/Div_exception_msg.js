// 예외처리 화면에서 출력해줄 메시지
function Div_exception_msg(props) {
	return(
		<div class="flex flex-col justify-center items-center space-y-[6px]">
			<span class="text-[#A4A4A4] text-[16px] font-[700]">
				{props.top}
			</span>
	
			<span class="text-[#727272] text-[12px] font-[500]">
				{props.bottom}
			</span>
		</div>
	)
}