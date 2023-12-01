// 포트폴리오 수정하기 / 프로필 수정하기 버튼
function Div_btn_bottom(props) {
	return(
		<button type="button" onClick={props.function} class={props.class}>{props.text}</button>
	)
}