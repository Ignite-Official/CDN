// 악기 목록
async function get_instrument_list() {   

	function Div_instrument_btn_list(props) {
		// genre_selected_list에 active인 장르의 uuid를 추가하면서, focused 버튼의 classname을 리턴한다.
		function set_focused_btn(uuid) {
			instrument_selected_list.push(uuid)
			return class_instrument_focused
		}

		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change_instrument(props.data[btn_data].uuid)}
					class={props.data[btn_data].active == 0
							? class_instrument_not_focused
							: set_focused_btn(props.data[btn_data].uuid)
							}>
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-wrap justify-start items-center w-full max-w-[360px]" id="div_instrument_btn_list_sub">
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_instrument_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_instrument_btn_list data={data} />, document.getElementById("div_instrument_btn_list"));
}

get_instrument_list()