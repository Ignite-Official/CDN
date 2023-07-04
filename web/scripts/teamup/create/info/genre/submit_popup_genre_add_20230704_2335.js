async function submit_popup_genre_add() {
	if (check_txt_popup_genre_add_toggle != 0) {
		// 텍스트박스에 입력한 값 (장르)
		let genre = document.getElementById("txt_popup_genre_add").value.trim()

		const data = await fetch("/account/ajax_insert_genre/?genre=" + genre)
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		if (!list_genre_all.includes(data.uuid) && !list_genre_selected.includes(data.uuid)) {
			list_genre_all.push(data.uuid)
			list_genre_selected.push(data.uuid)

			const button = Object.assign(document.createElement('button'))
			button.id = data.uuid
			button.name = data.uuid
			button.className = class_btn_enabled
			button.innerText = data.name
			button.onclick = () => classname_change_genre(data.uuid)
			document.getElementById("div_btn_genre_list").appendChild(button)
		}
	}

	popup_genre_add.hide();
	classname_toggle_selection_genre()
}