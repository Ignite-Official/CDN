function Div_modal_filter_genre(props) {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"장르 설정"} />
	
				<div class={class_modal_content_all} id={"div_modal_content_" + props.type + "_genre"}>
					<span class="hidden" id={"div_modal_content_description_" + props.type + "_genre"}>
						최대 5개까지 설정해주세요.
					</span>
					
					<div id={"div_modal_toggle_" + props.type + "_genre"}>
						<Div_toggle_on label={"전체"} function={() => click_div_toggle_genre(props.type)} />
					</div>

					<div id={"div_" + props.type + "_genre_list"} class="hidden"></div>
				</div>

				<div class="hidden"
					 id={"div_" + props.type + "_genre_add"}>
					<div class="flex flex-col w-full">
						<span class="text-[12px] font-[400] text-[#A3A3A3] w-full mb-2">
							장르 추가
						</span>
						<div class="grid grid-cols-3 w-full justify-center items-center px-4">
							<div class="px-1 w-full col-span-2">
								<input type="text" placeholder="추가할 장르를 입력해주세요."
									   id={"txt_add_" + props.type + "_genre"}
									   name={"txt_add_" + props.type + "_genre"}
									   class="w-full h-[48px] bg-[#292929] border-0 rounded-lg
											  text-start text-white text-[14px] font-[500]
											  focus:ring-white focus:border-white focus:text-white" />
							</div>
							<div class="px-1 w-full">
								<button class={class_modal_btn_close} onClick={() => click_btn_add_genre(props.type)}>
									추가
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class={class_modal_div_close}>
					<button class={class_modal_btn_close} onClick={() => click_btn_filter_genre_close(props.type)}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}