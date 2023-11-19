// 프로필 사진 - 기본 프로필 설정
function click_modal_profile_no() {
	userdata.userinfo.url_image_profile = "Unknown"
	ReactDOM.render(<Div_profile_img name={userdata.userinfo.nickname} url_image_profile={userdata.userinfo.url_image_profile} />, document.getElementById("div_profile_img"));
}