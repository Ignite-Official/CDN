function get_filter_role_label(type) {
	let list_active = null
	
	if (type == "artist") {
		list_active = Object.values(data_artist_role).filter(it => it.active >= 1)

	} else if (type == "team") {
		list_active = Object.values(data_team_role).filter(it => it.active >= 1)

	}

	if (list_active.length == 0) {
		return "선택하지 않음"

	} else if (list_active.length == 1) {
		return list_active[0].name

	} else {
		return list_active[0].name + " 외 " + (list_active.length - 1) + "개"
	}
}