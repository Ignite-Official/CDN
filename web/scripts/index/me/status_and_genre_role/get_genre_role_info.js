// 장르, 역할, 악기 목록 출력
async function get_genre_role_info() {
    function Div_genre(props) {
        const genre_role_List = Object.keys(props.data).map((btn_data) =>
            <button type="button" 
                    class="w-fit max-w-[100px] pl-[8px] pr-[8px] mb-[6px] h-[20px] flex justify-center items-center 
                           border-gray-100 focus:outline-none bg-white rounded-md border border-gray-200 
                           hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                <p class="text-[11px] font-[600] text-[#3B3B3B] truncate ...">{props.data[btn_data]}</p>
            </button>
        )
        
        return (
            <div class="flex flex-wrap justify-center items-center space-x-[6px]">
                {genre_role_List}
            </div>
        )
    }

    // 현재 경로
    const request_data = new FormData();
    request_data.append('host', window.location.href.toString());

    // 프로필 데이터 가져오기
    const data = await fetch("/get_genre_role_info/", {
                    method: "post", 
                    headers: { "X-CSRFToken": getCookie("csrftoken"), },
                    body: request_data
                    })
                    .then(res=> { return res.json(); })
                    .then(res=> { return res; });

    ReactDOM.render(<Div_genre data={data} />, document.getElementById("div_genre"));
}