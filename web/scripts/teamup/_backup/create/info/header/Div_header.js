function Div_header(props) {
	return (
		<div class="flex flex-between justify-cetner items-center w-full h-[48px]">
			<span class={class_header_title}>{props.title}</span>
			<p class={props.class_selection}>{props.selection_name}</p>
			<img src={props.accrodian_image} class="ml-[30px] mr-[16px]"/>
		</div>   
	)
}