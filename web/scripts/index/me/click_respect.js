async function click_respect(uuid) {
	const data = await fetch("/ajax_insert_click_respect/?uuid_portfolio=" + uuid)
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_button_respect uuid={uuid} count={data.counter} />, document.getElementById("btn_respect_" + uuid));   
}