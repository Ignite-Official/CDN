function change_popup(pagenum) {
	ReactDOM.render(<Div_popup_botton page={pagenum} />,document.getElementById("div_popup_button"))
		
	if (pagenum == 1) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"비회원이라면 회원가입 후 로그인을 해주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/01.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 2) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"좌측 상단 메뉴를 눌러주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/02.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 3) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"메뉴에서 아이디 창을 눌러주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/03.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 4) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"포트폴리오 탭에 들어간 후 수정하기를 눌러주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/04.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 5) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"포트폴리오 URL을 입력해주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/08.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 6) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"프로필 탭에 들어간 후 수정하기를 눌러주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/05.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 7) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"프로필 사진을 설정하고 각 항목을 작성해주세요."} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/06.png"} />,
										document.getElementById("popup_page")
						)
	} else if (pagenum == 8) {
		ReactDOM.render(<Div_popup_page page={pagenum}
										text={"포트폴리오 업로드 시 이벤트에 자동 참여됩니다!"} 
										image={"https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/notice/20230722/workthrough/07.png"} />,
										document.getElementById("popup_page")
						)
	}
	
}