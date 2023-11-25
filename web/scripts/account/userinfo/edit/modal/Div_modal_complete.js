function Div_modal_complete() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"저장할까요?"} />
	
				<div class={class_modal_btn_container}>
					<button class={class_modal_btn_yes}>
						예
					</button>
	
					<button class={class_modal_btn_no}
							onClick={() => document.getElementById("btn_modal_complete_close").click()}>
						아니오
					</button>
				</div>
			</div>
		</div>
	)
}