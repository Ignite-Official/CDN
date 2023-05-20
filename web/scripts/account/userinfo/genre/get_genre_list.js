async function get_genre_list() {   

	function Div_genre_btn_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change(props.data[btn_data].uuid)}
					class={class_not_focused}>
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

	ReactDOM.render(<Div_genre_btn_list data={data} />, document.getElementById("div_genre_btn_list"));
	document.getElementById("btn_genre_add").className = "rounded-lg rounded w-[324px] h-[48px] bg-[#5F5F5F] text-white text-[14px] hover:bg-[#340BB8]"

	btn_submit_enable()
}

get_genre_list()