function Div_btn_submit_dual(props) {
	return (
		<div class="mb-[-128px]">
			<button type="button" id="btn_submit_left" onClick={props.function1} class={props.class1}>
				{props.text1}
			</button>
			<button type="button" id="btn_submit_right" onClick={props.function2} class={props.class2}>
				{props.text2}
			</button>
		</div>
	)
}