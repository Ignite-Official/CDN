// 포트폴리오 목록을 불러온다.
async function get_portfolio_list() {
	let toggle_click_respect = false
	let toggle_click_delete = false

	// respect 버튼 클릭
	async function click_respect(uuid) {
		if (!toggle_click_respect) {
			// 토글 ON
			toggle_click_respect = true


			const data = await fetch("/account/ajax_insert_click_respect/?uuid_portfolio=" + uuid)
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

			get_portfolio_list()


			// 토글 OFF
			toggle_click_respect = false
		}
	}

	// 삭제 버튼 클릭
	async function click_delete(uuid) {
		if (!toggle_click_delete) {
			// 토글 ON
			toggle_click_delete = true


			const request_data = new FormData();
			request_data.append('uuid', uuid);
		
			// 프로필 데이터 가져오기
			const data = await fetch("/account/ajax_delete_portfolio/", {
							method: "post", 
							headers: { "X-CSRFToken": getCookie("csrftoken"), },
							body: request_data
							})
							.then(res=> { return res.json(); })
							.then(res=> { return res; });
		
			get_portfolio_list()


			// 토글 OFF
			toggle_click_delete = false
		}
	}
	

	function Div_portfolio_list(props) {

		const portfolio_List = Object.keys(props.data).map((btn_data) =>
			<div class="flex flex-col w-full justify-center items-center space-y-[8px] px-[20px]">
				<div class={"w-full h-[148px] bg-[url('" + props.data[btn_data].val_thumbnail + "')] bg-cover bg-center rounded-lg cursor-pointer"}
					 onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}></div>

				<p class="text-white font-[500] text-[14px] w-full text-start truncate ...">
					{props.data[btn_data].val_title}
				</p>
				
				<div class="flex flex-row justify-end items-center w-full space-x-[4px]">
					<p class="flex flex-row justify-center items-center w-fit h-[24px] bg-[#404040] rounded-xl px-[8px] cursor-pointer
							  text-[#DC2626] font-[400] text-[12px]"
					   onClick={() => click_respect(props.data[btn_data].uuid)}>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/heart.svg" class="w-4 h-4 mr-[4px]" />
						{props.data[btn_data].cnt_respect.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
					</p>

					{
						href.substr(-3) != ".me"
						?   <p class="flex flex-row justify-center items-center w-fit h-[24px] bg-[#404040] rounded-xl px-[8px] cursor-pointer
									  text-white font-[400] text-[12px]"
							   onClick={() => click_delete(props.data[btn_data].uuid)}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/delete_white.svg" class="w-4 h-4 mr-[4px]" />
								삭제
							</p>
						:   ""
					}
				</div>
			</div>
		)

		return (
			<div class="flex flex-col w-full">                    
				{
					href.substr(-3) != ".me"
					?   <div class="flex flex-row justify-end w-full pb-[24px]">
							<button class="flex flex-row justify-center items-center bg-[#340BB8] text-white font-[600] text-[14px] p-[10px] rounded-lg
										hover:bg-[#26009F] focus:border focus:border-[#FFFFFF]"
									onClick={() => document.getElementById("btn_modal_add_portfolio").click()}>
								<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/teamup_plus.svg" class="w-[18px] h-[18px] mr-[2px]" />
								포트폴리오 등록하기
							</button>
						</div>
					:   ""
				}

				<div class="grid grid-cols-3 justify-center items-center w-full gap-12 md:grid-cols-1">
					{portfolio_List}
				</div>
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	const data = await fetch("/account/ajax_get_portfolio_list/", {
					 method: "post", 
					 headers: { "X-CSRFToken": getCookie("csrftoken"), },
					 body: request_data
					 })
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_portfolio_list data={data} />, document.getElementById("div_portfolio_list"))
	document.getElementById("tab_portfolio_list").innerHTML = "포트폴리오(" + Object.keys(data).length + ")"
}