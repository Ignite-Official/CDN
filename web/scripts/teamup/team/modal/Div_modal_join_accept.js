// 가입 승인
function Div_modal_join_accept(props) {

	function click_left_btn_join_accept(account) {
		console.log(account + " 가입 승인")
	}

	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 강제로 퇴장시킬까요?"} />

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
	)
}