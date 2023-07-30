async function get_team_log() {
	function Div_chat_me(props) {
		return (
			<div class="flex flex-row justify-end w-[360px] h-fit mb-[24px]">
				<div class="flex flex-col justify-end w-[246px] h-fit">
					<p class="flex flex-wrap text-white font-[500] text-[12px] w-[246px] h-fit px-[16px] py-[12px] bg-[#2A2835] rounded-xl">
						{props.data.chat_content}
					</p>
		
					<p class="text-[#4B4B4B] font-[500] text-[11px] mt-[4px]">
						{props.data.chat_created_at}
					</p>
				</div>
			</div>
		)
	}

	function Div_chat_another(props) {
		return (
			<div class="flex flex-row w-[360px] h-fit ml-[12px] mb-[24px]">
				<div class="flex flex-row w-[246px] h-fit ml-[12px]">
					{props.data.user_image_profile == "Unknown"
					? <div class="flex justify-center items-start">
						<a class="flex flex-row justify-center items-center rounded-full
									bg-[#6337C1] w-[40px] h-[40px] ml-[10px] border-[2px] border-[#A4A4A4] border-solid">
							<span class="text-white text-[14px] font-[700]">
								{props.data.user_nickname.charAt(0)}
							</span>
						</a>
						</div>
					: <img class="rounded-full w-[40px] h-[40px] mt-[10px] ml-[8px] border-[2px] border-[#A4A4A4] border-solid"
						src={props.data.user_image_profile}
						alt={props.data.user_nickname} />
					}
					<div class="flex flex-col w-[246px] h-fit ml-[12px]">
						<span class="text-white font-[700] text-[14px] truncate ...">
							{props.data.user_nickname}
						</span>
		
						<span class="flex flex-wrap text-white font-[500] text-[12px] w-[246px] h-fit px-[16px] py-[12px] bg-[#292929] rounded-xl mt-[8px]">
							{props.data.chat_content}
						</span>
		
						<div class="flex justify-end w-full">
							<p class="text-[#4B4B4B] font-[500] text-[11px] mt-[4px]">
								{props.data.chat_created_at}
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	function Div_Chat(props) {
		const chat_List = Object.keys(props.data).map((btn_data) =>
			<div class="flex flex-col w-[360px] h-fit">
				{props.data[btn_data].check_me == "ME"
				? <Div_chat_me data={props.data[btn_data]} />
				: <Div_chat_another data={props.data[btn_data]} />
				}
			</div>
		)

		return (
			<div class="flex flex-col justify-center items-center w-full max-w-[360px] h-fit mt-[15px] mx-auto">
				{chat_List}
			</div>
		)
	}

	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_chat_team_log/", {
					method: "post", 
					headers: { "X-CSRFToken": getCookie("csrftoken"), },
					body: request_data
					})
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_Chat data={data} />, document.getElementById("div_team_chat"));
}