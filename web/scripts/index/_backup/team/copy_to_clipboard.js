function copy_to_clipboard(){
	var content = window.location.href.toString().replace("/edit/", "")
	var content = window.location.href.toString().replace("/chat/", "")

	navigator.clipboard.writeText(content)
		.then(() => {
		alert("팀 주소가 클립보드에 저장되었습니다.")
	})
		.catch(err => {})
}