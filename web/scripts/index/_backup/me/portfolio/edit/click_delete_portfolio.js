// 포트폴리오 삭제
async function click_delete_portfolio(uuid) {
	const request_data = new FormData();
	request_data.append('uuid', uuid);

	// 프로필 데이터 가져오기
	const data = await fetch("/ajax_delete_portfolio/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	get_mypage_portfolio_info(); 
}
