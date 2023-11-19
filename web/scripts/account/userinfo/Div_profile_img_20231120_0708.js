// 프로필 이미지
function Div_profile_img(props) {
	return (
		<div>
			{
				props.url_image_profile != "Unknown"
				?   <div class={"flex justify-center items-center w-[80px] h-[80px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5] "
								+ "bg-[url('/" + props.url_image_profile + "')] bg-cover bg-full"}>
					</div>
				:   <div class="flex justify-center items-center w-[80px] h-[80px] bg-[#340BB8] rounded-full border border-2 border-[#E5E5E5]">
						<span class="text-white font-[700] text-[36px]">
							{props.name.charAt(0)}
						</span>
					</div>
			}
		</div>
	)
}