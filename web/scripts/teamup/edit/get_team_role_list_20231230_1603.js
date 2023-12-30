async function get_team_role_list() {
	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	let role_list = await fetch("/teamup/ajax_get_team_role_list/", {
									method: "post", 
									headers: { "X-CSRFToken": getCookie("csrftoken"), },
									body: request_data
									})
									.then(res=> { return res.json(); })
									.then(res=> { return res; });
	
	Object.keys(data_role).map(function(i){
		Object.keys(role_list['role_list']).map(function(j){
			if (data_role[i].uuid == role_list['role_list'][j].uuid) {
				data_role[i].active = role_list['role_list'][j].active
			}
		});
	});

	let active_list = Object.values(data_role).filter(it => it.active != 0)
	Object.keys(active_list).map(function(i){
		document.getElementById(active_list[i].uuid).className = class_btn_act_selected
	});
	



	// 역할 수 감소
	function click_minus_role(uuid) {
		Object.keys(data_role).map(function(i){
			if (data_role[i].uuid == uuid) {
				data_role[i].active = data_role[i].active - 1

				if (data_role[i].active == 0) {
					document.getElementById(data_role[i].uuid).className = class_btn_act_notselected
				}
			}
		});

		ReactDOM.render(<Div_role_counter />, document.getElementById("div_role_counter"));
	}

	// 역할 수 증가
	function click_plus_role(uuid) {
		Object.keys(data_role).map(function(i){
			if (data_role[i].uuid == uuid && data_role[i].active < 10) {
				data_role[i].active = data_role[i].active + 1
			}
		});

		ReactDOM.render(<Div_role_counter />, document.getElementById("div_role_counter"));
	}

	// 역할별 추가할 멤버 수
	function Div_role_counter() {
		let data_active = Object.values(data_role).filter(it => it.active >= 1)  // 현재 active가 1 이상인 역할

		function Div_row(props) {
			return (                
				<div class="flex flex-row justify-between items-center w-full" id={"counter_" + props.id}>
					<p class="text-white font-[500] text-[14px]">
						{props.name}
					</p>
					<div class="flex flex-row justify-center items-center space-x-[8px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_minus_white.svg" 
							 class="w-6 h-6 cursor-pointer" 
							 onClick={() => click_minus_role(props.id)}
							 />
						<p class="flex flex-row justify-center items-center w-fit h-[32px] bg-[#292929] p-[12px] text-white font-[500] text-[14px] rounded-lg">
							{props.counter}
						</p>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_plus_white.svg" 
							 class="w-6 h-6 cursor-pointer" 
							 onClick={() => click_plus_role(props.id)}
							 />
					</div>
				</div>
			)
		}
		
		const role_List = Object.keys(data_active).map((i) =>
			<Div_row id={data_active[i].uuid}
					name={data_active[i].name}
					counter={data_active[i].active} />
		)

		return (
			<div class="w-full space-y-[8px]">
				{role_List}
			</div>
		)
	}

	ReactDOM.render(<Div_role_counter />, document.getElementById("div_role_counter"));
}