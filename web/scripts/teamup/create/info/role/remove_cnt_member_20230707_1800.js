function remove_cnt_member(uuid) {
	try {
		document.getElementById("div-" + uuid).remove()
		list_cnt_role_selected = list_cnt_role_selected.filter((element) => element.uuid !== uuid)
	} catch {

	} finally {
		if (list_instrument_selected.length == 0) {
			document.getElementById("div_list_role_members").className = "hidden"
			document.getElementById(uuid).className = class_btn_disabled
		}
	}
}