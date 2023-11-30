function get_cnt_role_member() {
	let counter = 0
	for (var j = 0 ; j < list_cnt_role_selected.length ; j++) {
		counter += list_cnt_role_selected[j].count
	}

	return counter
}