// 강제 퇴장
function Div_modal_kick() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 강제로 퇴장시킬까요?"} />

				<div class={class_modal_btn_container}>    
					<button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_kick_close").click()}>
						아니오
					</button>

					<button class={class_modal_btn_no} onClick={() => click_left_btn_kick()}>
						예
					</button>
				</div>
			</div>
		</div>
	)
}