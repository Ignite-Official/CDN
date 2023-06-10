// URL 추가를 위한 버튼
function Div_btn_bottom_portfolio_edit(props) {
	return (
		<div class="flex flex-col mt-[40px]">
			<input type="text" id="txt_portfolio_url"
				   class="text-white border border-white rounded-lg bg-black text-[14px] text-white text-center font-[500] w-[324px] h-[48px]
						  focus:ring-white focus:border-white" 
					placeholder="유튜브 비디오 URL을 입력하세요." onKeyDown={() =>portfolio_url_check()} onKeyUp={() => portfolio_url_check()} required/>

			<div class="flex flex-row justify-center items-center w-full max-w-[324px] space-x-[4px] mt-[8px]">
				<button type="button" id="btn_portfolio_url_source_youtube" class={class_btn_portfolio_url_source_enabled}
						onClick={() => click_btn_portfolio_url_source('youtube')}>
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_youtube.svg" class="w-[35px] h-[35px]" />
				</button>
				<button type="button" id="btn_portfolio_url_source_soundcloud" class={class_btn_portfolio_url_source_disabled}
						onClick={() => click_btn_portfolio_url_source('soundcloud')}>
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/button_soundcloud.svg" class="w-[35px] h-[35px]" />
				</button>
			</div>

			<div class="flex flex-row justify-center items-center w-full max-w-[324px] mt-[8px]" id="div_btn_bottom_portfolio_add">
				<Div_btn_bottom_portfolio_add />
			</div>
		</div>
	)
}
