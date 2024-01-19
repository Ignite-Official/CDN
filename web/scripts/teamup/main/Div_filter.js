function Div_filter(props) {
	function Div_filter_button(props) {
		return (
			<div class="w-full space-x-[8px]" onClick={props.function}>
				<span class="text-[#8B8B8B] font-[600] text-[16px]">{props.title}</span>
				<span class="text-[#AE9DE3] font-[600] text-[16px]">{props.content}</span>
			</div>
		)
	}
	
	return (
		<div class="w-full">
			<div class="flex flex-row space-x-[12px] justify-start items-center
						md:grid md:grid-cols-2 md:space-x-[0px] md:justify-center md:gap-4">
				<div class={class_filter_button}>
					<Div_filter_button title={"팀업 상태"} content={"전체"}
									   function={
													props.type == "artist"
													?   () => document.getElementById("btn_modal_filter_artist_teamup").click()
													:   () => document.getElementById("btn_modal_filter_team_teamup").click()
												} />
				</div>
				<div class={class_filter_button}>
					<Div_filter_button title={"지역"} content={"전체"}
									   function={
													props.type == "artist"
													?   () => document.getElementById("btn_modal_filter_artist_region").click()
													:   () => document.getElementById("btn_modal_filter_team_region").click()
												} />
				</div>
				<div class={class_filter_button}>
					<Div_filter_button title={"장르"} content={"전체"}
									   function={
													props.type == "artist"
													?   () => document.getElementById("btn_modal_filter_artist_genre").click()
													:   () => document.getElementById("btn_modal_filter_team_genre").click()
												} />
				</div>
				<div class={class_filter_button}>
					<Div_filter_button title={"역할"} content={"전체"}
									   function={
													props.type == "artist"
													?   () => document.getElementById("btn_modal_filter_artist_role").click()
													:   () => document.getElementById("btn_modal_filter_team_role").click()
												} />
				</div>
			</div>
		</div>
	)
}