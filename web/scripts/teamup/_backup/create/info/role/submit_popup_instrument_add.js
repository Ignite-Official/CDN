async function submit_popup_instrument_add() {
	if (check_txt_popup_instrument_add_toggle != 0) {
		// 텍스트박스에 입력한 값 (역할)
		let instrument = document.getElementById("txt_popup_instrument_add").value.trim()

		const data = await fetch("/account/ajax_insert_instrument/?instrument=" + instrument)
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		if (!list_instrument_all.includes(data.uuid) && !list_instrument_selected.includes(data.uuid)) {
			list_instrument_all.push(data.uuid)
			list_instrument_selected.push(data.uuid)

			const button = Object.assign(document.createElement('button'))
			button.id = data.uuid
			button.name = data.uuid
			button.className = class_btn_enabled
			button.innerText = data.name
			button.onclick = () => classname_change_instrument(data.uuid)
			document.getElementById("div_btn_instrument_list").appendChild(button)
		}
	}

	popup_instrument_add.hide();
	classname_toggle_selection_role()
}