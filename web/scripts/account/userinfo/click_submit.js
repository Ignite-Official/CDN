async function click_submit() {
	if (!toggle_click_submit) {
		// 토글 ON
		toggle_click_submit = true
		ReactDOM.render(<Div_modal_complete type={"loading"} />, document.getElementById("modal_complete"));

		const request_data = new FormData();
		request_data.append('account', document.getElementById("txt_account").value.trim());
		request_data.append('nickname', document.getElementById("txt_nickname").value.trim());
		request_data.append('birthday', document.getElementById("txt_birthday").value.trim());
		if (document.getElementById("radio_gender_male").checked) {
			request_data.append('gender', "남성");
		} else if (document.getElementById("radio_gender_female").checked) {
			request_data.append('gender', "여성");
		} else {
			request_data.append('gender', "Unknown");
		}
		request_data.append('txt_intro', document.getElementById("txt_intro").value.trim());
		request_data.append('txt_intro_1line', document.getElementById("txt_intro_1line").value.trim());
		request_data.append('txt_intro_collaboration', document.getElementById("txt_intro_collaboration").value.trim());
		request_data.append('txt_intro_music', document.getElementById("txt_intro_music").value.trim());
		request_data.append('url_image_bg', userdata.userinfo.url_image_bg);
		request_data.append('url_image_profile', userdata.userinfo.url_image_profile);
		request_data.append('list_genre_name', Object.values(Object.values(userdata.genre)).map(x => x.name).join('　'));
		request_data.append('list_genre_active', Object.values(Object.values(userdata.genre)).map(x => x.active).join('　'));
		request_data.append('list_role_name', Object.values(Object.values(userdata.role)).map(x => x.name).join('　'));
		request_data.append('list_role_active', Object.values(Object.values(userdata.role)).map(x => x.active).join('　'));
		request_data.append('list_instrument_name', Object.values(Object.values(userdata.instrument)).map(x => x.name).join('　'));
		request_data.append('list_instrument_active', Object.values(Object.values(userdata.instrument)).map(x => x.active).join('　'));
	
		const data = await fetch("/account/ajax_update_userinfo/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

		// 완료 후 이동
		location.href="/account/userinfo/"

		// 토글 OFF
		toggle_click_submit = false
		ReactDOM.render(<Div_modal_complete type={"default"} />, document.getElementById("modal_complete"));
	}
}