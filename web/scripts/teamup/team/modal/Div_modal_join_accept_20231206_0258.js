// 가입 승인
function Div_modal_join_accept(props) {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 " + props.nickname + "의 가입을 승인할까요?"} />

				<div id="div_modal_join_accept_btn_list" class="w-full">
					<div class={class_modal_btn_container}>    
						<button class={class_modal_btn_yes} onClick={() => click_left_btn_join_accept(props.account)}>
							예
						</button>

						<button class={class_modal_btn_no} onClick={() => document.getElementById("btn_modal_join_accept_close").click()}>
							아니오
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}