function set_main() {
	function Div_main() {
		return (
			<div class="flex flex-col justify-center items-center px-[100px] py-[40px] md:px-[16px]">
				<div id="div_header" class="w-full"></div>

				<div id="div_contents" class="flex flex-col justify-center items-center w-full"></div>
			
				<div id="div_sender" class="w-full border border-gray-700"></div>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_main"))   
	get_chat_teaminfo()
	get_chat_log(true)
}