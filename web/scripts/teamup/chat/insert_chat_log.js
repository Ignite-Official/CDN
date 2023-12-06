async function insert_chat_log() {
	if (!toggle_insert_chat_log) {
		// 토글 ON
		toggle_insert_chat_log = true

		const request_data = new FormData();
		request_data.append('href', href);
		request_data.append('msg', document.getElementById("txt_msg").value.trim());

		const data = await fetch("/teamup/ajax_insert_chat_log/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		get_chat_log()
		document.getElementById("txt_msg").value = ""

		// 토글 OFF
		toggle_insert_chat_log = false
	}
}