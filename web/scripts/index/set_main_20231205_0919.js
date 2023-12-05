function set_main() {
	// 첫 화면 스켈레톤 적용
	ReactDOM.render(<Div_main />, document.getElementById("div_main"))

	// 핫한 포트폴리오
	get_list_hot_portfolio()

	// 지금, 새롭게 등장한 아티스트
	get_list_new_artist()

	// 회원님을 위한 아티스트
	get_list_collaborator()

	// 새로 만들어진 팀업
	get_list_new_team()        

	/*
	// 주목할 송캠프
	ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_songcamp.svg"}
										title={"주목할 송캠프"}
										more_url={"/songcamp/"} />, document.getElementById("div_songcamp_title"))
	ReactDOM.render(<Div_main_skeleton_contest />, document.getElementById("div_songcamp_contents"))

	// 흥미로운 공모전
	ReactDOM.render(<Div_main_card_title img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/main_trophy.svg"}
										title={"흥미로운 공모전"}
										more_url={"/contest/"} />, document.getElementById("div_contest_title"))
	ReactDOM.render(<Div_main_skeleton_contest />, document.getElementById("div_contest_contents"))
	*/
}