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
		<div class="flex flex-col justify-center items-center text-center w-[380px] h-fit py-[12px]">
			<div class="w-full text-start mb-[8px]">
				<span class="text-white font-[500] text-[14px]">온라인 팀업</span>
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