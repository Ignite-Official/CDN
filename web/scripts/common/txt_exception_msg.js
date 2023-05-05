function txt_exception_msg(top, bottom) {
	function txt_msg(props) {
		<div class="flex flex-col justify-center items-center space-y-[6px]">
			<span class="text-[#A4A4A4] text-[16px] font-[700]">
				{props.msg_top}
			</span>
	
			<span class="text-[#727272] text-[12px] font-[500]">
				{props.msg_bottom}
			</span>
		</div>
	}

	ReactDOM.render(<txt_msg msg_top={top} msg_bottom={bottom} />, document.getElementById("txt_exception_msg"))
}