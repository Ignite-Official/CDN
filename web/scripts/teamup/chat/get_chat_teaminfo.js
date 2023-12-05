async function get_chat_teaminfo() {
	function Div_header(props) {
		return (
			<div class="flex flex-row justify-between items-center border border-gray-700 rounded-lg w-full h-[58px] px-[32px] py-[20px]">
				<div class="flex flex-row justify-start items-center space-x-[16px]">
					<p class="flex flex-row justify-center items-center text-white font-[700] text-[16px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/chat_back.svg"
							 class="w-[16px] h-[16px] mr-[10px] cursor-pointer" 
							 onClick={() => location.href='/' + props.data.account + ".team"}/>
						{props.data.name}
					</p>
	
					<p class="flex flex-row justify-center items-center text-[#A3A3A3] font-[500] text-[11px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/team_chat_member.svg" class="w-[16px] h-[16px]" />
						멤버 {props.data.cnt_member + 1}
					</p>
				</div>
	
				<div class="flex flex-row justify-end items-center">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/refresh.svg" class="w-[20px] h-[20px]" />
				</div>
			</div>
		)
	}

	// 데이터 가져오기
	const request_data = new FormData();
	request_data.append('href', href);

	const data = await fetch("/teamup/ajax_get_chat_teaminfo/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_header data={data.teaminfo} />, document.getElementById("div_header"))        
}