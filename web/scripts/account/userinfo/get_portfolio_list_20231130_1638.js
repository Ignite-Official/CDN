async function get_portfolio_list() {

	function Div_portfolio_list(props) {

		const portfolio_List = Object.keys(props.data).map((btn_data) =>
			<div class="flex flex-col w-full justify-center items-center space-y-[8px] px-[20px]">
				<div class={"w-full h-[148px] bg-[url('" + props.data[btn_data].val_thumbnail + "')] bg-cover bg-center rounded-lg cursor-pointer"}
					 onClick={() => insert_click_portfolio(props.data[btn_data].uuid)}></div>

				<p class="text-white font-[500] text-[14px] w-full text-start truncate ...">
					{props.data[btn_data].val_title}
				</p>
				
				<div class="flex flex-row justify-end items-center w-full">
					<p class="flex flex-row justify-center items-center w-fit h-[24px] bg-[#404040] rounded-xl px-[8px]
							  text-[#DC2626] font-[400] text-[12px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/heart.svg" class="w-4 h-4 mr-[4px]" />
						{props.data[btn_data].cnt_respect.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
					</p>
				</div>
			</div>
		)

		return (
			<div class="grid grid-cols-3 justify-center items-center w-full gap-12 md:grid-cols-1">
				{portfolio_List}
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	const data = await fetch("/account/ajax_get_portfolio_list/?limit=3", {
					 method: "post", 
					 headers: { "X-CSRFToken": getCookie("csrftoken"), },
					 body: request_data
					 })
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_portfolio_list data={data} />, document.getElementById("div_portfolio_list"))
}