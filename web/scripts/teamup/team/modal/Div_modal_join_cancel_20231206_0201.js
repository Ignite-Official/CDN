// 가입 신청 취소
function Div_modal_join_cancel() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"가입 신청을 취소할까요?"} />

				<div id="div_modal_join_cancel_btn_list" class="w-full">
					<div class={class_modal_btn_container}>    
						<button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_join_cancel_close").click()}>
							아니오
						</button>

						<button class={class_modal_btn_no} onClick={() => click_left_btn_join_cancel()}>
							예
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}