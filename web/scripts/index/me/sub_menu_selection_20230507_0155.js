let toggle_sub_menu_portfolio = 1
let toggle_sub_menu_profile = 0
let toggle_btn_bottom = 0

let class_btn = "bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center mt-[150px]"


// 프로필 / 포트폴리오 메뉴 선택 스크립트
function sub_menu_selection(mode = "portfolio") {
	let class_div_active = "pt-[16px]"
	let class_div_inactive = "pt-[16px] hidden"
	let class_menu_active = "flex justify-center items-center w-[180px] h-[24px] pb-[12px] border-b-4 border-white text-white cursor-pointer"
	let class_menu_inactive = "flex justify-center items-center w-[180px] h-[24px] pb-[12px] text-[#4B4B4B] cursor-pointer"

	if (mode == "portfolio") {
		document.getElementById("div_portfolio").className = class_div_active
		document.getElementById("div_profile").className = class_div_inactive
		document.getElementById("sub_menu_portfolio").className = class_menu_active
		document.getElementById("sub_menu_profile").className = class_menu_inactive
		toggle_sub_menu_portfolio = 1
		toggle_sub_menu_profile = 0

	} else if (mode == "profile") {
		document.getElementById("div_portfolio").className = class_div_inactive
		document.getElementById("div_profile").className = class_div_active
		document.getElementById("sub_menu_portfolio").className = class_menu_inactive
		document.getElementById("sub_menu_profile").className = class_menu_active
		toggle_sub_menu_portfolio = 0
		toggle_sub_menu_profile = 1
		
	}

	// 버튼 모양 변경
	if (toggle_btn_bottom == 1) {
		btn_bottom_change()
	}
}


// 포트폴리오 수정하기 / 프로필 수정하기 버튼
function Div_btn_botton(props) {
	return(
		<button type="button" onClick={props.function} class={props.class}>{props.text}</button>
	)
}

// 포트폴리오 수정하기 / 프로필 수정하기 버튼을 보여줄지 여부
async function btn_bottom_showhide() {
	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_portfolio_info/", {
					method: "post", 
					headers: {
						"X-CSRFToken": getCookie("csrftoken"),
					},
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 로그인 한 유저에게만 보여준다
	if (data.checker == "TRUE") {
		toggle_btn_bottom = 1

		if (toggle_sub_menu_portfolio == 1) {
			ReactDOM.render(<Div_btn_botton class={class_btn} text="포트폴리오 수정하기" />, document.getElementById("btn_bottom"))
		} else if (toggle_sub_menu_profile == 1) {
			ReactDOM.render(<Div_btn_botton class={class_btn} text="프로필 수정하기" />, document.getElementById("btn_bottom"))
		}
	}
}

function btn_bottom_change() {
	if (toggle_btn_bottom == 1 && toggle_sub_menu_portfolio == 1) {
		ReactDOM.render(<Div_btn_botton class={class_btn} text="포트폴리오 수정하기" />, document.getElementById("btn_bottom"))
	} else if (toggle_btn_bottom == 1 && toggle_sub_menu_profile == 1) {
		ReactDOM.render(<Div_btn_botton class={class_btn} text="프로필 수정하기" />, document.getElementById("btn_bottom"))
	}
}

btn_bottom_showhide()