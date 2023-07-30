async function get_team_info() {
	function Div_header_title(props) {
		return (
			<div class="flex flex-row justify-between items-center w-full">
				<p class="justify-start items-center w-[240px] h-[18px] text-white font-[600] text-[12px] truncate ...">
					{props.team_name}
				</p>
		
				<button onClick={() => window.open(props.url_team)}
						class="flex justify-center items-center bg-[#340BB8] w-[81px] h-[24px] rounded-lg text-white font-[600] text-[12px]">
					팀 프로필
		
					<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.08325 9.39567C7.91659 9.229 7.83659 9.02761 7.84325 8.7915C7.85047 8.55539 7.93742 8.354 8.10408 8.18734L10.4583 5.83317H1.16659C0.930474 5.83317 0.732419 5.75317 0.572419 5.59317C0.412974 5.43373 0.333252 5.23595 0.333252 4.99984C0.333252 4.76373 0.412974 4.56567 0.572419 4.40567C0.732419 4.24623 0.930474 4.1665 1.16659 4.1665H10.4583L8.08325 1.7915C7.91659 1.62484 7.83325 1.42678 7.83325 1.19734C7.83325 0.968448 7.91659 0.77067 8.08325 0.604004C8.24992 0.437337 8.44797 0.354004 8.67742 0.354004C8.90631 0.354004 9.10408 0.437337 9.27075 0.604004L13.0833 4.4165C13.1666 4.49984 13.2258 4.59011 13.2608 4.68734C13.2952 4.78456 13.3124 4.88873 13.3124 4.99984C13.3124 5.11095 13.2952 5.21511 13.2608 5.31234C13.2258 5.40956 13.1666 5.49984 13.0833 5.58317L9.24992 9.4165C9.09714 9.56928 8.90631 9.64567 8.67742 9.64567C8.44797 9.64567 8.24992 9.56234 8.08325 9.39567Z" fill="white"/>
					</svg>                    
				</button>
			</div>
		)
	}

	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_chat_team_info/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });
	
	ReactDOM.render(<Div_header_title team_name={data.name} url_team={data.url_team} />, document.getElementById("div_title"));
}