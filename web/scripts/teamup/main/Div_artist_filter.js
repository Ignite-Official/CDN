function Div_artist_filter() {
	return (
		<div id="div_artist_filter" class="w-full">
			<div class="flex flex-row space-x-[12px] justify-start items-center
						md:grid md:grid-cols-2 md:space-x-[0px] md:justify-center md:gap-4">
				<div class="flex flex-row justify-center items-center
							w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl space-x-[8px] cursor-pointer
							h-[40px] min-h-[40px] max-h-[40px] md:w-[158px]">
					<span class="text-[#8B8B8B] font-[600] text-[16px]">팀업상태</span>
					<span class="text-[#AE9DE3] font-[600] text-[16px]">가능</span>
				</div>
				<div class="flex flex-row justify-center items-center
							w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl space-x-[8px] cursor-pointer
							h-[40px] min-h-[40px] max-h-[40px] md:w-[158px]">
					<span class="text-[#8B8B8B] font-[600] text-[16px]">지역</span>
					<span class="text-[#AE9DE3] font-[600] text-[16px]">전체</span>
				</div>
				<div class="flex flex-row justify-center items-center
							w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl space-x-[8px] cursor-pointer
							h-[40px] min-h-[40px] max-h-[40px] md:w-[158px]">
					<span class="text-[#8B8B8B] font-[600] text-[16px]">장르</span>
					<span class="text-[#AE9DE3] font-[600] text-[16px]">전체</span>
				</div>
				<div class="flex flex-row justify-center items-center
							w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl space-x-[8px] cursor-pointer
							h-[40px] min-h-[40px] max-h-[40px] md:w-[158px]">
					<span class="text-[#8B8B8B] font-[600] text-[16px]">분야</span>
					<span class="text-[#AE9DE3] font-[600] text-[16px]">전체</span>
				</div>
			</div>
		</div>
	)
}