// 커버 이미지
function Div_cover_img(props) {
	return (
		<div>
			{
				props.url_image_bg != "Unknown"
				?   <div class={"flex items-center justify-center w-[452px] h-[258px] bg-[#262626] "
								+ "bg-[url('/" + props.url_image_bg + "')] bg-cover bg-full"}>
					</div>
				:   <div class="flex items-center justify-center w-[452px] h-[258px] bg-[#262626]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/blank_img_white.svg" class="w-10 h-10" />
					</div>
			}
		</div>
	)
}