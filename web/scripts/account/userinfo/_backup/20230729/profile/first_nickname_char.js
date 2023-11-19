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