function set_main(url) {
	function Div_main() {
		return (
			<div class="w-full">
				<div id="div_joined" class="w-full"></div>
				<div id="div_selection" class="w-full"></div>
				<div id="div_artist" class="w-full"></div>
				<div id="div_team" class="w-full"></div>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
	ReactDOM.render(<Div_skeleton_joined />, document.getElementById("div_joined"))
	ReactDOM.render(<Div_selection />, document.getElementById("div_selection"))
	ReactDOM.render(<Div_skeleton_artist />, document.getElementById("div_artist"))
	ReactDOM.render(<Div_skeleton_team />, document.getElementById("div_team"))
	
	// 내가 가입한 팀 목록이, 로그인 여부에 따라 달리 보이게 됨
	if (gv_username == "") {
		document.getElementById("div_joined_counter").className = "hidden"
		document.getElementById("div_joined_content").className = "hidden"

	} else {
		document.getElementById("div_joined_not_login").className = "hidden"
	}
	
	if (url == "team") {
		document.getElementById("div_artist").className = "hidden"
		document.getElementById("tab_artist").className = class_tab_off
		document.getElementById("tab_team").className = class_tab_on
	} else {
		document.getElementById("div_team").className = "hidden"
		document.getElementById("tab_artist").className = class_tab_on
		document.getElementById("tab_team").className = class_tab_off
	}

	get_my_team_list()
	get_artist_list("init")
	get_team_list("init")


	/***** 필터 *****/
	// 필터 - 팀업 상태
	ReactDOM.render(<Div_modal_filter_teamup type={"artist"} />, document.getElementById("modal_filter_artist_teamup"));
	ReactDOM.render(<Div_modal_filter_teamup type={"team"} />, document.getElementById("modal_filter_team_teamup"));

	// 필터 - 온라인 가능 여부
	ReactDOM.render(<Div_modal_filter_online type={"artist"} />, document.getElementById("modal_filter_artist_online"));
	ReactDOM.render(<Div_modal_filter_online type={"team"} />, document.getElementById("modal_filter_team_online"));

	// 필터 - 지역
	ReactDOM.render(<Div_modal_filter_region type={"artist"} />, document.getElementById("modal_filter_artist_region"));
	ReactDOM.render(<Div_modal_filter_region type={"team"} />, document.getElementById("modal_filter_team_region"));
	get_region_list()

	// 필터 - 장르
	ReactDOM.render(<Div_modal_filter_genre type={"artist"} />, document.getElementById("modal_filter_artist_genre"));
	ReactDOM.render(<Div_modal_filter_genre type={"team"} />, document.getElementById("modal_filter_team_genre"));
	get_genre_list()

	// 필터 - 역할
	ReactDOM.render(<Div_modal_filter_role type={"artist"} />, document.getElementById("modal_filter_artist_role"));
	ReactDOM.render(<Div_modal_filter_role type={"team"} />, document.getElementById("modal_filter_team_role"));
	get_role_list()


	window.addEventListener("scroll", () => {
		// 100을 더하면 스크롤을 끝까지 내리기 100px 전에 데이터를 받아올 수 있다.
		const isScrollEnded = window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight;
	  
		if (isScrollEnded) {
			if (toggle_tab == "artist" && !toggle_page_artist) {
				get_artist_list("next")

			} else if (toggle_tab == "team" && !toggle_page_team) {
				get_team_list("next")

			}
		}
	});
}