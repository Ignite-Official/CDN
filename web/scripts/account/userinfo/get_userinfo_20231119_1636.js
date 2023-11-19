async function get_userinfo() {
	// 프로필 이미지
	function Div_profile_img(props) {
		return (
			<div>
				{
					props.url_image_profile != "Unknown"
					?   <div class={"flex justify-center items-center w-[80px] h-[80px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5] "
									+ "bg-[url('/" + props.url_image_profile + "')] bg-cover bg-full"}>
						</div>
					:   <div class="flex justify-center items-center w-[80px] h-[80px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
							<span class="text-white font-[700] text-[36px]">
								{props.name}
							</span>
						</div>
				}
			</div>
		)
	}

	// 커버 이미지
	function Div_cover_img(props) {
		return (
			<div>
				{
					props.url_image_bg != "Unknown"
					?   <div class={"flex items-center justify-center w-[452px] h-[258px] bg-[#262626] "
									+ "bg-[url('/" + props.url_image_bg + "')] bg-cover bg-full"}>
						</div>
					:   <div class="flex items-center justify-center w-[452px] h-[258px] bg-[#262626]">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/blank_img_white.svg" class="w-10 h-10" />
						</div>
				}
			</div>
		)
	}

	// 장르 목록 추가
	function get_genre_list(data) {
		function Div_genre_list(props) {
			const btnList = Object.keys(props.data).map((btn_data) =>
				<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
						onClick={() => click_btn_genre(props.data[btn_data].uuid)}
						class={class_btn_act_notselected}>
					{props.data[btn_data].name}
				</button>
			)
	
			return (
				<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_genre_btn_list_sub">
					<div class="hidden"></div>
					{btnList}
				</div>
			)
		}
	
		ReactDOM.render(<Div_genre_list data={data} />, document.getElementById("div_genre_list"));
	}

	// 역할 목록 추가
	function get_role_list(data) {
		function Div_role_list(props) {
			const btnList = Object.keys(props.data).map((btn_data) =>
				<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
						onClick={() => click_btn_role(props.data[btn_data].uuid)}
						class={class_btn_act_notselected}>
					{props.data[btn_data].name}
				</button>
			)
	
			return (
				<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_role_btn_list_sub">
					<div class="hidden"></div>
					{btnList}
				</div>
			)
		}
	
		ReactDOM.render(<Div_role_list data={data} />, document.getElementById("div_role_list"));
	}

	// 악기 목록 추가
	function get_instrument_list(data) {
		function Div_instrument_list(props) {
			const btnList = Object.keys(props.data).map((btn_data) =>
				<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
						onClick={() => click_btn_instrument(props.data[btn_data].uuid)}
						class={class_btn_act_notselected}>
					{props.data[btn_data].name}
				</button>
			)
	
			return (
				<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_instrument_btn_list_sub">
					<div class="hidden"></div>
					{btnList}
				</div>
			)
		}
	
		ReactDOM.render(<Div_instrument_list data={data} />, document.getElementById("div_instrument_list"));
	}


	// 데이터 가져오기
	userdata = await fetch("/account/ajax_get_userinfo/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });


	// 장르 추가
	get_genre_list(userdata.genre)
	Object.keys(userdata.genre).map(function(i){
		if (userdata.genre[i].active == 1) {
			document.getElementById(userdata.genre[i].uuid).className = class_btn_act_selected
		}
	});
	/*
	for (var i = 0 ; i < Object.keys(userdata.genre).length ; i++) {
		if (userdata.genre[i].active == 1) {
			document.getElementById(userdata.genre[i].uuid).className = class_btn_act_selected
		}
	}
	*/


	// 역할 추가
	get_role_list(userdata.role)
	Object.keys(userdata.role).map(function(i){
		if (userdata.role[i].active == 1) {
			document.getElementById(userdata.role[i].uuid).className = class_btn_act_selected
		}
	});
	/*
	for (var i = 0 ; i < Object.keys(userdata.role).length ; i++) {
		if (userdata.role[i].active == 1) {
			document.getElementById(userdata.role[i].uuid).className = class_btn_act_selected
		}
	}
	*/
	

	// 악기 추가
	get_instrument_list(userdata.instrument)
	Object.keys(userdata.instrument).map(function(i){
		if (userdata.instrument[i].active == 1) {
			document.getElementById(userdata.instrument[i].uuid).className = class_btn_act_selected
		}
	});
	/*
	for (var i = 0 ; i < Object.keys(userdata.instrument).length ; i++) {
		if (userdata.instrument[i].active == 1) {
			document.getElementById(userdata.instrument[i].uuid).className = class_btn_act_selected
		}
	}
	*/
	
	
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