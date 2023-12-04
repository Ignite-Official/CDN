function Div_right() {
	let class_tab_enabled = "text-[#AE9DE3] font-[600] text-[16px] w-fit h-[43px] px-[16px] py-[12px] cursor-pointer"
	let class_tab_disabled = "text-[#A3A3A3] font-[600] text-[16px] w-fit h-[43px] px-[16px] py-[12px] cursor-pointer hover:text-[#AE9DE3]"

	function click_tab(title) {
		if (title == "introduction") {
			document.getElementById("div_introduction").className = "w-full"
			document.getElementById("div_portfolio_list").className = "hidden"
			document.getElementById("div_teamup_list").className = "hidden"
		} else if (title == "portfolio_list") {
			document.getElementById("div_introduction").className = "hidden"
			document.getElementById("div_portfolio_list").className = "w-full"
			document.getElementById("div_teamup_list").className = "hidden"
		} else if (title == "teamup_list") {
			document.getElementById("div_introduction").className = "hidden"
			document.getElementById("div_portfolio_list").className = "hidden"
			document.getElementById("div_teamup_list").className = "w-full"
		}
	}

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
			<div class="flex flex-row w-full border-b-2 border-gray-500">
				<p class={class_tab_enabled} onClick={() => click_tab("introduction")}>
					소개
				</p>
				<p class={class_tab_disabled} onClick={() => click_tab("portfolio_list")}>
					포트폴리오
				</p>
				<p class={class_tab_disabled} onClick={() => click_tab("teamup_list")}>                    
					소속 팀업
				</p>
			</div>

			<div id="div_introduction" class="w-full">
				<Div_introduction />
			</div>
				
			<div id="div_portfolio_list" class="hidden"></div>

			<div id="div_teamup_list" class="hidden"></div>            
		</div>
	)
}