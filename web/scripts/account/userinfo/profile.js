// 문장 높이에 따라 textarea의 높이 자동 조절
document.getElementById('txt_intro').addEventListener('keydown', textarea_autosize);
document.getElementById('txt_intro2').addEventListener('keydown', textarea_autosize);
document.getElementById('txt_intro3').addEventListener('keydown', textarea_autosize);


// 프로필 이미지에 닉네임의 첫 글자를 보여준다
function first_nickname_char() {
	function Div_profile_img(props) {
		return(
			<div class="flex justify-end items-end rounded-full h-[88px] w-[88px] bg-[#5D5FEF] border border-[#D4D4D4]">
				<span class="text-white text-[40px] font-[700] items-center text-center pl-[15px] pt-[15px] w-[88px] h-[88px]">
					{props.nickname}
				</span>
	
				<div class="flex flex-wrap rounded-full h-6 w-6 bg-[#D4D4D4] items-center justify-center">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.99984 9.20833C6.729 9.20833 7.3488 8.95312 7.85921 8.44271C8.36963 7.93229 8.62484 7.3125 8.62484 6.58333C8.62484 5.85417 8.36963 5.23438 7.85921 4.72396C7.3488 4.21354 6.729 3.95833 5.99984 3.95833C5.27067 3.95833 4.65088 4.21354 4.14046 4.72396C3.63005 5.23438 3.37484 5.85417 3.37484 6.58333C3.37484 7.3125 3.63005 7.93229 4.14046 8.44271C4.65088 8.95312 5.27067 9.20833 5.99984 9.20833ZM5.35817 5.94167L5.73734 5.125C5.78595 5.01806 5.87345 4.96458 5.99984 4.96458C6.12623 4.96458 6.21373 5.01806 6.26234 5.125L6.6415 5.94167L7.45817 6.32083C7.56511 6.36944 7.61859 6.45694 7.61859 6.58333C7.61859 6.70972 7.56511 6.79722 7.45817 6.84583L6.6415 7.225L6.26234 8.04167C6.21373 8.14861 6.12623 8.20208 5.99984 8.20208C5.87345 8.20208 5.78595 8.14861 5.73734 8.04167L5.35817 7.225L4.5415 6.84583C4.43456 6.79722 4.38109 6.70972 4.38109 6.58333C4.38109 6.45694 4.43456 6.36944 4.5415 6.32083L5.35817 5.94167ZM1.33317 11.25C1.01234 11.25 0.737684 11.1358 0.509212 10.9073C0.28074 10.6788 0.166504 10.4042 0.166504 10.0833V3.08333C0.166504 2.7625 0.28074 2.48785 0.509212 2.25937C0.737684 2.0309 1.01234 1.91667 1.33317 1.91667H3.17067L3.89984 1.12917C4.00678 1.00278 4.1356 0.907986 4.2863 0.844792C4.43699 0.781597 4.59498 0.75 4.76025 0.75H7.23942C7.4047 0.75 7.56268 0.781597 7.71338 0.844792C7.86407 0.907986 7.99289 1.00278 8.09984 1.12917L8.829 1.91667H10.6665C10.9873 1.91667 11.262 2.0309 11.4905 2.25937C11.7189 2.48785 11.8332 2.7625 11.8332 3.08333V10.0833C11.8332 10.4042 11.7189 10.6788 11.4905 10.9073C11.262 11.1358 10.9873 11.25 10.6665 11.25H1.33317ZM10.6665 10.0833V3.08333H1.33317V10.0833H10.6665Z" fill="#3B3B3B"/>
					</svg>
				</div>
			</div>
		)
	}

	// 텍스트박스에 입력한 값 (닉네임)
	let nickname = document.getElementById("txt_nickname").value.trim()

	// 값이 입력되지 않음
	if (nickname == "" || nickname == null) {
		ReactDOM.render(<Div_profile_img nickname="" />, document.getElementById("div_profile_img"))
		return false

	// 값이 입력됨
	} else {
		ReactDOM.render(<Div_profile_img nickname={nickname.charAt(0)} />, document.getElementById("div_profile_img"))
		return true
	}
}



// 한줄 자기소개에 입력한 문장의 글자 개수를 센다.
function get_txt_head_intro_length() {
	function Div_txt_head_intro_len(props) {
		return(
			<span class="text-[#8B8B8B] text-[12px] font-[500]">{props.len}/30</span>
		)
	}

	// 텍스트박스에 입력한 값 (한줄 자기소개)
	let txt_head_intro_len = document.getElementById("txt_head_intro").value.trim()

	if (txt_head_intro_len.length <= 30) {
		ReactDOM.render(<Div_txt_head_intro_len len={txt_head_intro_len.length.toString()} />, document.getElementById("txt_head_intro_len"))
	}
}