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
	
	document.getElementById("div_artist_filter").className = "hidden"
	document.getElementById("div_team_filter").className = "hidden"

	get_my_team_list()
	get_artist_list()
	get_team_list()
}