// 헤더
function Div_header(props) {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[24px] py-[40px]
					md:space-y-[12px] md:px-[15px]">
			<p class="text-white font-[700] text-[28px] w-full text-start">
				마이페이지
			</p>

			{
				props.url_image_bg == "Unknown"
				?   <div class="bg-gray-900 w-full h-[208px]"></div>
				:   <div class={"bg-[url('/" + props.url_image_bg + "')] bg-cover bg-center w-full h-[208px]"}></div>
			}
		</div>
	)
}