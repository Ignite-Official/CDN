async function set_main() {
	function Div_main() {
	   return (
			<div class="flex flex-col justify-center items-center px-[100px] md:px-[16px]">
				 <div id="div_header" class="w-full"></div>
			 
				 <div class="grid grid-cols-4 justify-center items-start w-full space-y-[24px] py-[40px] md:grid-cols-1">
					 <div id="div_left" class="w-full"></div>
					 <div id="div_right" class="col-span-3 w-full"></div>
				 </div>
			 </div>
	   )
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	teamdata = await fetch("/teamup/ajax_get_teaminfo/", {
										method: "post", 
										headers: { "X-CSRFToken": getCookie("csrftoken"), },
										body: request_data
										})
								 .then(res=> { return res.json(); })
								 .then(res=> { return res; });

	// 스켈레톤
	ReactDOM.render(<Div_main />, document.getElementById("div_main"))

	// 본문
	ReactDOM.render(<Div_header />, document.getElementById("div_header"))
	ReactDOM.render(<Div_left />, document.getElementById("div_left"))
	ReactDOM.render(<Div_right />, document.getElementById("div_right"))

	ReactDOM.render(<Div_modal_join />, document.getElementById("modal_join"));     // 가입 신청
	ReactDOM.render(<Div_modal_join_cancel />, document.getElementById("modal_join_cancel"));   // 가입 신청 취소
	ReactDOM.render(<Div_modal_delete />, document.getElementById("modal_delete"));     // 팀 삭제
	ReactDOM.render(<Div_modal_exit />, document.getElementById("modal_exit"));         // 팀 나가기

	get_genre_list()    // 장르 목록
	get_role_list()     // 역할 목록
	get_region_list()     // 역할 목록
	get_member_list()   // 현재 멤버 목록
	get_pending_list()  // 받은 요청 목록
	get_sending_list()  // 보낸 요청 목록
}