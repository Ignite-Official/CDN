async function get_userinfo() {
	const data = await fetch("/account/ajax_get_userinfo/")
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

	// 생년월일
	document.getElementById("txt_birthday").value = data.birthday

	// 성별
	if (data.gender == "남성") {
		document.getElementById("radio_gender_male").checked = true
	} else if (data.gender == "여성") {
		document.getElementById("radio_gender_male").checked = true
	}
	
	// 닉네임
	document.getElementById("txt_nickname").value = data.nickname

	// 한 줄 소개
	if (data.txt_intro_1line != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_1line").value = data.txt_intro_1line
	}

	// 자기소개
	if (data.txt_intro != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro").value = data.txt_intro
	}

	// 만들고 싶은 음악
	if (data.txt_intro_music != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_music").value = data.txt_intro_music
	}

	// 협업하고 싶은 사람
	if (data.txt_intro_collaboration != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_collaboration").value = data.txt_intro_collaboration
	}

}