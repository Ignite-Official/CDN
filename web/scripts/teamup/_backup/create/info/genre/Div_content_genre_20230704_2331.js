function Div_content_genre(props) {
	const btnList = Object.keys(props.data).map((btn_data) =>
		<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
				onClick={() => classname_change_genre(props.data[btn_data].uuid)}
				class={props.data[btn_data].active == 1 || list_genre_selected.includes(props.data[btn_data].uuid) || list_genre_selected.includes("btn_genre_all")
						? class_btn_enabled
						: class_btn_disabled}>
			{props.data[btn_data].name}
		</button>
	)

	return(
		<div class="flex flex-col justify-center items-center text-center w-[360px] h-fit py-[12px] pr-[16px] mx-auto">
			<div class="grid grid-cols-4 justify-center items-center columns-4 w-full" id="div_btn_genre_list">
				<button class={list_genre_selected.includes("btn_genre_all")
							? class_btn_enabled
							: class_btn_disabled}
						id="btn_genre_all" name="btn_genre_all"
						onClick={() => classname_change_genre("btn_genre_all")}>
					전체
				</button>
				{btnList}
				<button class={class_btn_disabled} data-modal-target="popup_genre_add" data-modal-toggle="popup_genre_add" type="button" 
						id="btn_genre_add" name="btn_genre_add"
						onClick={() => popup_genre_add_toggle('show')}>
					장르 추가
				</button>
			</div>
		</div>
	)
}