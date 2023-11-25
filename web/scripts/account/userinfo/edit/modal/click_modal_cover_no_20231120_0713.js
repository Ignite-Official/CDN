// 커버 사진 - 기본 프로필 설정
function click_modal_cover_no() {
	userdata.userinfo.url_image_bg = "Unknown"
	ReactDOM.render(<Div_cover_img url_image_bg={userdata.userinfo.url_image_bg} />, document.getElementById("div_cover_img"));
	document.getElementById("btn_modal_cover_close").click()
}