// 2단계에서 "다음" 버튼 클릭 시 이벤트
function click_step2_btn_next() {
	ReactDOM.render(<Div_step step1={false} step2={false} step3={true} />, document.getElementById("div_step"))
	document.getElementById("div_content2").className = "hidden"
	document.getElementById("div_content3").className = "w-full space-y-[24px]"

	ReactDOM.render(<Div_btn_submit class_btn={class_btn_disabled} text={"가입하기"} function={null} />, document.getElementById("btn_submit"))        
}