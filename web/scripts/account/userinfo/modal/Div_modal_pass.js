function Div_modal_pass() {
	return (
		<div class={class_modal}>

			<div class="relative bg-[#262626] rounded-lg shadow">
				<Div_modal_title text={"정말 건너뛸까요?"} />

				<div class="flex flex-row justyfy-center items-center w-full h-[150px] min-h-[150px] max-h-[150px] overflow-auto">

					<button class="text-white bg-[#340BB8] font-medium rounded-lg text-sm text-center w-1/2 h-full
								   hover:bg-[#26009F] hover:border hover:border-white"
							onClick={() => document.getElementById("btn_modal_pass_close").click()}>
						아니오
					</button>

					<button onClick={() => location.href='/'}
							class="text-[#EDEDED] bg-transparent font-medium rounded-lg text-sm text-center w-1/2 h-full
								hover:border hover:border-white">
						예
					</button>
				</div>
			</div>
		</div>
	)
}