// form 완료 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" id="btn_submit" onClick={props.function} class={props.class}>
			{props.text}
		</button>
	)
}