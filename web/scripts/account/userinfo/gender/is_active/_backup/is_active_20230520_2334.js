// 성별 가져오기
async function get_gender() {
	const data = await fetch("/account/ajax_get_gender/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (data.gender != "Unknown") {
		selected_gender = data.gender
		if (data.gender == "남성") {
			select_btn_gender('male');
		} else if (data.gender == "여성") {
			select_btn_gender('female');
		}
	}
	btn_submit_enable()
}

get_gender()


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
		const request_data = new FormData();
		request_data.append('txt_gender', selected_gender);

		const data = await fetch("/account/ajax_change_gender/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

		if (data.checker == "FAILED") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="정보가 수정되지 않았습니다." />, document.getElementById("div_alert"))
											
		} else if (data.checker == "SAME") {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_failed}
											class_button={class_card_button_failed} 
											text="이미 선택한 성별로 설정되어 있습니다." />, document.getElementById("div_alert"))

		} else {
			document.getElementById("div_alert").className = class_div_alert
			ReactDOM.render(<Div_alert class_card={class_card_success}
											class_button={class_card_button_success} 
											text="정보가 수정되었습니다." />, document.getElementById("div_alert"))
		}

	setTimeout(function() { 
		document.getElementById("div_alert").className = "hidden"
	}, 1500);
}