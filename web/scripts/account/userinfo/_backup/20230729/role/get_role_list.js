async function get_role_list() {   

	function Div_role_btn_list(props) {
		// genre_selected_list에 active인 장르의 uuid를 추가하면서, focused 버튼의 classname을 리턴한다.
		function set_focused_btn(uuid, image_url) {
			role_selected_list.push(uuid)
			return "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] bg-" + image_url + "-hover hover:bg-" + image_url + "-hover focus:bg-" + image_url
		}

		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change_role(props.data[btn_data].uuid, props.data[btn_data].image_url)}
					class={props.data[btn_data].active == 0
							? "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
								+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
								+ "bg-" + props.data[btn_data].image_url 
								+ " hover:bg-" + props.data[btn_data].image_url + "-hover"
								+ " focus:bg-" + props.data[btn_data].image_url + "-hover"
							: set_focused_btn(props.data[btn_data].uuid, props.data[btn_data].image_url)
							}>
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="grid grid-cols-2 items-center w-full max-w-[360px]" id="div_role_btn_list_sub">
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_role_list/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_role_btn_list data={data} />, document.getElementById("div_role_btn_list"));

	btn_submit_enable()
}

get_role_list()