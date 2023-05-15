// 계정명, 닉네임 가져오기
async function get_account_and_nickname() {
	const data = await fetch("/account/ajax_get_account_and_nickname/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	document.getElementById('txt_account').value = data.account
	document.getElementById('txt_nickname').value = data.nickname
	ReactDOM.render(<Div_profile_img nickname={data.nickname.charAt(0)} />, document.getElementById("div_profile_img"))
					
}

get_account_and_nickname()