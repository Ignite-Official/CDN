// 계정명, 닉네임 가져오기
async function get_account_and_nickname() {
	const data = await fetch("/account/ajax_get_account_and_nickname/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });
	console.log(data)

	document.getElementById('txt_account').value = data.account
	document.getElementById('txt_nickname').value = data.nickname
	ReactDOM.render(<Div_profile_img nickname={data.nickname.charAt(0)} />, document.getElementById("div_profile_img"))
	btn_submit_enable()
}

let class_btn_submit_enabled = "bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center"
let class_btn_submit_disabled = "bg-[#3B3B3B] text-[18px] text-[#727272] font-[600] w-[328px] h-[48px] rounded-lg text-center cursor-not-allowed"

// form 완료 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" id="btn_submit" onClick={props.function} class={props.class}>
			{props.text}
		</button>
	)
}


// 닉네임, 계정명이 모두 입력되어야 버튼이 활성화된다.
function btn_submit_enable() {
	let txt_nickname = document.getElementById("txt_nickname").value.trim();
	let txt_account = document.getElementById("txt_account").value.trim();

	if (txt_nickname.length > 0 && txt_account.length > 0) {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_enabled}
										text={btn_text} 
										function={() => submit()} />, document.getElementById("div_btn_submit"))
	} else {
		ReactDOM.render(<Div_btn_submit class={class_btn_submit_disabled}
										text={btn_text} 
										function={null} />, document.getElementById("div_btn_submit"))
	}
}


// 계정명, 닉네임 변경
async function submit() {
	const request_data = new FormData();
	request_data.append('txt_nickname', document.getElementById("txt_nickname").value.trim());
	request_data.append('txt_account', document.getElementById("txt_account").value.trim());

	const data = await fetch("/account/ajax_change_account_and_nickname/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
}


get_account_and_nickname()