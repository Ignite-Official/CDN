function Div_modal_profile() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"프로필 변경"} />
	
				<div class="flex flex-col justify-center items-center w-full">
					<div class={class_modal_btn_container}>
						<button class={class_modal_btn_no} onClick={() => click_modal_profile_no()}>
							기본 프로필 설정
						</button>
		
						<button class={class_modal_btn_yes} onClick={() => click_modal_profile_yes()}>
							새 이미지 업로드
						</button>
					</div>
					
					<div class={class_modal_div_close}>
						<button class={class_modal_btn_close} id=""
								onClick={() => document.getElementById("btn_modal_profile_close").click()}>
							닫기
						</button>
					</div>
				</div>
			</div>

			<input type="file" name="id_file_input_profile" id="id_file_input_profile" class="hidden"  accept="image/*" onChange={() => check_file_upload_profile() }/>
		</div>
	)
}