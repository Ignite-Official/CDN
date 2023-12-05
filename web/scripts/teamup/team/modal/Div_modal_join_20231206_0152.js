// 가입 신청
function Div_modal_join() {    
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"이 팀에 가입 신청을 할까요?"} />

				<div id="div_modal_join_btn_list" class="w-full">
					<div class={class_modal_btn_container}>
						<button class={class_modal_btn_yes} onClick={() => click_left_btn_join()}>
							예
						</button>

						<button class={class_modal_btn_no} onClick={() => document.getElementById("btn_modal_join_close").click()}>
							아니오
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}