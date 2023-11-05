function Div_modal_pass() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 건너뛸까요?"} />

				<div class={class_modal_btn_container}>
					<button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_pass_close").click()}>
						아니오
					</button>

					<button  class={class_modal_btn_no} onClick={() => location.href='/'}>
						예
					</button>
				</div>
			</div>
		</div>
	)
}