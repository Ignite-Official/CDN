function Div_filter(props) {
	return (
		<div class="w-full">
			<div class="flex flex-row space-x-[12px] justify-start items-center
						md:grid md:grid-cols-2 md:space-x-[0px] md:justify-center md:gap-4">
				<div class={class_filter_button} id={"btn_filter_" + props.type + "_tempup"}>
					<Div_filter_button title={"팀업 상태"} content={"전체"}
									   function={() => document.getElementById("btn_modal_filter_" + props.type + "_teamup").click()} />
				</div>
				<div class={class_filter_button} id={"btn_filter_" + props.type + "_region"}>
					<Div_filter_button title={"지역"} content={"전체"}
									   function={() => document.getElementById("btn_modal_filter_" + props.type + "_region").click()} />
				</div>
				<div class={class_filter_button} id={"btn_filter_" + props.type + "_genre"}>
					<Div_filter_button title={"장르"} content={"전체"}
									   function={() => document.getElementById("btn_modal_filter_" + props.type + "_genre").click()} />
				</div>
				<div class={class_filter_button} id={"btn_filter_" + props.type + "_role"}>
					<Div_filter_button title={"역할"} content={"전체"}
									   function={() => document.getElementById("btn_modal_filter_" + props.type + "_role").click()} />
				</div>
			</div>
		</div>
	)
}