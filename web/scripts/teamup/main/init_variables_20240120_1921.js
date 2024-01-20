/***** 클래스 *****/
let class_tab_on = "text-[#AE9DE3] text-[16px] font-[600] w-fit px-[16px] py-[12px] border-b-2 border-[#AE9DE3] cursor-pointer"
let class_tab_off = "text-[#A3A3A3] text-[16px] font-[600] w-fit px-[16px] py-[12px] cursor-pointer hover:text-[#AE9DE3] hover:border-b-2 hover:border-[#AE9DE3]"

// 장르, 역할, 악기 선택 / 미선택 시 버튼
let class_btn_act_notselected = "w-fit h-[40px] text-white font-[600] text-[14px] bg-transparent border border-2-[#525252] rounded-lg px-[16px] hover:bg-[#26009F]"
let class_btn_act_selected = "w-fit h-[40px] text-white font-[600] text-[14px] bg-[#26009F] border border-2-[#525252] rounded-lg px-[16px] hover:bg-transparent"

// 모달 크기
let class_modal_content_all = "flex flex-col h-[90px] min-h-[90px] max-h-[90px] p-[20px] space-y-[10px] overflow-auto"
let class_modal_content_notall = "flex flex-col h-[300px] min-h-[300px] max-h-[300px] p-[20px] space-y-[10px] overflow-auto"

/***** 스크롤 자동 생성 *****/
let toggle_page_artist = false; let toggle_page_team = false
let toggle_tab = "artist"
let page_artist = 1;    let page_team = 1

/***** 필터 데이터 *****/
let class_filter_button = "flex flex-row justify-center items-center w-fit bg-[#292929] px-[16px] py-[11px] rounded-xl cursor-pointer h-[40px] min-h-[40px] max-h-[40px] md:w-[158px]"
let class_modal_btn_13 = "text-[#EDEDED] bg-transparent font-medium rounded-lg text-sm text-center w-1/3 h-full border border-gray-500 hover:border-white hover:bg-gray-700"

// 팀업 상태
let data_artist_teamup = "ALL"; let data_team_teamup = "ALL"

// 온라인 가능
let data_artist_online = "ALL"; let data_team_online = "ALL"

// 지역
let data_artist_region = null;  let data_team_region = null
let data_artist_region_all = true;  let data_team_region_all = true

// 장르
let data_artist_genre = null;   let data_team_genre = null
let data_artist_genre_all = true;   let data_team_genre_all = true

// 역할
let data_artist_role = null;  let data_team_role = null
let data_artist_role_all = true;  let data_team_role_all = true