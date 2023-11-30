function add_cnt_member(uuid, count_value = 1, reopen = false) {
	let name = document.getElementById(uuid).textContent
	let cnt_member_root = document.createElement('div');
	cnt_member_root.id = "div-" + uuid
	
	let list_cnt_role_selected_temp = {}
	list_cnt_role_selected_temp["uuid"] = uuid
	list_cnt_role_selected_temp["name"] = name
	list_cnt_role_selected_temp["count"] = count_value
	
	
	if (count_value == 1 && reopen) {
		ReactDOM.render(<Div_role_member uuid={list_cnt_role_selected_temp["uuid"]}
										 name={list_cnt_role_selected_temp["name"]}
										 count={list_cnt_role_selected_temp["count"]} />, cnt_member_root);

		document.getElementById("div_list_role_members").appendChild(cnt_member_root)
		list_cnt_role_selected.push(list_cnt_role_selected_temp)

	} else if (count_value == 0) {
		remove_cnt_member(uuid)

	} else {
		for (var i = 0 ; i < list_cnt_role_selected.length ; i++) {
			if (list_cnt_role_selected[i].uuid == uuid) {
				list_cnt_role_selected[i].count = count_value
				break;
			}
		}
		document.getElementById("cnt_" + uuid).value = count_value
	}

	document.getElementById("div_list_role_members").className = "flex flex-col space-y-[16px] mb-[16px]"
}
