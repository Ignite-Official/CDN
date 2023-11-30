function Div_role_member(props) {
	return (
		<div class="flex flex-row w-[360px] px-[16px] mx-auto">
			<span class="text-white w-2/3">{props.name}</span>
			<span class="flex flex-row justify-end items-center text-white w-1/3 space-x-[13px]">
				<img class="w-[14px] h-[14px] cursor-pointer" 
					 onClick={() => {
						props.count -= 1;
						add_cnt_member(props.uuid, props.count, false)}}
						src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/member_reduce.svg" />
				<input type="text" id={"cnt_" + props.uuid} name={"cnt_" + props.uuid} placeholder="1" value={props.count}
						class="block w-[40px] h-[32px] border-[#292929] focus:border-white focus:ring-white
							bg-[#292929] text-[#8B8B8B] text-[14px] font-[500] text-center rounded-lg focus:text-white"/>
				<img class="w-[14px] h-[14px] cursor-pointer" 
					 onClick={() => {
						props.count += 1;
						add_cnt_member(props.uuid, props.count, false)}}
					 src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/member_add.svg" />
			</span>
		</div>
	)
}