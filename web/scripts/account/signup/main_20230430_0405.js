/*************/
/* ClassName */
/*************/

// "이메일로 본인 인증하기" 버튼
let class_btn_enabled = "bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center"
let class_btn_disabled = "bg-[#EDEDED] text-[18px] text-[#A4A4A4] font-[600] w-[328px] h-[48px] rounded-lg text-center cursor-not-allowed"

// 버튼 상단 메시지
let class_desc_reauth_msg = "container flex flex-row text-white space-x-[8px] ml-[10px]"



/*************/
/* Functions */
/*************/

// 이메일로 인증하기 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" class={props.class_btn} onClick={props.function}>
			<svg class={props.class_load_spin}
				aria-hidden="true" role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
			</svg>
			{props.text}
		</button>
	)
}


// 텍스트박스 하단 메시지
function Div_desc_err_msg(props) { return (<span class={props.class}>{props.text}</span>) }


// 버튼 상단 메시지
function Div_desc_reauth_msg(props) {
	return (
		<div class={props.class_div}>
			<svg class={props.class_svg}
				width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14C11 13.7167 10.9043 13.479 10.713 13.287C10.521 13.0957 10.2833 13 10 13C9.71667 13 9.47933 13.0957 9.288 13.287C9.096 13.479 9 13.7167 9 14C9 14.2833 9.096 14.5207 9.288 14.712C9.47933 14.904 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#FA5252"/>
			</svg>
			<span class="text-white text-[14px] font-[600]">{props.text}</span>
		</div>   
	)
}


// 이메일 형식 확인
function email_form_check() {
	// 텍스트박스에 입력한 값 (이메일)
	let email = document.getElementById("txt_email").value.trim()

	// 이메일 체크 정규식
	let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

	// 값이 입력되지 않음
	if (email == "" || email == null) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[244px]"}
										class_load_spin="hidden"
										text="이메일로 본인인증 하기"
										function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="" text="이메일을 입력해주세요." />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="hidden" text="" />, document.getElementById("desc_reauth_msg"))

		return false

	// 이메일 형식 체크 실패
	} else if (!regExp.test(email)) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[244px]"}
										class_load_spin="hidden"
										text="이메일로 본인인증 하기"
										function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="" text="형식이 올바르지 않습니다." />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="hidden" text="" />, document.getElementById("desc_reauth_msg"))

		return false

	// 이메일 형식 체크 성공
	} else {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled + " mt-[262px]"}
										class_load_spin="hidden"
										text="이메일로 본인인증 하기"
										function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="hidden" text="" />, document.getElementById("desc_reauth_msg"))

		return true
	}
}


// 회원 가입, 인증 대기 목록에서 이메일 존재 여부 확인
async function email_exist_check() {
	// 버튼을 "로딩중" 스타일로 변경
	ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[262px]"}
									class_load_spin="inline w-4 h-4 mr-3 text-gray-200 animate-spin"
									text="이메일로 본인인증 하기"
									function={() => email_exist_check()} />, document.getElementById("btn_submit"))
	ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
	ReactDOM.render(<Div_desc_reauth_msg class_div="hidden" />, document.getElementById("desc_reauth_msg"))

	// 텍스트박스에 입력한 값 (이메일)
	let email = document.getElementById("txt_email").value.trim()

	const data = await fetch("/account/ajax_email_exist_check/?email=" + email)
					.then(res=> { return res.json(); })
					.then(res=> { return res; });


	// 이메일 형식 체크
	if (!email_form_check()) {
		return false

	// 가입되어있지 않으면서 인증 대기중인 경우
	} else if (data.check_joined == 0 && data.check_authorization == 1) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[19px]"}
										class_load_spin="hidden"
										text={data.created_at + "에 재시도 가능"} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="container flex flex-row space-x-[8px] ml-[10px] mt-[222px]" 
											text="이미 인증 요청이 발송되었습니다." />, document.getElementById("desc_reauth_msg"))

		
	// 가입되어있지 않으면서 인증이 만료된 경우
	} else if (data.check_joined == 0 && data.check_authorization == 2) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled + " mt-[19px]"}
										class_load_spin="hidden"
										text="다시 인증하기"
										function={() => location.href="/account/signup/auth/?email=" + email}  />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="container flex flex-row space-x-[8px] ml-[10px] mt-[222px]" 
											text="인증기간이 만료되었습니다." />, document.getElementById("desc_reauth_msg"))


	// 이미 회원 가입된 경우
	} else if (data.check_joined == 1) {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[244px]"}
										class_load_spin="hidden"
										text="이메일로 본인인증 하기"
										function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="hidden" />, document.getElementById("desc_reauth_msg"))

	// 회원 가입 진행
	} else {
		location.href="/account/signup/auth/?email=" + email
		
	}
}


// 잘못된 경로로 진입하여 이메일 인증 과정으로 돌아왔을 때 메시지를 출력
function return_msg(mode) {
	// 인증 신청이 없었던 경우
	if (mode == "Wrong" || mode == "Failed") {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[19px]"}
								class_load_spin="hidden"
								text="이메일로 본인인증 하기"
								function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="container flex flex-row space-x-[8px] ml-[10px] mt-[222px]" 
											text="잘못된 경로로 진입하였습니다." />, document.getElementById("desc_reauth_msg"))
	} else if (mode == "Expired") {
		ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled + " mt-[19px]"}
								class_load_spin="hidden"
								text="이메일로 본인인증 하기"
								function={() => email_exist_check()} />, document.getElementById("btn_submit"))
		ReactDOM.render(<Div_desc_err_msg class="hidden" text="" />, document.getElementById("desc_err_msg"))
		ReactDOM.render(<Div_desc_reauth_msg class_div="container flex flex-row space-x-[8px] ml-[10px] mt-[222px]" 
											text="인증기간이 만료되었습니다." />, document.getElementById("desc_reauth_msg"))
	}
}