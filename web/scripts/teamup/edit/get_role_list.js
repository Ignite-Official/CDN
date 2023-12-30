async function get_role_list() {
	// 모달 안의 역할 목록
	function Div_role_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => click_btn_role(props.data[btn_data].uuid)}
					class={class_btn_act_notselected}>
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_role_btn_list_sub">
				<div class="hidden"></div>
				{btnList}
			</div>
		)
	}

	ReactDOM.render(<Div_role />, document.getElementById("div_role"));

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	data_role = await fetch("/teamup/ajax_get_edit_role_list/", {
						method: "post", 
						headers: { "X-CSRFToken": getCookie("csrftoken"), },
						body: request_data
						})
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

	ReactDOM.render(<Div_role_list data={data_role} />, document.getElementById("div_role_list"));
}