function click_tab(tab) {
	if (tab == "artist") {
		document.getElementById("div_artist").className = "w-full"
		document.getElementById("tab_artist").className = class_tab_on

		document.getElementById("div_team").className = "hidden"
		document.getElementById("tab_team").className = class_tab_off
	
	} else {
		document.getElementById("div_artist").className = "hidden"
		document.getElementById("tab_artist").className = class_tab_off

		document.getElementById("div_team").className = "w-full"
		document.getElementById("tab_team").className = class_tab_on
	}
}