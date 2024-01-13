function Div_menu_message(props) {
	const message_List = Object.keys(props.data).map((btn_data) =>  
		<a href={
					props.data[btn_data].type == "default"
					?   "/intro/notice/read/" + props.data[btn_data].uuid + "/'"
					:   props.data[btn_data].url
				}
		   class="w-full h-fit px-[18px] py-[20px] space-y-[4px] border-b-2 border-[#292929] hover:bg-gray-800">
			<p class="text-white font-[500] text-[11px] bg-gray-600 rounded-lg w-fit px-[8px]">
				{props.data[btn_data].category}
			</p>               
			<p class="flex flex-row justify-start items-center text-white font-[500] text-[14px]">
				{props.data[btn_data].title}
				{
					props.data[btn_data].alert == "alert"
					?   <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/reddot.svg" class="w-[4px] h-[4px] ml-[8px]" />
					:   ""
				}
			</p>
			<p class="text-[#8B8B8B] font-[500] text-[11px]">
				{props.data[btn_data].created_at}
			</p>
		</a>
	)

	return (
		<div class="flex flex-col justify-end items-center w-[720px] max-w-[720px] border-t-2 pt-[10px] pb-[10px] border-[#292929] mx-auto
					md:w-[360px] md:max-w-[360px]">
			<p class="text-white font-[700] text-[16px]">
				{props.header}
			</p>

			{message_List}
		</div>
	)
}