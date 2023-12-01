// URL 추가를 위한 하단 버튼
function Div_btn_bottom_portfolio_add() {
	return (
		<div class="flex flex-row space-x-[4px]">
			<button type="button" id="btn_genre_add_confirm" onClick={() => click_insert_portfolio()}
					class={class_btn_add_mode_closed}>
				추가
			</button>
			<button type="button" id="btn_genre_add_cancel" onClick={() => click_portfolio_url_close()} class={class_btn_add_mode}>
				취소
			</button>
		</div>
	)
}