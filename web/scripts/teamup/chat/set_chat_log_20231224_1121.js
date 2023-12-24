function set_chat_log() {
	function Div_contents(props) {

		// 답글 목록
		function Div_comments(props) {
			const commentList = Object.keys(props.data).map((btn_data) =>
				<div class="py-[12px]">
					<Div_message data={props.data[btn_data]} />
				</div>
			)
			
			return (
				<div class="w-full pt-[12px]">
					{commentList}
					<Div_sender uuid_upper={props.uuid_upper} />
				</div>
			)
		}

		// 채팅 목록
		const chatList = Object.keys(props.data).map((btn_data) =>
			<div class="flex flex-col justify-center items-center w-full px-[60px] py-[12px] space-y-[4px]">

				<Div_message data={props.data[btn_data]} />

				<div id={"toolbar_" + props.data[btn_data].uuid} class="w-full">
					{
						toggle_comment_open_uuid == props.data[btn_data].uuid
						?   <Div_comment_toolbar_opened comment_uuid={props.data[btn_data].uuid} cnt_comment={props.data[btn_data].cnt_comment}/>
						:   <Div_comment_toolbar_closed comment_uuid={props.data[btn_data].uuid} cnt_comment={props.data[btn_data].cnt_comment}/>
					}
					
					<div id={"comments_" + props.data[btn_data].uuid} 
						 class={
									toggle_comment_open_uuid == props.data[btn_data].uuid
									?   "w-full px-[32px] bg-[#171717]"
									:   "hidden"
							   }>
						{
							props.data[btn_data].comments != null
							?   <Div_comments data={props.data[btn_data].comments} uuid_upper={props.data[btn_data].uuid} />
							:   <Div_sender uuid_upper={props.data[btn_data].uuid} />
						}
					</div>
				</div>
				
			</div>
		)

		return (
			<div class="w-full">
				{chatList}
			</div>
		)
	}

	ReactDOM.render(<Div_contents data={data_chat_log} />, document.getElementById("div_contents"))   
	ReactDOM.render(<Div_header_refresh />, document.getElementById("div_header_refresh"))   
}