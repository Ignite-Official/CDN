function Div_content_role(props) {
	const btnList_role = Object.keys(props.data_role).map((btn_data) =>
		<button type="button" id={props.data_role[btn_data].uuid} name={props.data_role[btn_data].uuid}
				onClick={() => classname_change_role(props.data_role[btn_data].uuid)}
				class={props.data_role[btn_data].active == 1 || list_role_selected.includes(props.data_role[btn_data].uuid) || list_role_selected.includes("btn_role_all")
						? class_btn_enabled
						: class_btn_disabled}>
			{props.data_role[btn_data].name}
		</button>
	)

	const btnList_instrument = Object.keys(props.data_instrument).map((btn_data) =>
		<button type="button" id={props.data_instrument[btn_data].uuid} name={props.data_instrument[btn_data].uuid}
				onClick={() => classname_change_instrument(props.data_instrument[btn_data].uuid)}
				class={props.data_instrument[btn_data].active == 1 || list_instrument_selected.includes(props.data_instrument[btn_data].uuid) || list_instrument_selected.includes("btn_instrument_all")
						? class_btn_enabled
						: class_btn_disabled}>
			{props.data_instrument[btn_data].name}
		</button>
	)

	return(
		<div class="flex flex-col justify-center items-center text-center w-[360px] h-fit py-[12px] pr-[16px] mx-auto">
			<div class="grid grid-cols-4 justify-center items-center columns-4 w-full" id="div_btn_role_list">
				<button class={list_role_selected.includes("btn_role_all")
							? class_btn_enabled
							: class_btn_disabled}
						id="btn_role_all" name="btn_role_all"
						onClick={() => classname_change_role("btn_role_all")}>
					역할 전체
				</button>
				{btnList_role}
				<button class={class_btn_disabled} data-modal-target="popup_role_add" data-modal-toggle="popup_role_add" type="button" 
						id="btn_role_add" name="btn_role_add"
						onClick={() => popup_role_add_toggle('show')}>
					역할 추가
				</button>
			</div>

			<div class="grid grid-cols-4 justify-center items-center columns-4 w-full" id="div_btn_instrument_list">
				<button class={list_instrument_selected.includes("btn_instrument_all")
							? class_btn_enabled
							: class_btn_disabled}
						id="btn_instrument_all" name="btn_instrument_all"
						onClick={() => classname_change_instrument("btn_instrument_all")}>
					악기 전체
				</button>
				{btnList_instrument}
				<button class={class_btn_disabled} data-modal-target="popup_instrument_add" data-modal-toggle="popup_instrument_add" type="button" 
						id="btn_instrument_add" name="btn_instrument_add"
						onClick={() => popup_instrument_add_toggle('show')}>
					악기 추가
				</button>
			</div>
		</div>
	)
}