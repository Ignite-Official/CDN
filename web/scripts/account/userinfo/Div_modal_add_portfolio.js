function Div_modal_add_portfolio() {
	// 포트폴리오 추가에서 source 선택 관련 변수
	let class_btn_portfolio_url_source_enabled = "w-[45px] h-[45px] flex justify-center items-center focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
	let class_btn_portfolio_url_source_disabled = "w-[45px] h-[45px] flex justify-center items-center focus:outline-none bg-gray-600 rounded-md border border-gray-500 hover:bg-gray-100 hover:text-blue-700"
	let toggle_portfolio_url_source = "youtube"
	let toggle_click_insert_portfolio = false

	// 포트폴리오 추가에서 source 선택
	function click_btn_portfolio_url_source(type) {
		if (type == "youtube") {
			document.getElementById('txt_portfolio_url').placeholder = "Youtube 비디오 URL을 입력하세요."
			document.getElementById('btn_portfolio_url_source_youtube').className = class_btn_portfolio_url_source_enabled
			document.getElementById('btn_portfolio_url_source_soundcloud').className = class_btn_portfolio_url_source_disabled
			toggle_portfolio_url_source = "youtube"
		} else if (type == "soundcloud") {
			document.getElementById('txt_portfolio_url').placeholder = "Soundcloud 트랙 URL을 입력하세요."
			document.getElementById('btn_portfolio_url_source_youtube').className = class_btn_portfolio_url_source_disabled
			document.getElementById('btn_portfolio_url_source_soundcloud').className = class_btn_portfolio_url_source_enabled
			toggle_portfolio_url_source = "soundcloud"
		}
	}

	// 포트폴리오 추가
	async function click_insert_portfolio() {
		if (!toggle_click_insert_portfolio)
		{
			// 토글 ON
			toggle_click_insert_portfolio = true


			if (document.getElementById("txt_portfolio_url").value.trim().length != 0) {
			
				const request_data = new FormData();
				request_data.append('url', document.getElementById("txt_portfolio_url").value.trim());
				request_data.append('source', toggle_portfolio_url_source);

				// 프로필 데이터 가져오기
				const data = await fetch("/account/ajax_insert_new_portfolio/", {
								method: "post", 
								headers: { "X-CSRFToken": getCookie("csrftoken"), },
								body: request_data
								})
								.then(res=> { return res.json(); })
								.then(res=> { return res; });


				// 검색 결과가 성공적이면, 포트폴리오를 업데이트 한다.
				if (data.checker == "SUCCESS") { 
					get_portfolio_list();
					document.getElementById("btn_modal_add_portfolio_close").click()

				} else if (data.checker == "EXIST") { 
					alert("이미 포트폴리오에 추가된 URL입니다.");

				} else {
					alert("잘못된 URL을 입력하였습니다.");

				}

			} else {
				alert("URL을 입력해주세요.")

			}


			// 토글 OFF
			toggle_click_insert_portfolio = false
		}

	}

	
	return (
		<div class="relative w-[500px] min-w-[500px] max-w-[500px] min-h-1/3 max-h-1/3 p-[20px] space-y-[24px] sm:w-[360px] sm:min-w-[360px] sm:max-w-[360px] sm:p-[16px]">

			<div class="relative bg-[#262626] rounded-lg shadow">
				<div class="flex items-center justify-center w-full h-[50px] px-[20px] py-[8px] border-b rounded-t">
					<span class="text-[#D4D4D4] font-[600] text-[16px] w-full">
						포트폴리오 등록하기
					</span>
				</div>   
	
				<div class="flex flex-col justify-center items-center w-full">
					<div class="flex flex-col justyfy-center items-center w-full overflow-auto space-y-[8px] py-[20px] px-[10px]">

						<input type="text" id="txt_portfolio_url"
							   class="text-white border border-white rounded-lg bg-black text-[14px] text-white text-center font-[500] w-full h-[48px]
									  focus:ring-white focus:border-white" 
							   placeholder="Youtube 비디오 URL을 입력하세요."/>
			
						<div class="flex flex-row justify-center items-center w-full space-x-[4px]">
							<button type="button" id="btn_portfolio_url_source_youtube" class={class_btn_portfolio_url_source_enabled}
									onClick={() => click_btn_portfolio_url_source('youtube')}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[35px] h-[35px]" />
							</button>
							<button type="button" id="btn_portfolio_url_source_soundcloud" class={class_btn_portfolio_url_source_disabled}
									onClick={() => click_btn_portfolio_url_source('soundcloud')}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[35px] h-[35px]" />
							</button>
						</div>
	 
					</div>
					
					<div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b w-full">
						<button class="text-white bg-[#340BB8] font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full hover:bg-[#26009F] hover:border hover:border-white"
								id=""
								onClick={() => click_insert_portfolio()}>
							추가
						</button>

						<button class="text-[#EDEDED] bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full hover:border hover:border-white"
								id=""
								onClick={() => document.getElementById("btn_modal_add_portfolio_close").click()}>
							닫기
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}