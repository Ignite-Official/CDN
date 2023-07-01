function visible_back_button(document = document, url = "") {
	if (url == "") {
		document.getElementById("menu_back").href=url
	} else {
		document.getElementById("menu_back").href=document.referrer
	}
	
	document.getElementById("menu_back").className="mr-[8px]"
}