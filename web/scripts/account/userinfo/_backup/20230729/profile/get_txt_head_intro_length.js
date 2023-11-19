// 한줄 자기소개에 입력한 문장의 글자 개수를 센다.
function get_txt_head_intro_length() {
	function Div_txt_head_intro_len(props) {
		return(
			<span class="text-[#8B8B8B] text-[12px] font-[500]">{props.len}/30</span>
		)
	}

	// 텍스트박스에 입력한 값 (한줄 자기소개)
	let txt_head_intro_len = document.getElementById("txt_head_intro").value.trim()

	if (txt_head_intro_len.length <= 30) {
		ReactDOM.render(<Div_txt_head_intro_len len={txt_head_intro_len.length.toString()} />, document.getElementById("txt_head_intro_len"))
	}
}