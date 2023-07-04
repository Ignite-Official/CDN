function Div_content_region(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
				onClick={() => classname_change_region(props.data[btn_data].uuid)}
				class={props.data[btn_data].active == 1 || list_region_selected.includes(props.data[btn_data].uuid) || list_region_selected.includes("btn_region_all")
						? class_btn_enabled
						: class_btn_disabled}>
			{props.data[btn_data].name}
		</button>
	)

	return(
		<div class="flex flex-col justify-center items-center text-center w-[360px] h-fit py-[12px] pr-[16px] mx-auto">
			<div class="flex flex-row text-start mb-[16px] w-full h-[24px] justify-start items-center">
				<span class="text-white font-[500] text-[14px] mr-[16px]">온라인 팀업</span>
				<div id="div_teamup">
					<Div_toggle_online_teamup />
				</div>
			</div>

			<div class="grid grid-cols-4 justify-center items-center columns-4 w-full">
				<button class={list_region_selected.includes("btn_region_all")
							 ? class_btn_enabled
							 : class_btn_disabled}
						id="btn_region_all" name="btn_region_all"
						onClick={() => classname_change_region("btn_region_all")}>
					전국
				</button>
				{btnList}
			</div>
		</div>
	)
}