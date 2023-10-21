// 인증 이메일 전송
async function send_auth_email(email) {

	const data = await fetch("/account/ajax_send_auth_email/?email=" + email)
					.then(res=> { return res.json(); })
					.then(res=> { return res; });        
}