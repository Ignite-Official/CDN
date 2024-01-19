// 모달 안의 장르 목록
function Div_genre_list(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<button type="button" 
				id={"genre_" + props.target + "_" +  props.data[btn_data].uuid} 
				name={"genre_" + props.target + "_" + props.data[btn_data].uuid}
				onClick={() => click_btn_genre(props.data[btn_data].uuid, props.target)}
				class={class_btn_act_notselected}>
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