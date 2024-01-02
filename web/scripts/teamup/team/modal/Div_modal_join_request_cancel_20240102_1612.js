// 보낸 요청 취소
function Div_modal_join_request_cancel(props) {
  return (
	   <div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				 <Div_modal_title text={"정말 " + props.nickname + "의 영입 요청을 취소할까요?"} />

				 <div id="div_modal_join_request_cancel_btn_list" class="w-full">
						   <div class={class_modal_btn_container}>    
								<button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_join_request_cancel_close").click()}>
									 아니오
								</button>

								<button class={class_modal_btn_no} onClick={() => click_left_btn_join_request_cancel(props.account)}>
									 예
								</button>
						   </div>
				 </div>
			</div>
	   </div>
  )
}