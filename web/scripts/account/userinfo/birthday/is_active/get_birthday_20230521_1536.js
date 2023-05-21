// 생년월일 가져오기
async function get_birthday() {
	const data = await fetch("/account/ajax_get_birthday/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (data.birthday != "9999.12.31") {
		document.getElementById('txt_birthday').value = data.birthday
	}
	btn_submit_enable()
}