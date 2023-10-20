function Div_footer() {
	function Div_footer_text(props) {
		return (
			<div class="pr-[12px]">
				<span class=" font-[600] text-[#8B8B8B] pr-[4px]">
					{props.title}:
				</span>
				<span class="font-[500] text-[#5F5F5F]">
					{props.content}
				</span>
			</div>
		)
	}

	return (
		<div class="flex flex-col w-full bg-black text-white">

			<div class="flex flex-row justify-between
						sm:flex-col ssm:w-full m:justify-center sm:space-y-[24px]">
				<div class="pr-[60px] sm:pr-[0px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/logo/logo_005.svg"
						 class="object-scale-down w-[120px] h-[32px] sm:w-[60px] sm:h-[24px]" alt="Logo" />
				</div>
				
				<div class="flex flex-col w-3/4 md:w-full">
					<div class="flex flex-row items-center text-center text-[14px] font-[600] text-white pb-[12px] space-x-[12px]
								sm:grid sm:grid-cols-2">
						<a href="/onboard/" class="hover:underline">서비스 소개</a>

						<span class="visible md:hidden">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/footer_vertical_bar.svg" />
						</span>

						<a href="/intro/terms/" class="hover:underline">이용약관</a>

						<span class="visible md:hidden">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/footer_vertical_bar.svg" />
						</span>
						
						<a href="/intro/privates/" class="hover:underline">개인정보 보호 정책</a>

						<span class="visible md:hidden">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/footer_vertical_bar.svg" />
						</span>

						<a href="/intro/partnership/" class="hover:underline">제휴 문의</a>
					</div>

					<div class="flex flex-row items-center text-center text-[14px] font-[600] text-white pb-[12px] space-x-[12px]
								sm:grid sm:grid-cols-2 
								hidden md:flex md:visible">
						<a href="/intro/notice" class="hover:underline">공지사항</a>
						<a href="/intro/cs" class="hover:underline">1:1문의</a>
					</div>
		
					<div class="flex flex-row text-[14px]">
						<Div_footer_text title={"회사명"} content={"이그나이트"} />
						<Div_footer_text title={"사업자등록번호"} content={"449-31-01381"} />
					</div>
		
					<div class="flex flex-row text-[14px]">
						<Div_footer_text title={"대표"} content={"이상훈"} />
						<Div_footer_text title={"개인정보보호책임자"} content={"유재성"} />
					</div>
		
					<div class="flex flex-row text-[14px] sm:flex-col">
						<Div_footer_text title={"주소"} content={"광주 북구 동문대로456번길 40, 호남연수원 106호"} />
						<Div_footer_text title={"문의"} content={"admin@ignite-artist.com"} />
						<Div_footer_text title={"대표전화"} content={"0507-1344-4787"} />
					</div>
		
					<div class="pt-[22px]">
						<span class="text-[12px] font-[700] text-[#5F5F5F]">
							©2023 - Ignite, Inc.
						</span>
					</div>
				</div>
				
		
				<div class="flex justify-end items-start visible md:hidden">
					<div class="flex flex-row items-end text-end text-[14px] font-[600] text-white space-x-[12px]">
						<a href="/intro/notice" class="hover:underline">공지사항</a>
						<span>
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/footer_vertical_bar.svg" />
						</span>
						<a href="/intro/cs" class="hover:underline">1:1문의</a>
					</div>
				</div>
		
			</div>
		</div>
	)
}
