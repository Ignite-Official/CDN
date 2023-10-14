// 로그인, 비밀번호 입력 값에 따른 이벤트
function input_checker() {
    let class_msg = "text-[#FA5252] text-[12px] font-[500] mb-[12px]"
    let class_btn_disabled = "text-[#A4A4A4] bg-[#EDEDED] font-medium rounded-xl text-sm w-full h-[48px] hover:bg-gray-200 focus:border focus:border-gray-300 cursor-not-allowed"
    let class_btn_enabled = "text-white bg-[#340BB8] font-medium rounded-xl text-sm w-full h-[48px] hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]"

    let checker_email = false
    let checker_password = false


    // 로그인 버튼
    function Div_btn_submit(props) {
        return (
            <button type="button" class={props.class_btn} onClick={props.function}>
                이메일로 로그인하기
            </button>
        )
    }
    
    // 오류 메시지
    function Div_desc_err_msg(props) { 
        return (
            <span class={props.class}>{props.text}</span>
        ) 
    }


    
    // 이메일을 입력하지 않음
    if (email_form_check("txt_email") == "NOT EXIST") {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="이메일을 입력해주세요." />, document.getElementById("desc_email_msg"))
        
    // 이메일 형식이 잘못되었음
    } else if (email_form_check("txt_email") == "FAILED") {
		ReactDOM.render(<Div_desc_err_msg class={class_msg} text="이메일 형식이 잘못되었습니다." />, document.getElementById("desc_email_msg"))

    // 이메일 형식이 올바르게 입력되었음
    } else {
        ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_email_msg"))
        checker_email = true

    }


    // 비밀번호를 입력하지 않음
    if (password_form_check("txt_password", 8) == "NOT EXIST") {
        ReactDOM.render(<Div_desc_err_msg class={class_msg} text="비밀번호를 입력해주세요." />, document.getElementById("desc_password_msg"))

    } else if (password_form_check("txt_password", 8) == "FAILED") {
        ReactDOM.render(<Div_desc_err_msg class={class_msg} text="비밀번호는 8자 이상 입력해주세요." />, document.getElementById("desc_password_msg"))
        
    } else {
        ReactDOM.render(<Div_desc_err_msg class={"hidden"} text="" />, document.getElementById("desc_password_msg"))
        checker_password = true

    }


    if (checker_email && checker_password) {
        ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => login_email_submit()} />, document.getElementById("btn_submit"))

    } else {
        ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} function={null} />, document.getElementById("btn_submit"))

    }
}