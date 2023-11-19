async function get_userinfo() {
	// 데이터 가져오기
	userdata = await fetch("/account/ajax_get_userinfo/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });


	/***** 장르 추가 *****/
	// 모달 안의 장르 목록 표시
	ReactDOM.render(<Div_genre_list data={userdata.genre} />, document.getElementById("div_genre_list"));

	// 모달 안의 장르 목록에서 이용자가 선택한 목록 ClassName 변경
	Object.keys(userdata.genre).map(function(i){
		if (userdata.genre[i].active == 1) {
			document.getElementById(userdata.genre[i].uuid).className = class_btn_act_selected
		}
	});

	// 프로필 등록 화면에서 이용자가 선택한 장르 목록 출력
	ReactDOM.render(<Div_modal_list data={userdata.genre}
									text={"선택한 장르가 없습니다."} />, document.getElementById("div_modal_genre_list"));
	


	/***** 역할 추가 *****/
	// 모달 안의 역할 목록 표시
	ReactDOM.render(<Div_role_list data={userdata.role} />, document.getElementById("div_role_list"));

	// 모달 안의 역할 목록에서 이용자가 선택한 목록 ClassName 변경
	Object.keys(userdata.role).map(function(i){
		if (userdata.role[i].active == 1) {
			document.getElementById(userdata.role[i].uuid).className = class_btn_act_selected
		}
	});

	// 프로필 등록 화면에서 이용자가 선택한 역할 목록 출력
	ReactDOM.render(<Div_modal_list data={userdata.role}
									text={"선택한 역할이 없습니다."} />, document.getElementById("div_modal_role_list"));
	

	/***** 악기 추가 *****/
	// 모달 안의 악기 목록 표시
	ReactDOM.render(<Div_instrument_list data={userdata.instrument} />, document.getElementById("div_instrument_list"));

	// 모달 안의 악기 목록에서 이용자가 선택한 목록 ClassName 변경
	Object.keys(userdata.instrument).map(function(i){
		if (userdata.instrument[i].active == 1) {
			document.getElementById(userdata.instrument[i].uuid).className = class_btn_act_selected
		}
	});

	// 프로필 등록 화면에서 이용자가 선택한 악기 목록 출력
	ReactDOM.render(<Div_modal_list data={userdata.instrument}
									text={"선택한 악기가 없습니다."} />, document.getElementById("div_modal_instrument_list"));

	
	
	// 생년월일
	document.getElementById("txt_birthday").value = userdata.userinfo.birthday

	// 성별
	if (userdata.userinfo.gender == "남성") {
		document.getElementById("radio_gender_male").checked = true
	} else if (userdata.userinfo.gender == "여성") {
		document.getElementById("radio_gender_male").checked = true
	}
	
	// 프로필 사진
	ReactDOM.render(<Div_profile_img name={userdata.userinfo.nickname} url_image_profile={userdata.userinfo.url_image_profile} />, document.getElementById("div_profile_img"));

	// 커버 사진
	ReactDOM.render(<Div_cover_img url_image_bg={userdata.userinfo.url_image_bg} />, document.getElementById("div_cover_img"));

	// 닉네임
	document.getElementById("txt_nickname").value = userdata.userinfo.nickname

	// 한 줄 소개
	if (userdata.userinfo.txt_intro_1line != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_1line").value = userdata.userinfo.txt_intro_1line
	}

	// 자기소개
	if (userdata.userinfo.txt_intro != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro").value = userdata.userinfo.txt_intro
	}

	// 만들고 싶은 음악
	if (userdata.userinfo.txt_intro_music != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_music").value = userdata.userinfo.txt_intro_music
	}

	// 협업하고 싶은 사람
	if (userdata.userinfo.txt_intro_collaboration != "아직 소개할 내용이 없어요") {
		document.getElementById("txt_intro_collaboration").value = userdata.userinfo.txt_intro_collaboration
	}
}
