// 포트폴리오 클릭 로그 기록
async function insert_click_portfolio(uuid_portfolio, url) {
	const request_data = new FormData();
	request_data.append('uuid_portfolio', uuid_portfolio);
	request_data.append('host', window.location.href.toString());

	const data = await fetch("/blank/ajax_insert_click_portfolio_log/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });

	window.open(data.url)
}