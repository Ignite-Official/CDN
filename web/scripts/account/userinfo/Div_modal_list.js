// 프로필 등록 화면의 장르, 역할, 악기 버튼을 출력하는 부분
function Div_modal_list(props) {
	let active_data = Object.values(props.data).filter(it => it.active == 1)  // 현재 active가 1인 장르 개수
	let active_len = Object.values(props.data).filter(it => it.active == 1).length  // 현재 active가 1인 장르 개수

	const btnList = Object.keys(active_data).map((btn_data) =>
		<button type="button" 
				class="w-fit h-[22px] px-[8px] justify-center items-center text-white text-[12px] bg-[#404040] rounded-lg">
			{active_data[btn_data].name}
		</button>
	)

	return (
		<div class="flex flex-row justify-start items-center w-full space-x-[4px]">
			{
				active_len == 0
				?   <span class="text-[#A3A3A3] font-[400] text-[12px] w-full text-start mb-[8px]">
						{props.text}
					</span>
				:   <div class="flex flex-wrap justify-start items-center w-full space-x-[4px]">
						{btnList}
					</div>
			}
		</div>
	)
}