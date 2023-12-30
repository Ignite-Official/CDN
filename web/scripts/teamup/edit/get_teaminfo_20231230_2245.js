async function get_teaminfo() {
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

	uuid_team = teamdata.teaminfo.uuid

	document.getElementById("txt_name").value = teamdata.teaminfo.name
	document.getElementById("txt_account").value = teamdata.teaminfo.account

	if (Object.keys(teamdata.gender).length != 1) {
		document.getElementById("check_gender_male").checked = true
		document.getElementById("check_gender_female").checked = true
	} else if (teamdata.gender[0].gender == "남성") {
		document.getElementById("check_gender_male").checked = true
	} else if (teamdata.gender[0].gender == "여성") {
		document.getElementById("check_gender_female").checked = true
	}

	document.getElementById("txt_due_date").value = teamdata.teaminfo.due_date
	document.getElementById("txt_intro").value = teamdata.teaminfo.txt_intro

	get_team_genre_list()
	get_team_role_list()
}