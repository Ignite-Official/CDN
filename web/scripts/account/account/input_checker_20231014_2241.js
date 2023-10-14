// 로그인, 비밀번호 입력 값에 따른 이벤트
function input_checker() {
    let checker_email = false
    let checker_password = false

    let class_msg = "text-[#FA5252] text-[12px] font-[500] mb-[12px]"


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
        ReactDOM.render(<Div_btn_submit class_btn={class_btn_enabled} function={() => click_login_email_submit()} />, document.getElementById("btn_submit"))

    } else {
        ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} function={null} />, document.getElementById("btn_submit"))

    }
}