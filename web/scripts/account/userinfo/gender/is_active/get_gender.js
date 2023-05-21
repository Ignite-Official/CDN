// 성별 가져오기
async function get_gender() {
	const data = await fetch("/account/ajax_get_gender/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	if (data.gender != "Unknown") {
		selected_gender = data.gender
		if (data.gender == "남성") {
			select_btn_gender('male');
		} else if (data.gender == "여성") {
			select_btn_gender('female');
		}
	}
	btn_submit_enable()
}

get_gender()