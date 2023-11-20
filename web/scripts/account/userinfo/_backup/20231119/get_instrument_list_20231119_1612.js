async function get_instrument_list() {
	function Div_instrument_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => click_btn_instrument(props.data[btn_data].uuid)}
					class={class_btn_act_notselected}>
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

	ReactDOM.render(<Div_instrument_list data={data} />, document.getElementById("div_instrument_list"));
}