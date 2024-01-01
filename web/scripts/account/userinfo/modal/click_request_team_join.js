async function click_request_team_join(uuid_team) {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('uuid_receiver', userdata.userinfo.uuid);
	request_data.append('uuid_sender', gv_username);
	request_data.append('uuid_team', uuid_team);

	const data = await fetch("/teamup/ajax_request_team_join/", {
					 method: "post", 
					 headers: { "X-CSRFToken": getCookie("csrftoken"), },
					 body: request_data
					 })
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (data.checker == "NOTEXIST") {
		alert("영입 요청이 완료되었습니다.");
	} else if (data.checker == "REQUESTED") {
		alert("이미 영입 요청을 하였습니다.");
	} else if (data.checker == "EXIST") {
		alert("이미 팀에 소속되어 있습니다.");
	} else if (data.checker == "WAITING") {
		alert("해당 팀에 가입 신청을 한 아티스트이므로, 팀 멤버에 합류하였습니다.");
	}
}