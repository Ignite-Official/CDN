async function insert_message(e) {
	if(e.keyCode == 13){
		let chat_content = document.getElementById("txt_chat").value.trim()
		document.getElementById("txt_chat").value = ""

		const request_data = new FormData();
		request_data.append('host', window.location.href.toString());
		request_data.append('chat_content', chat_content);
	
		const data = await fetch("/insert_chat_message/", {
							method: "post", 
							headers: { "X-CSRFToken": getCookie("csrftoken"), },
							body: request_data
							})
				.then(res=> { return res.json(); })
				.then(res=> { return res; });

		get_team_log()
		
	}
}