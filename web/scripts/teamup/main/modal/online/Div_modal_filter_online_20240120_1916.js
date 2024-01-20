// 온라인 가능 여부
function Div_modal_filter_online(props) {
	function click_btn(type, mode) {
		if (mode == "ALL") {
			ReactDOM.render(<Div_filter_button title={"온라인"} content={"전체"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_online").click()} />,
											   document.getElementById("btn_filter_" + type + "_online"));
		} else if (mode == "ONLINE") {
			ReactDOM.render(<Div_filter_button title={"온라인"} content={"가능"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_online").click()} />,
											   document.getElementById("btn_filter_" + type + "_online"));

		} else if (mode == "OFFLINE") {
			ReactDOM.render(<Div_filter_button title={"온라인"} content={"불가능"}
											   function={() => document.getElementById("btn_modal_filter_" + type + "_online").click()} />,
											   document.getElementById("btn_filter_" + type + "_online"));
		}

		if (type == "artist") {
			data_artist_online = mode
			get_artist_list("init")
			document.getElementById("btn_modal_filter_artist_online_close").click()

		} else if (type == "team") {
			data_team_online = mode
			get_team_list("init")
			document.getElementById("btn_modal_filter_team_online_close").click()
		}
	}

	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"온라인 가능 여부"} />

				<div class="w-full">
					<div class={class_modal_btn_container}>    
						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "ALL")}>
							전체
						</button>

						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "ONLINE")}>
							온라인 가능
						</button>

						<button class={class_modal_btn_13} onClick={() => click_btn(props.type, "OFFLINE")}>
							온라인 불가능
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}