/*************/
/* Variables */
/*************/
let checker_phone_number = 0
let checker_password_length = 0
let checker_password_confirm_equal = 0

let toggle_txt_password_visible = 0
let toggle_txt_password_confirm_visible = 0



/*************/
/* ClassName */
/*************/

let class_check_text_gray = "flex flex-row text-[#8B8B8B] text-[12px] font-[500] space-x-[7.67px]"
let class_check_text_red = "flex flex-row text-[#FA5252] text-[12px] font-[500] space-x-[7.67px]"
let class_check_text_green = "flex flex-row text-[#40C057] text-[12px] font-[500] space-x-[7.67px]"



/*************/
/* Functions */
/*************/

// Check 메시지
function Div_check_msg(props) {
	return (
		<div class={props.class}>
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.83342 12.8334L13.7084 6.95835L12.5417 5.79169L7.83342 10.5L5.45841 8.12502L4.29175 9.29169L7.83342 12.8334ZM9.00008 17.3334C7.8473 17.3334 6.76397 17.1145 5.75008 16.6767C4.73619 16.2395 3.85425 15.6459 3.10425 14.8959C2.35425 14.1459 1.76064 13.2639 1.32341 12.25C0.885637 11.2361 0.666748 10.1528 0.666748 9.00002C0.666748 7.84724 0.885637 6.76391 1.32341 5.75002C1.76064 4.73613 2.35425 3.85419 3.10425 3.10419C3.85425 2.35419 4.73619 1.7603 5.75008 1.32252C6.76397 0.885298 7.8473 0.666687 9.00008 0.666687C10.1529 0.666687 11.2362 0.885298 12.2501 1.32252C13.264 1.7603 14.1459 2.35419 14.8959 3.10419C15.6459 3.85419 16.2395 4.73613 16.6767 5.75002C17.1145 6.76391 17.3334 7.84724 17.3334 9.00002C17.3334 10.1528 17.1145 11.2361 16.6767 12.25C16.2395 13.2639 15.6459 14.1459 14.8959 14.8959C14.1459 15.6459 13.264 16.2395 12.2501 16.6767C11.2362 17.1145 10.1529 17.3334 9.00008 17.3334ZM9.00008 15.6667C10.8612 15.6667 12.4376 15.0209 13.7292 13.7292C15.0209 12.4375 15.6667 10.8611 15.6667 9.00002C15.6667 7.13891 15.0209 5.56252 13.7292 4.27085C12.4376 2.97919 10.8612 2.33335 9.00008 2.33335C7.13897 2.33335 5.56258 2.97919 4.27091 4.27085C2.97925 5.56252 2.33341 7.13891 2.33341 9.00002C2.33341 10.8611 2.97925 12.4375 4.27091 13.7292C5.56258 15.0209 7.13897 15.6667 9.00008 15.6667Z"
					  fill={props.color}/>
			</svg>
			<span>{props.text}</span>
		</div>
	)
}

// "동의하고 가입하기 버튼"
function Div_btn_submit(props) { 
	return (
		<button type="button" class={props.class}
				onClick={props.function}>
			동의하고 가입하기
		</button>
	);
 }


// 휴대폰 번호의 길이 확인
function check_phone_number() {
	// 숫자가 아닌 값은 되돌리기
	document.getElementById("txt_phone").value = document.getElementById("txt_phone").value.replace(/[^0-9]/g, '')

	// 입력한 휴대폰 번호의 길이가 11보다 작은 경우
	if (document.getElementById("txt_phone").value.trim().length < 11) {
		checker_phone_number = 0

	// 입력한 비밀번호의 길이가 11 이상인 경우
	} else {
		checker_phone_number = 1
	}

	// "동의하고 가입하기" 버튼의 상태 변경
	check_all_textbox()
}


// 입력한 비밀번호의 길이 확인
function check_password_length() {
	// 입력한 비밀번호의 길이가 8보다 작은 경우
	if (document.getElementById("txt_password").value.trim().length < 8) {
		ReactDOM.render(<Div_check_msg class={class_check_text_red} 
									   color="#FA5252"
									   text="최소 8문자 이상" />, document.getElementById("txt_check_password_len"))
		checker_password_length = 0

	// 입력한 비밀번호의 길이가 8 이상인 경우
	} else {
		ReactDOM.render(<Div_check_msg class={class_check_text_green} 
									   color="#40C057" 
									   text="최소 8문자 이상" />, document.getElementById("txt_check_password_len"))
		checker_password_length = 1
	}

	// "동의하고 가입하기" 버튼의 상태 변경
	check_all_textbox()
}


// 비밀번호와 비밀번호 확인이 일치한지 확인
function check_password_confirm_equal() {
	checker_password_confirm_equal = 0

	// 비밀번호가 입력되지 않은 경우
	if (document.getElementById("txt_password").value.trim() == "" || document.getElementById("txt_password").value.trim() == null) {
		ReactDOM.render(<Div_check_msg class={class_check_text_red} 
									   color="#FA5252"
									   text="비밀번호가 입력되지 않음" />, document.getElementById("txt_check_password_confirm_equal"))

	// 비밀번호 확인이 입력되지 않은 경우
	} else if (document.getElementById("txt_password_confirm").value.trim() == "" || document.getElementById("txt_password_confirm").value.trim() == null) {
		ReactDOM.render(<Div_check_msg class={class_check_text_red} 
									   color="#FA5252"
									   text="비밀번호가 입력되지 않음" />, document.getElementById("txt_check_password_confirm_equal"))

	// 비밀번호와 비밀번호 확인이 일치하지 않은 경우
	} else if (document.getElementById("txt_password").value.trim() != document.getElementById("txt_password_confirm").value.trim()) {
		ReactDOM.render(<Div_check_msg class={class_check_text_red} 
									   color="#FA5252"
									   text="비밀번호 확인 불일치" />, document.getElementById("txt_check_password_confirm_equal"))

	// 비밀번호와 비밀번호 확인이 일치한 경우
	} else {
		ReactDOM.render(<Div_check_msg class={class_check_text_green} 
									   color="#40C057" 
									   text="비밀번호 확인 일치" />, document.getElementById("txt_check_password_confirm_equal"))
		checker_password_confirm_equal = 1
	}

	// "동의하고 가입하기" 버튼의 상태 변경
	check_all_textbox()
}


// 모든 값이 올바르게 입력되었는지 확인
function check_all_textbox() {
	// 모든 값이 올바르게 입력된 경우
	if (checker_phone_number + checker_password_length + checker_password_confirm_equal == 3) {
		ReactDOM.render(<Div_btn_submit class="bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg" 
										function={() => document.getElementById('form_sign_up').submit()}/>, document.getElementById("btn_submit"))

	// 하나 이상의 값이 올바르게 입력되지 않은 경우
	} else {
		ReactDOM.render(<Div_btn_submit class="bg-[#EDEDED] text-[18px] text-[#A4A4A4] font-[600] w-[328px] h-[48px] rounded-lg cursor-not-allowed" 
										function=""/>, document.getElementById("btn_submit"))
	}   
}


// text box <-> password box (눈 모양 아이콘을 클릭했을 때)
function text_to_password(id) {
		
	// 비밀번호
	if (id == "txt_password") {

		// 
		if (toggle_txt_password_visible == 0) {
			toggle_txt_password_visible = 1
			document.getElementById("txt_password").type = "text"

		} else {
			toggle_txt_password_visible = 0
			document.getElementById("txt_password").type = "password"

		}

	// 비밀번호 확인
	} else {
	 
		if (toggle_txt_password_confirm_visible == 0) {
			toggle_txt_password_confirm_visible = 1
			document.getElementById("txt_password_confirm").type = "text"

		} else {
			toggle_txt_password_confirm_visible = 0
			document.getElementById("txt_password_confirm").type = "password"

		}
	}
}