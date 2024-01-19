function Div_modal_filter_genre(props) {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-xl shadow">
				<Div_modal_title text={"장르 설정"} />
	
				<div class="flex flex-col h-[300px] min-h-[300px] max-h-[300px] p-[20px] space-y-[10px] overflow-auto">
					<span class="text-[12px] font-[400] text-[#A3A3A3] w-full">
						최대 5개까지 설정해주세요.
					</span>
					
					<label class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" class="sr-only peer" />
						<div class="w-11 h-6 bg-gray-200 rounded-full peer 
									peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
									rtl:peer-checked:after:-translate-x-full after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
						<span class="ms-3 text-sm font-medium text-white">전체</span>
					</label>

					<label class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" class="sr-only peer" checked />
						<div class="w-11 h-6 bg-gray-200 rounded-full peer 
									peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
									rtl:peer-checked:after:-translate-x-full after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
						<span class="ms-3 text-sm font-medium text-white">전체</span>
					</label>
					  
					<div id={
								props.type == "artist"
								?   "div_artist_genre_list"
								:   "div_team_genre_list"
							}></div>
				</div>

				<div class={class_modal_div_close}>
					<div class="flex flex-col w-full">
						<span class="text-[12px] font-[400] text-[#A3A3A3] w-full mb-2">
							장르 추가
						</span>
						<div class="grid grid-cols-3 w-full justify-center items-center px-4">
							<div class="px-1 w-full col-span-2">
								<input type="text" placeholder="추가할 장르를 입력해주세요."
									   id={
											  props.type == "artist"
											  ?   "txt_add_artist_genre"
											  :   "txt_add_team_genre"
										  }
									   name={
												props.type == "artist"
												?   "txt_add_artist_genre"
												:   "txt_add_team_genre"
											}
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
					<button class={class_modal_btn_close} onClick={() => click_btn_filter_close(props.type)}>
						확인
					</button>
				</div>
	
			</div>
		</div>
	)
}