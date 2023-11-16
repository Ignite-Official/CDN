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

	
	// 데이터 가져오기
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
	
	// 프로필 사진
	ReactDOM.render(<Div_profile_img name={data.nickname} url_image_profile={data.url_image_profile} />, document.getElementById("div_profile_img"));

	// 커버 사진
	ReactDOM.render(<Div_cover_img url_image_bg={data.url_image_bg} />, document.getElementById("div_cover_img"));

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