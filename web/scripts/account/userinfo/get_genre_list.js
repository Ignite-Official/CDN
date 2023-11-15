async function get_genre_list() {
	function Div_genre_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					class="w-fit h-[40px] text-white font-[600] text-[14px] bg-transparent border border-2-[#525252] rounded-lg px-[16px] hover:bg-[#26009F]">
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_genre_btn_list_sub">
				<div class="hidden"></div>
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_genre_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 장르 UUID 목록
	genre_list = Object.values(Object.values(data)).map(x => x.uuid)

	ReactDOM.render(<Div_genre_list data={data} />, document.getElementById("div_genre_list"));
	//document.getElementById("btn_genre_add").className = class_btn_genre_add

	//btn_submit_enable()
}