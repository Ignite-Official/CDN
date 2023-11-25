function Div_modal_profile() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"프로필 변경"} />
	
				<div class={class_modal_btn_container}>
					<button class={class_modal_btn_no} onClick={() => document.getElementById("btn_modal_profile_close").click()}>
						기본 프로필 설정
					</button>
	
					<button class={class_modal_btn_yes}>
						새 이미지 업로드
					</button>
				</div>
			</div>
		</div>
	)
}