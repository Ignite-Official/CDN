function Div_modal_cover() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"커버 사진 변경"} />
	
				<div class={class_modal_btn_container}>
					<button class={class_modal_btn_no} onClick={() => document.getElementById("btn_modal_cover_close").click()}>
						기본 커버 이미지 설정
					</button>
	
					<button class={class_modal_btn_yes}>
						새 이미지 업로드
					</button>
				</div>
			</div>
		</div>
	)
}