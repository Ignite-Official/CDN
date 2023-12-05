function Div_main() {
	let banner_random_no = Math.floor(Math.random() * 4) + 1
	
	function Div_banner_top(props) {
		let class_text_small = "text-white font-[600] text-[30px] sm:text-[14px]"
		let class_text_large = "text-white font-[600] text-[65px] sm:text-[24px]"

		return (
			<div class="grid grid-cols-3 justify-between items-center text-start w-full h-[400px] sm:h-[180px]
						bg-[url('https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/banner_header.svg')] bg-cover cursor-pointer"
				 onClick={props.function}>
				<div class="flex flex-col col-span-2 w-full justify-start items-start px-[80px] md:px-[40px] sm:px-[12px]">
					<p class={class_text_small}>
						{props.text1}
					</p>
					<p class={class_text_small}>
						{props.text2}
					</p>
					<br/>
					<p class={class_text_large}>
						{props.text3}
					</p>
				</div>

				<div class="flex flex-row justify-center items-center w-full">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/logo/logo_004.png" class="h-[40px] sm:h-[20px]" />
				</div>
			</div>
		)
	}

	return (
		<div class="w-full">
			<div class="w-full" id="div_banner_top">
				{
					banner_random_no == 1
					?   <Div_banner_top text1={"이그나이트 X REAL YN(유튜브)"}
										text2={"라틴 아메리카에 홍보를 원한다면!?"}
										text3={"지금 지원하세요"} />
					:   ""
				}
				{
					banner_random_no == 2
					?   <Div_banner_top text1={"혼자 하면 엉덩이에 먼지낀다!"}
										text2={""}
										text3={"죽이되든 밥이되든 팀업하자!"}
										function={() => location.href='/teamup/'} />
					:   ""
				}
				{
					banner_random_no == 3
					?   <Div_banner_top text1={"송캠프에 참여하면 데모 피칭까지?"}
										text2={""}
										text3={"걱정할 시간에 바로지원!"}
										function={() => location.href='/songcamp/'} />
					:   ""
				}
				{
					banner_random_no == 4
					?   <Div_banner_top text1={"로또도 사야 당첨되듯"}
										text2={"공모전도 지원부터!"}
										text3={"온라인 공모전"}
										function={() => location.href='/contest/'} />
					:   ""
				}
			</div>
		
			<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]" id="div_portfolio">
				<div id="div_portfolio_title"></div>
				<div class="items-center pt-[24px] sm:pt-[12px]" id="div_portfolio_contents"></div>
			</div>
		
			<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]" id="div_artist">
				<div id="div_artist_title"></div>
				<div class="items-center pt-[24px] sm:pt-[12px]" id="div_artist_contents"></div>
			</div>
		
			<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]">
				<div class="items-center w-full rounded-xl">
					<div class="flex flex-row justify-center items-center w-full h-[90px] rounded-xl bg-[#340BB8] cursor-pointer"
						 onClick={() => window.open('https://app.gather.town/invite?token=krsuQwtRT06cLIjleqXp')}>
						<p class="text-justify text-white font-[600] text-[36px]">
							메 타 버 스　시 작 하 기
						</p>
					</div>
				</div>
			</div>
		
			<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]">
				<div id="div_collaborator_title"></div>
				<div id="div_collaborator_buttons"></div>
				<div class="items-center pt-[24px] sm:pt-[12px]" id="div_collaborator_contents"></div>
			</div>
		
			<div class="flex flex-col w-full px-[100px] py-[40px] sm:px-[20px] sm:py-[16px]">
				<div id="div_teamup_title"></div>
				<div class="items-start pt-4" id="div_teamup_contents"></div>
			</div>
		</div>
	)
}