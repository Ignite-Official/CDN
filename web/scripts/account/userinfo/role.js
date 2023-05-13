// 역할 목록 가져오기
let role_selected_list = []

// 역할 - 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change_role(id, image_url) {
	let class_focused = "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
						+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
						+ "bg-" + image_url + "-hover"
						+ " hover:bg-" + image_url + "-hover"
						+ " focus:bg-" + image_url + "-hover"
	let class_not_focused = "border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
						+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
						+ "bg-" + image_url 
						+ " hover:bg-" + image_url + "-hover"
						+ " focus:bg-" + image_url

	// 이미 선택된 장르인 경우
	if (role_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		role_selected_list = role_selected_list.filter((element) => element !== id)

	} else {
		document.getElementById(id).className = class_focused
		role_selected_list.push(id)
	}
}

// 역할 목록
async function get_role_list() {   

	function Div_role_btn_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change_role(props.data[btn_data].uuid, props.data[btn_data].image_url)}
					class={"border border-[#4B4B4B] rounded-lg w-[160px] h-[88px] ml-[4px] mr-[4px] mb-[8px] "
							+ "bg-cover text-white text-[20px] font-[500] focus:bg-[#26009F] "
							+ "bg-" + props.data[btn_data].image_url 
							+ " hover:bg-" + props.data[btn_data].image_url + "-hover"
							+ " focus:bg-" + props.data[btn_data].image_url + "-hover"}>
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
}

get_role_list()



// 악기 목록 가져오기
let instrument_selected_list = []

// 악기 - 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change_instrument(id, image_url) {
	let class_focused = "rounded-lg border border-[#5F5F5F] "
						+ "w-fit max-w-[150px] h-[48px] pt-[10px] pb-[10px] pl-[19.5px] pr-[19.5px] ml-[8px] mb-[8px] "
						+ "bg-[#292929] text-white "
						+ "hover:bg-[#292929] hover:text-white "
						+ "focus:bg-[#292929] focus:text-white"
	let class_not_focused = "rounded-lg border border-[#5F5F5F] "
						+ "w-fit max-w-[150px] h-[48px] pt-[10px] pb-[10px] pl-[19.5px] pr-[19.5px] ml-[8px] mb-[8px] "
						+ "bg-transparent text-[#5F5F5F] "
						+ "hover:bg-[#292929] hover:text-white "
						+ "bg-transparent text-[#5F5F5F]"

	// 이미 선택된 장르인 경우
	if (instrument_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		instrument_selected_list = instrument_selected_list.filter((element) => element !== id)

	} else {
		document.getElementById(id).className = class_focused
		instrument_selected_list.push(id)
	}
}

// 악기 목록
async function get_instrument_list() {   

	function Div_instrument_btn_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change_instrument(props.data[btn_data].uuid)}
					class="rounded-lg border border-[#5F5F5F]
							w-fit max-w-[150px] h-[48px] pt-[10px] pb-[10px] pl-[19.5px] pr-[19.5px] ml-[8px] mb-[8px]
							bg-transparent text-[#5F5F5F] 
							hover:bg-[#292929] hover:text-white 
							focus:bg-[#292929] focus:text-white">
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