async function insert_genre() {
	if ( toggle_insert_genre == 1) {
		// 텍스트박스에 입력한 값 (장르)
		const inputData = new FormData();
		inputData.append('genre', document.getElementById("txt_genre_add").value.trim());

		const data = await fetch("/account/ajax_insert_genre/", {
							method: "post", 
							headers: {
								"X-CSRFToken": getCookie("csrftoken"),
							},
							body: inputData
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		if (data.CNT == 2) {
			const button = Object.assign(document.createElement('button'))
			button.id = data.uuid
			button.name = data.uuid
			button.className = "rounded-lg w-[98px] h-[98px] bg-[#5F5F5F] mb-[14px] ml-[8px] mr-[8px] "
							+ "justify-items-center text-white "
							+ "hover:bg-account-genre-hover hover:bg-center "
							+ "focus:bg-[#5F5F5F]"
			button.innerText = data.name
			button.onclick = () => classname_change(data.uuid)
			if (!genre_list.includes(data.uuid)) {
				genre_list.push(data.uuid)
				document.getElementById("div_genre_btn_list_sub").appendChild(button)
			}
		}
			
		classname_change(data.uuid)
	}
}