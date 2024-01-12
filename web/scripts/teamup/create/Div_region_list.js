// 지역 목록
function Div_region_list(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
				onClick={() => click_btn_region(props.data[btn_data].uuid)}
				class={
						props.data[btn_data].active > 0
						?   class_btn_act_selected
						:   class_btn_act_notselected
					}>
			{props.data[btn_data].name}
		</button>
	)

	return (
		<div class="flex flex-wrap justify-start items-center w-full max-w-[360px] space-x-[12px] space-y-[10px]" id="div_region_btn_list_sub">
			<div class="hidden"></div>
			{btnList}
		</div>
	)
}