// 장르 입력 여부 확인
let toggle_insert_genre = 0
function genre_form_check() {
	// 텍스트박스 하단 메시지
	function Div_txt_genre_add_textbox_len_msg(props) { 
		return (
			<div class={props.class}>
				<svg fill={props.color} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.83342 12.8334L13.7084 6.95835L12.5417 5.79169L7.83342 10.5L5.45841 8.12502L4.29175 9.29169L7.83342 12.8334ZM9.00008 17.3334C7.8473 17.3334 6.76397 17.1145 5.75008 16.6767C4.73619 16.2395 3.85425 15.6459 3.10425 14.8959C2.35425 14.1459 1.76064 13.2639 1.32341 12.25C0.885637 11.2361 0.666748 10.1528 0.666748 9.00002C0.666748 7.84724 0.885637 6.76391 1.32341 5.75002C1.76064 4.73613 2.35425 3.85419 3.10425 3.10419C3.85425 2.35419 4.73619 1.7603 5.75008 1.32252C6.76397 0.885298 7.8473 0.666687 9.00008 0.666687C10.1529 0.666687 11.2362 0.885298 12.2501 1.32252C13.264 1.7603 14.1459 2.35419 14.8959 3.10419C15.6459 3.85419 16.2395 4.73613 16.6767 5.75002C17.1145 6.76391 17.3334 7.84724 17.3334 9.00002C17.3334 10.1528 17.1145 11.2361 16.6767 12.25C16.2395 13.2639 15.6459 14.1459 14.8959 14.8959C14.1459 15.6459 13.264 16.2395 12.2501 16.6767C11.2362 17.1145 10.1529 17.3334 9.00008 17.3334ZM9.00008 15.6667C10.8612 15.6667 12.4376 15.0209 13.7292 13.7292C15.0209 12.4375 15.6667 10.8611 15.6667 9.00002C15.6667 7.13891 15.0209 5.56252 13.7292 4.27085C12.4376 2.97919 10.8612 2.33335 9.00008 2.33335C7.13897 2.33335 5.56258 2.97919 4.27091 4.27085C2.97925 5.56252 2.33341 7.13891 2.33341 9.00002C2.33341 10.8611 2.97925 12.4375 4.27091 13.7292C5.56258 15.0209 7.13897 15.6667 9.00008 15.6667Z"/>
				</svg>
				<span>최소 1글자 이상</span>
			</div>
		)
	}

	// 텍스트박스에 입력한 값 (이메일)
	let genre = document.getElementById("txt_genre_add").value.trim()

	let class_btn_enabled = "rounded-lg w-[128px] h-[36px] bg-[#5F5F5F] text-white text-[14px] hover:bg-white hover:text-black mr-[14px]"
	let class_btn_disabled = "rounded-lg w-[128px] h-[36px] bg-[#3B3B3B] text-[#727272] text-[14px] hover:bg-[#3B3B3B] mr-[14px] cursor-not-allowed"
	let class_txt_genre_add_textbox_len_enabled = "flex flex-row justify-start items-start text-[#8B8B8B] text-[12px] font-[500] space-x-[7.67px]"
	let class_txt_genre_add_textbox_len_disabled = "flex flex-row justify-start items-start text-[#FA5252] text-[12px] font-[500] space-x-[7.67px]"

	// 값이 입력되지 않음
	if (genre == "" || genre == null) {
		document.getElementById("btn_genre_add_confirm").className = class_btn_disabled
		ReactDOM.render(<Div_txt_genre_add_textbox_len_msg class={class_txt_genre_add_textbox_len_disabled}
														color="#FA5252" />, document.getElementById("txt_genre_add_textbox_len"))
		toggle_insert_genre = 0
		return false


	// 값이 입력됨
	} else {
		document.getElementById("btn_genre_add_confirm").className = class_btn_enabled
		ReactDOM.render(<Div_txt_genre_add_textbox_len_msg class={class_txt_genre_add_textbox_len_enabled}
														color="#8B8B8B" />, document.getElementById("txt_genre_add_textbox_len"))
		toggle_insert_genre = 1
		return true
	}
}