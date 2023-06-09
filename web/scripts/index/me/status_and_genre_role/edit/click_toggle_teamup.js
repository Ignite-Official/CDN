async function click_toggle_teamup() {
	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_change_teamup_toggle/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_toggle_teamup_edit teamup_available={data.checker} />, document.getElementById("div_teamup"));   
}