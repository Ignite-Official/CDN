function set_main() {
	function Div_sub_main() {
		return (
			<div class="w-full">
				<div id="div_header" class="w-full"></div>

				<div id="div_contents" class="flex flex-col justify-center items-center w-full"></div>
			
				<div id="div_sender" class="w-full"></div>
			</div>
		)
	}

	ReactDOM.render(<Div_sub_main />, document.getElementById("div_sub_main"))   
	get_chat_teaminfo()
	get_chat_log(true)
}