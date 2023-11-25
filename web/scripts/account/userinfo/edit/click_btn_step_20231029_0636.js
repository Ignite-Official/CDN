// 다음 버튼을 눌렀을 때 발생하는 이벤트
function click_btn_step() {
	if (step_number == 1) {
		document.getElementById("div_userinfo_step1").className = "hidden"
		document.getElementById("div_userinfo_step2").className = "flex flex-col justify-center items-center text-start w-full space-y-[40px]"
		document.getElementById("btn_complete").className = "rounded-lg w-[85px] h-[40px] bg-red-500 text-white text-[16px] font-[600] hover:bg-red-600 hover:border hover:border-white"
		document.getElementById("btn_step").innerText = "이전"
		step_number = 2
	} else {
		document.getElementById("div_userinfo_step1").className = "flex flex-col justify-center items-center text-start w-full space-y-[40px]"
		document.getElementById("div_userinfo_step2").className = "hidden"
		document.getElementById("btn_complete").className = "hidden"
		document.getElementById("btn_step").innerText = "다음"
		step_number = 1
	}
}