// 프로필 (수정하기 모드)
function Div_profile_edit(props) {    
	return (
		<div class="flex flex-col pb-[150px]">
			<div class="bg-[#292929] w-full h-fit rounded-xl justify-center items-center text-center">
                <input type="text" placeholder="한줄 자기소개를 작성해주세요" id="txt_head_intro" name="txt_head_intro" maxlength="30"
                       class="w-[327px] h-[16px] mt-[12px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide 
                              text-start text-[#8B8B8B] text-[14px] font-[500] mt-[4px] mb-[4px] pl-[16px] pr-[16px]
                              focus:ring-white focus:border-white focus:text-white"/>
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
                    <textarea placeholder="스스로에 대한 소개를 자유롭게 작성해주세요" id="txt_intro" name="txt_intro"
                              class="w-[327px] h-fit mt-[12px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide
                                     text-start text-[#8B8B8B] text-[14px] font-[500] pt-[14px] pb-[14px] pl-[16px] pr-[16px]
                                     focus:ring-white focus:border-white focus:text-white">
                        {props.data.txt_intro}
                    </textarea>
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
                    <textarea placeholder="만들고 싶은 음악에 대해 자유롭게 작성해주세요" id="txt_intro2" name="txt_intro2"
                              class="w-[327px] h-fit mt-[12px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide
                                     text-start text-[#8B8B8B] text-[14px] font-[500] pt-[14px] pb-[14px] pl-[16px] pr-[16px]
                                     focus:ring-white focus:border-white focus:text-white">
                        {props.data.txt_intro_music}
                    </textarea>
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
                    <textarea placeholder="협업하고 싶은 사람에 대해 자유롭게 작성해주세요" id="txt_intro3" name="txt_intro3"
                              class="w-[327px] h-fit mt-[12px] bg-[#292929] border-0 rounded-lg resize-none scroll-hide
                                     text-start text-[#8B8B8B] text-[14px] font-[500] pt-[14px] pb-[14px] pl-[16px] pr-[16px]
                                     focus:ring-white focus:border-white focus:text-white">
                        {props.data.txt_intro_collaboration}
                    </textarea>
				</div>
			</div>

            <div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
                <a href='/account/userinfo/genre/' class="flex flex-row justify-between items-center text-start">
                    <div class="flex flex-row justify-between items-center">
                        <div class="text-[14px] font-[700] text-white">장르 수정</div>
                    </div>
                    <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle.svg"
                         onClick={() => location.href='/account/userinfo/genre/'} class="w-[7px] h-[10px] cursor-pointer"/>
                </a>
            </div>


            <div class="w-[360px] max-w-[360px] pl-[16px] pr-[16px] mt-[24px] pb-[24px] space-y-[6px] border-b-2 border-[#292929]">
                <a href='/account/userinfo/role/' class="flex flex-row justify-between items-center text-start">
                    <div class="flex flex-row justify-between items-center">
                        <div class="text-[14px] font-[700] text-white">역할 수정</div>
                    </div>
                    <img src="https://cdn.jsdelivr.net/gh/Ignite-Official/CDN/web/image/svg/right_angle.svg" 
                         onClick={() => location.href='/account/userinfo/role/'} class="w-[7px] h-[10px] cursor-pointer"/>
                </a>
            </div>
		</div>
	)
}