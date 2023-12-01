// 각 포트폴리오별 수정/삭제 버튼
function Div_btn_portfolio_edit(props){
	const class_name = "w-fit min-w-[70px] max-w-[100x] h-[20px] bg-[#191919] "
					 + "flex flex-row justify-center items-center rounded-md "
					 + "border-gray-100 focus:outline-none border border-gray-200 "
					 + "hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200"

	/*
	<button type="button" class={class_name}>
		<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/portfolio/dice.svg" class="w-[10px] h-[10px] mr-2" />
		<span class="text-[11px] font-[600] text-[#F3F4F6] w-fit">
			역할
		</span>
	</button>
	<button type="button" class={class_name}>
		<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/portfolio/pen.svg" class="w-[10px] h-[10px] mr-2" />
		<span class="text-[11px] font-[600] text-[#F3F4F6] w-fit">
			수정
		</span>
	</button>
	*/
	return(
		<div class="flex flex-row justify-end items-center w-fit min-w-[70px] max-w-[100px] pl-[4px] pr-[4px] space-x-[4px]">
			<button type="button" class={class_name} onClick={() => click_delete_portfolio(props.uuid)}>
				<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/portfolio/trashbin.svg" class="w-[10px] h-[10px] mr-2" />
				<span class="text-[11px] font-[600] text-[#F3F4F6] w-fit">
					삭제
				</span>
			</button>
		</div>
	)
}