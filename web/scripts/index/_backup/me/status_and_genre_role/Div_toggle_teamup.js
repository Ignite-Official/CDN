// 팀업 토글 
function Div_toggle_teamup(props) {
	let text = "팀업 불가"
	let color = "#FA5252"
	if (props.teamup_available == "YES") {
		text = "팀업 가능"
		color = "#40C057"
	}

	let className = "flex flex-row justify-center items-center text-[" + color + "] space-x-[4px]"

	return(
		<div class={className}>
			<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="3" cy="3" r="3" fill={color} />
			</svg>
			<span class="text-[11px] font-[500]">{text}</span>
		</div>
	)
}