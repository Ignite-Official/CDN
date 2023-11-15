async function get_instrument_list() {
	function Div_instrument_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					class="w-fit h-[40px] text-white font-[600] text-[14px] bg-transparent border border-2-[#525252] rounded-lg px-[16px] hover:bg-[#26009F]">
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_instrument_btn_list_sub">
				<div class="hidden"></div>
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_instrument_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 장르 UUID 목록
	instrument_list = Object.values(Object.values(data)).map(x => x.uuid)

	ReactDOM.render(<Div_instrument_list data={data} />, document.getElementById("div_instrument_list"));
	//document.getElementById("btn_role_add").className = class_btn_role_add

	//btn_submit_enable()
}