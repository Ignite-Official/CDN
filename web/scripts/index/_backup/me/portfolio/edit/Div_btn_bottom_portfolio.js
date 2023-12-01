function Div_btn_bottom_portfolio(props) {
	return (
		<div class="flex flex-row space-x-[4px]">
			<button type="button" onClick={() => click_portfolio_url_add()} class={class_btn_add_mode + " mt-[150px]"}>추가</button>
			<button type="button" onClick={() => location.href=window.location.href.toString().replace('/edit_portfolio/', '')} class={class_btn_add_mode + " mt-[150px]"}>완료</button>
		</div>
	)
}