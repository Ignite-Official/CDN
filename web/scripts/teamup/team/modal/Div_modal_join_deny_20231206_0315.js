// 가입 거절
function Div_modal_join_deny(props) {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 " + props.nickname + "의 가입을 거절할까요?"} />

				<div id="div_modal_join_deny_btn_list" class="w-full">
					<div class={class_modal_btn_container}>    
						<button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_join_deny_close").click()}>
							아니오
						</button>

						<button class={class_modal_btn_no} onClick={() => click_left_btn_join_deny(props.account)}>
							예
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}