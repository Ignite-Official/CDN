async function get_team_info() {
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	const data = await fetch("/get_team_info/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });

	ReactDOM.render(<Div_team_info data={data} />, document.getElementById("div_team_info"))


	if (current_email == "None" || current_email == "") {
		//
		
	} else if (data.info.check_creator == "Creator") {
		ReactDOM.render(<Div_btn_submit_triple text1 = {"팀업 입장"} 
											  class1 = {class_btn_submit_enabled + " w-[100px] mx-[3px]"}
										   function1 = {() => team_enter(data.info.uuid)}
											   text2 = {"팀업 수정"} 
											  class2 = {class_btn_submit_disabled + " w-[100px] mx-[3px] cursor-not-allowed"}
											   text3 = {"팀업 해체"} 
											  class3 = {class_btn_submit_alert + " w-[100px] mx-[3px]"}
										   function3 = {() => team_remove(data.info.uuid)}/>, document.getElementById("btn_bottom"))
		
	} else {
		// 팀에 조인되지 않았고 요청도 하지 않은 경우
		if (data.info.check_user == -1 && data.info.teamup_available == "YES") {
			ReactDOM.render(<Div_btn_submit text={"팀업 요청하기"} 
											class={class_btn_submit_enabled + " w-[328px]"}
											function = {() => team_join('join')} />, document.getElementById("btn_bottom"))

		// 팀업 요청을 하였지만, 아직 허락되지 않은 경우
		} else if (data.info.check_user == 0 && data.info.teamup_available == "YES") {
			ReactDOM.render(<Div_btn_submit text={"팀업 요청 취소하기"} 
											class={class_btn_submit_enabled + " w-[328px]"}
											function = {() => team_join('cancel')} />, document.getElementById("btn_bottom"))

		// 이미 팀에 합류한 경우
		} else if (data.info.check_user == 1) {
			ReactDOM.render(<Div_btn_submit_dual text1 = {"팀업 입장"} 
												class1 = {class_btn_submit_enabled + " w-[160px] mx-[3px]"}
											 function1 = {() => team_enter(data.info.uuid)}
												 text2 = {"팀업 나가기"} 
												class2 = {class_btn_submit_alert + " w-[160px] mx-[3px]"}
											 function2 = {() => team_exit()}/>, document.getElementById("btn_bottom"))
		}
	}
}