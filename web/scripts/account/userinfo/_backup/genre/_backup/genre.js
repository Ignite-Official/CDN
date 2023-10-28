// 선택한 장르를 저장하는 리스트
var genre_selected_list = []

// 장르 목록 가져오기
async function get_genre_list() {   

	function Div_genre_btn_list(props) {
		const btnList = Object.keys(props.data).map((btn_data) =>
			<button type="button" id={props.data[btn_data].uuid} name={props.data[btn_data].uuid}
					onClick={() => classname_change(props.data[btn_data].uuid)}
					class="rounded-lg w-[98px] h-[98px] bg-[#5F5F5F] mb-[14px] ml-[8px] mr-[8px]
						hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F]
						justify-items-center text-white">
				{props.data[btn_data].name}
			</button>
		)

		return (
			<div class="flex flex-row justify-center items-center grid grid-cols-3 w-full max-w-[360px]" id="div_genre_btn_list_sub">
				{btnList}
			</div>
		)
	}

	const data = await fetch("/account/ajax_get_genre_list/")
					  .then(res=> { return res.json(); })
					  .then(res=> { return res; });

	ReactDOM.render(<Div_genre_btn_list data={data} />, document.getElementById("div_genre_btn_list"));
	document.getElementById("btn_genre_add").className = "rounded-lg rounded w-[324px] h-[48px] bg-[#5F5F5F] text-white text-[14px] hover:bg-[#340BB8]"
}

get_genre_list()



// 클릭 후 버튼 classname 변경 (배경색 변경)
function classname_change(id) {
	let class_focused = "rounded-lg w-[98px] h-[98px] bg-account-genre-focus focus:bg-center mb-[14px] ml-[8px] mr-[8px] hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F] justify-items-center text-white"
	let class_not_focused = "rounded-lg w-[98px] h-[98px] bg-[#5F5F5F] focus:bg-center mb-[14px] ml-[8px] mr-[8px] hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F] justify-items-center text-white"

	// 이미 선택된 장르인 경우
	if (genre_selected_list.includes(id)) {
		document.getElementById(id).className = class_not_focused
		genre_selected_list = genre_selected_list.filter((element) => element !== id)

	} else if (genre_selected_list.length < 3) {
			document.getElementById(id).className = class_focused
			genre_selected_list.push(id)
	}
}


// "당신의 장르를 추가해주세요" 보이기/숨기기
let toggle_div_genre_add_textbox = 0
function div_genre_add_textbox_show() {
	let class_genre_add_show = "flex flex-col justify-center items-center"
	if (toggle_div_genre_add_textbox == 0) {
		document.getElementById("div_genre_add_button").className = "hidden"
		document.getElementById("div_genre_add_textbox").className = class_genre_add_show
		toggle_div_genre_add_textbox = 1
	} else {
		document.getElementById("div_genre_add_button").className = class_genre_add_show
		document.getElementById("div_genre_add_textbox").className = "hidden"
		toggle_div_genre_add_textbox = 0
	}
}


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


// 장르 추가 (추가 버튼 클릭)
async function insert_genre() {

	if ( toggle_insert_genre == 1) {
		// 텍스트박스에 입력한 값 (장르)
		let genre = document.getElementById("txt_genre_add").value.trim()

		const data = await fetch("/account/ajax_insert_genre/?genre=" + genre)
						.then(res=> { return res.json(); })
						.then(res=> { return res; });

		if (data.CNT == 0) {
			const button = Object.assign(document.createElement('button'))
			button.id = data.uuid
			button.name = data.uuid
			button.className = "rounded-lg w-[98px] h-[98px] bg-[#5F5F5F] mb-[14px] ml-[8px] mr-[8px] hover:bg-account-genre-hover hover:bg-center focus:bg-[#5F5F5F] justify-items-center text-white"
			button.innerText = data.name
			button.onclick = () => classname_change(data.uuid)
			document.getElementById("div_genre_btn_list_sub").appendChild(button)
		}
			
		classname_change(data.uuid)
	}
}