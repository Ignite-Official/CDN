// 가입 거절
function Div_modal_join_deny(props) {

	function click_left_btn_join_deny(account) {
		console.log(account + " 가입 거절")
	}

	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 강제로 퇴장시킬까요?"} />

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
	)
}