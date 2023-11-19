// "당신의 장르를 추가해주세요" 보이기/숨기기
let toggle_div_genre_add_textbox = 0
function div_genre_add_textbox_show() {
	let class_genre_add_show = "flex flex-col justify-center items-center"
	if (toggle_div_genre_add_textbox == 0) {
		document.getElementById("div_genre_add_button").className = "hidden"
		document.getElementById("div_genre_add_textbox").className = class_genre_add_show
		toggle_div_genre_add_textbox = 1
	} else {
		document.getElementById("div_genre_add_button").className = class_genre_add_show
		document.getElementById("div_genre_add_textbox").className = "hidden"
		toggle_div_genre_add_textbox = 0
	}
}