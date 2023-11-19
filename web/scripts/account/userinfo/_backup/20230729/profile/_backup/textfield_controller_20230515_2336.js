// 프로필 이미지에 닉네임의 첫 글자를 보여준다
function first_nickname_char() {
	// 텍스트박스에 입력한 값 (닉네임)
	let nickname = document.getElementById("txt_nickname").value.trim()

	// 값이 입력되지 않음
	if (nickname == "" || nickname == null) {
		ReactDOM.render(<Div_profile_img nickname="" />, document.getElementById("div_profile_img"))
		return false

	// 값이 입력됨
	} else {
		ReactDOM.render(<Div_profile_img nickname={nickname.charAt(0)} />, document.getElementById("div_profile_img"))
		return true
	}
}



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