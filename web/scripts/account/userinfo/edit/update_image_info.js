function update_image_info(type, data) {
	// 프로필 업데이트
	if (type=="profile") {
		userdata.userinfo.url_image_profile = data.file_name
		ReactDOM.render(<Div_profile_img name={userdata.userinfo.nickname} url_image_profile={userdata.userinfo.url_image_profile} />, document.getElementById("div_profile_img"));
		document.getElementById("btn_modal_profile_close").click()

	// 커버 사진 업데이트
	} else {
		userdata.userinfo.url_image_bg = data.file_name
		ReactDOM.render(<Div_cover_img url_image_bg={userdata.userinfo.url_image_bg} />, document.getElementById("div_cover_img"));
		document.getElementById("btn_modal_cover_close").click()

	}
}