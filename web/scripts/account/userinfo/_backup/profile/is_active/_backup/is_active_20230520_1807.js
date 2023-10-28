// 계정명, 닉네임 가져오기
async function get_account_and_nickname() {
	const data = await fetch("/account/ajax_get_account_and_nickname/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

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
	const class_div_alert = "fixed bottom-0 left-0 z-50 pb-[120px] w-full h-20 bg-backgroundblack flex justify-center items-center"
	const class_card_success = "flex w-fit p-4 mb-4 text-green-800 rounded-lg bg-green-50 cursor-pointer"
	const class_card_failed = "flex w-fit p-4 mb-4 text-red-800 rounded-lg bg-red-50 cursor-pointer"
	const class_card_button_success = "ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg inline-flex h-8 w-8"
	const class_card_button_failed = "ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg inline-flex h-8 w-8"


	// alert 메시지를 출력하기 위한 card
	function Div_alert(props) {
		return (
			<div id="card_alert" class={props.class_card} role="alert" data-dismiss-target="#card_alert" aria-label="Close">
				<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
				</svg>
				<span class="sr-only">Info</span>
				<div class="ml-3 text-sm font-medium">{props.text}</div>
			</div>
		)
	}


	// 계정명은 영어, 숫자만 입력 가능
	var account_reg = /^[A-Za-z\d$-_@$!%*#?]*$/;
	if (!account_reg.test(document.getElementById("txt_account").value.trim())) {
		document.getElementById("div_alert").className = class_div_alert
		ReactDOM.render(<Div_alert class_card={class_card_failed}
										class_button={class_card_button_failed} 
										text="계정명은 알파벳, 숫자, 일부 특수문자만 가능합니다." />, document.getElementById("div_alert"))

	} else {
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





		if (data.checker == "EXIST") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 닉네임, 계정명이 존재합니다." />, document.getElementById("div_alert"))
		} else if (data.checker == "FAILED") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="정보가 수정되지 않았습니다." />, document.getElementById("div_alert"))
		} else {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_success}
											class_button={class_card_button_success} 
											text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
		}    
	}

	setTimeout(function() { 
		document.getElementById("div_alert").className = "hidden"
	 }, 1500);
}

get_account_and_nickname()