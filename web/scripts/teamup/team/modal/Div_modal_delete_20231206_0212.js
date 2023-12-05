// 팀 삭제
function Div_modal_delete() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"팀을 정말 삭제할까요?"} />

                <div id="div_modal_delete_btn_list" class="w-full">
                    <div class={class_modal_btn_container}>    
                        <button class={class_modal_btn_yes} onClick={() => document.getElementById("btn_modal_delete_close").click()}>
                            아니오
                        </button>

                        <button class={class_modal_btn_no} onClick={() => click_left_btn_delete()}>
                            예
                        </button>
                    </div>
                </div>
			</div>
		</div>
	)
}