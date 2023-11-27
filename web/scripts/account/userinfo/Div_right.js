function Div_right() {
	function Div_introduction() {
		function Div_sub_title(props) {
			return (
				<div class="flex flex-col justify-start items-center w-full space-y-[8px]">
					<p class="flex flex-row justify-start items-center space-x-[6px] text-white font-[600] text-[16px] text-start w-full">
						<img src={props.img_url} class="w-6 h-6 mr-[6px]"/>
						{props.title}                       
					</p>
					<p class="text-[#A3A3A3] font-[500] text-[14px] w-full text-start" id={props.id_text}>
						{props.text}
					</p>
				</div>
			)
		}

		return (
			<div class="flex flex-col justify-center items-center w-full space-y-[40px]">
				<p class="flex flex-row justify-center items-center text-[#D4D4D4] font-[600] text-[16px] w-full text-center w-full h-[60px] bg-[#292929] rounded-xl">
					{userdata.userinfo.txt_intro_1line}
				</p>

				<Div_sub_title title={"저를 소개해요."}
							   img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/userinfo_man.svg"}
							   text={userdata.userinfo.txt_intro} />
				<Div_sub_title title={"이런 음악을 만들고 싶어요."}
							   img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/userinfo_guitar.svg"}
							   text={userdata.userinfo.txt_intro_collaboration} />
				<Div_sub_title title={"이런 분과 협업하고 싶어요."}
							   img_url={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/userinfo_team.svg"}
							   text={userdata.userinfo.txt_intro_music} />
			</div>
		)
	}

	return (
		<div class="flex flex-col justify-center items-center w-full space-y-[24px] rounded-xl px-[48px] md:px-[0px]">

			<Div_title text={"소개"} more={false} />
			<Div_introduction />

			<hr class="w-full h-px bg-gray-200 border-0" />
				
			<Div_title text={"포트폴리오"} more={true} />
			<div id="div_portfolio_list" class="w-full"></div>

			
		</div>
	)
}