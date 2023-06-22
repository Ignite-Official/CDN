async function get_genre_list() {
	// genre_selected_list에 active인 장르의 uuid를 추가하면서, focused 버튼의 classname을 리턴한다.
	function set_focused_btn(uuid) {
		genre_selected_list.push(uuid)
		return class_focused
	}

	function Div_genre_btn_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change(props.data[btn_data].uuid)}
					class={props.data[btn_data].active == 1
							? set_focused_btn(props.data[btn_data].uuid)
							: class_not_focused}>
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-row justify-center items-center grid grid-cols-3 w-full max-w-[360px]" id="div_genre_btn_list_sub">
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_genre_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	// 장르 UUID 목록
	genre_list = Object.values(Object.values(data)).map(x => x.uuid)

	ReactDOM.render(<Div_genre_btn_list data={data} />, document.getElementById("div_genre_btn_list"));
	document.getElementById("btn_genre_add").className = class_btn_genre_add

	btn_submit_enable()
}

get_genre_list()