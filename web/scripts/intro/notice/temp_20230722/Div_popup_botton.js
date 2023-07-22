function Div_popup_botton(props) {
	return (
		<div class="flex flex-row justify-center items-center w-[328px] mt-[-4px] rounded-b-lg">
			{
				props.page == 1
				? <button id="btn_popup_back" class={class_btn_back_disabled}></button>
				: <button id="btn_popup_back" class={class_btn_back_enabled} onClick={() => change_popup(props.page - 1)}></button>
			}
			{
				props.page == 8
				? <button id="btn_popup_next" class={class_btn_next_disabled}></button>
				: <button id="btn_popup_next" class={class_btn_next_enabled} onClick={() => change_popup(props.page + 1)}></button>
			}
		</div>
	)
}