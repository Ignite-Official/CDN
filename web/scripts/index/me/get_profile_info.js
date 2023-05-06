async function get_profile_info() {
	// 헤더
	function Div_header(props) {
		return (
			<div class="flex flex-col justify-center items-center">
				<div class="w-[360px] h-[100px]">
					<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/index/me/header_default.svg" class="w-[360px] h-[100px]"/>
				</div>
		
				<div class="flex flex-row justify-center items-center
							bg-[#6337C1] w-[80px] h-[80px] rounded-full border-2 border-[#A4A4A4] mt-[-40px]">
					<span class="text-white text-[34px] font-[700]">
						{props.data.nickname_firstletter}
					</span>
				</div>
		
				<div class="flex justify-between items-center w-[360px] pl-[16px] pr-[16px] mt-[-34px]">
					<div class="flex flex-row text-[#8B8B8B] text-[11px] font-[500] space-x-[4px]">
						<span>{props.data.sex}</span>
						<span>·</span>
						<span>TODAY {props.data.today_cnt}</span>
					</div>
		
					<div class="flex flex-row items-center">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/index/me/favoriate_link.svg" class="w-[16px] h-[22px]"/>
					</div>
				</div>
		
				<span class="text-[14px] font-[700] text-white mt-[24px]">
					{props.data.nickname}
				</span>
			</div>
		)
	}

	// Status
	function Div_status(props) {
		return (
			<div class="flex flex-row justify-center items-center">
				<div class="flex flex-col justify-center items-center">
					<div class="flex flex-row justify-center items-center space-x-[4px]">
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/fire_1f525.png" 
							 class="w-[20px] h-[20px]" />
						<span class="text-[#FF6B6B] text-[16px] font-[700]">0</span>
					</div>
		
					<div>
						<span class="text-[#8B8B8B] text-[12px] font-[500]">받은 리스펙</span>
					</div>
				</div>
		
				<div class="flex justify-center items-center ml-[28px] mr-[28px]">
					<svg width="1" height="46" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="1" height="46" fill="#292929"/>
					</svg>
				</div>
		
				<div class="flex flex-col justify-center items-center">
					<div>
						<span class="text-white text-[16px] font-[700]">{props.data.total_cnt}</span>
					</div>
		
					<div>
						<span class="text-[#8B8B8B] text-[12px] font-[500]">TOTAL</span>
					</div>
				</div>
		
				<div class="flex justify-center items-center ml-[28px] mr-[28px]">
					<svg width="1" height="46" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="1" height="46" fill="#292929"/>
					</svg>                    
				</div>
		
		
				<div class="flex flex-col justify-center items-center">
					<div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-200 rounded-full peer
										peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#37B24D]
										peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-[#37B24D]
										after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
							</div>
							</label>
					</div>
		
					<div>
						<span class="text-[#8B8B8B] text-[12px] font-[500]">팀업 가능</span>
					</div>
		
					<div class="flex flex-row items-center text-[#40C057] text-[11px] font-[500] space-x-[4px] hidden">
						<span>팀업 가능</span>
						<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3" cy="3" r="3" fill="#40C057"/>
						</svg>
					</div>
				</div>
			</div>
		)
	}

	// 프로필
	function Div_profile(props) {
		return (
			<div class="flex flex-col">
				<div class="bg-[#292929] w-full h-[24px] rounded-xl justify-center items-center text-center">
					<span class="text-[#D4D4D4] text-[11px] font-600">
						{props.data.txt_head_intro}
					</span>
				</div>
		
				<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
					<div class="flex flex-row justify-between items-center text-start">
						<div class="flex flex-row justify-between items-center">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/bust-in-silhouette_1f464.png"
								 class="w-[20px] h-[20px] mr-[6px]" />
							<h2 class="text-[14px] font-[700] text-white">저를 소개해요.</h2>
						</div>
					</div>
		
					<div class="flex flex-wrap">
						<span class="text-[#BCBCBC] text-[11px] font-[500]">
							{props.data.txt_intro}
						</span>
					</div>
				</div>
		
		
				<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
					<div class="flex flex-row justify-between items-center text-start">
						<div class="flex flex-row justify-between items-center">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/guitar_1f3b8.png"
								 class="w-[20px] h-[20px] mr-[6px]" />
							<h2 class="text-[14px] font-[700] text-white">이런 음악을 만들고 싶어요.</h2>
						</div>
					</div>
		
					<div class="flex flex-wrap">
						<span class="text-[#BCBCBC] text-[11px] font-[500]">
							{props.data.txt_intro2}
						</span>
					</div>
				</div>
		
		
				<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
					<div class="flex flex-row justify-between items-center text-start">
						<div class="flex flex-row justify-between items-center">
							<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/emoji/raising-hands_1f64c.png"
								 class="w-[20px] h-[20px] mr-[6px]" />
							<h2 class="text-[14px] font-[700] text-white">이런 분과 협업하고 싶어요.</h2>
						</div>
					</div>
		
					<div class="flex flex-wrap">
						<span class="text-[#BCBCBC] text-[11px] font-[500]">
							{props.data.txt_intro3}
						</span>
					</div>
				</div>
		
		
				<div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
					<div class="flex flex-row justify-between items-center text-start">
						<div class="flex flex-row justify-between items-center">
							<h2 class="text-[14px] font-[700] text-white">참여 중인 팀업</h2>
						</div>
						<img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle.svg" class="w-[7px] h-[10px]"/>
					</div>
				</div>
			</div>
		)
	}

	function Div_button(props) {
		return (
			<button type="button"
					class="bg-[#340BB8] text-[18px] text-white font-[600] w-[328px] h-[48px] rounded-lg text-center mt-[150px]">
				{props.text}
			</button>
		)
	}


	// 현재 경로
	const request_data = new FormData();
	request_data.append('host', window.location.href.toString());

	// 프로필 데이터 가져오기
	const data = await fetch("/get_portfolio_info/", {
					   method: "post", 
					   headers: {
						   "X-CSRFToken": getCookie("csrftoken"),
					   },
					   body: request_data
					   })
					  .then(res=> { return res.json(); })
					  .then(res=> { return res; });

	console.log(data)
	ReactDOM.render(<Div_header data={data} />, document.getElementById("div_header"))
	ReactDOM.render(<Div_status data={data} />, document.getElementById("div_status"))
	ReactDOM.render(<Div_profile data={data} />, document.getElementById("div_profile"))
}

get_profile_info()