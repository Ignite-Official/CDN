async function submit_popup_role_add() {
	if (check_txt_popup_role_add_toggle != 0) {
		// 텍스트박스에 입력한 값 (역할)
		let role = document.getElementById("txt_popup_role_add").value.trim()

		const data = await fetch("/account/ajax_insert_role/?role=" + role)
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		if (!list_role_all.includes(data.uuid) && !list_role_selected.includes(data.uuid)) {
			list_role_all.push(data.uuid)
			list_role_selected.push(data.uuid)

			const button = Object.assign(document.createElement('button'))
			button.id = data.uuid
			button.name = data.uuid
			button.className = class_btn_enabled
			button.innerText = data.name
			button.onclick = () => classname_change_role(data.uuid)
			document.getElementById("div_btn_role_list").appendChild(button)
		}
	}

	popup_role_add.hide();
	classname_toggle_selection_role()
}