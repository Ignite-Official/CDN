// 이메일로 로그인하기 버튼
function Div_btn_submit(props) {
	return (
		<button type="button" class={props.class_btn} onClick={props.function}>
			{props.text}
		</button>
	)
}