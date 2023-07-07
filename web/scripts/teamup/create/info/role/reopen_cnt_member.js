function reopen_cnt_member() {        
	for (var j = 0 ; j < list_cnt_role_selected.length ; j++) {
		let uuid = list_cnt_role_selected[j].uuid
		let name = document.getElementById(uuid).textContent
		let cnt_member_root = document.createElement('div');
		cnt_member_root.id = "div-" + uuid

		let list_cnt_role_selected_temp = {}
		list_cnt_role_selected_temp["uuid"] = uuid,
		list_cnt_role_selected_temp["name"] = name,
		list_cnt_role_selected_temp["count"] = parseInt(list_cnt_role_selected[j].count)

		ReactDOM.render(<Div_role_member uuid={list_cnt_role_selected_temp["uuid"]}
										 name={list_cnt_role_selected_temp["name"]}
										 count={list_cnt_role_selected_temp["count"]} />, cnt_member_root);

		document.getElementById("div_list_role_members").appendChild(cnt_member_root)
	}

	document.getElementById("div_list_role_members").className = "flex flex-col space-y-[16px] mb-[16px]"
}
