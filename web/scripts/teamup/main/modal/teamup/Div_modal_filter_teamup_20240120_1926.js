// 팀업 상태
function Div_modal_filter_teamup(props) {
	function click_btn(type, mode) {
		if (mode == "ALL") {
			ReactDOM.render(<Div_filter_button title={"팀업 상태"} content={"전체"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_teamup").click()} />,
											   document.getElementById("btn_filter_" + type + "_teamup"));
		} else if (mode == "YES") {
			ReactDOM.render(<Div_filter_button title={"팀업 상태"} content={"가능"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_teamup").click()} />,
											   document.getElementById("btn_filter_" + type + "_teamup"));

		} else if (mode == "NO") {
			ReactDOM.render(<Div_filter_button title={"팀업 상태"} content={"불가능"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_teamup").click()} />,
											   document.getElementById("btn_filter_" + type + "_teamup"));
		}


		console.log(type)
		if (type == "artist") {
			data_artist_teamup = mode
			get_artist_list("init")
			document.getElementById("btn_modal_filter_artist_teamup_close").click()

		} else if (type == "team") {
			data_team_teamup = mode
			get_team_list("init")
			document.getElementById("btn_modal_filter_team_teamup_close").click()
		}
	}

	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"팀업 가능 여부"} />

				<div class="w-full">
					<div class={class_modal_btn_container}>    
						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "ALL")}>
							전체
						</button>

						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "YES")}>
							팀업 가능
						</button>

						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "NO")}>
							팀업 불가능
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}