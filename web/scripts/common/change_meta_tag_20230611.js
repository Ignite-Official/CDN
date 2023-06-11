// 메타 태그 변경
function change_meta_tag(title="Ignite", content="당신의 젊음에 불을 지필 수 있는 곳", url=null, url_image=null) {
	document.title = title
	$("meta[property='og\\:title']").attr("content", title );
	$("meta[property='og\\:description']").attr("content", content );
	$("meta[property='og\\:author']").attr("content", 'Ignite Corp.' );

	if (url != null) {
		$("meta[property='og\\:url']").attr("content", url );
	}
	
	if (url != null) {
		$("meta[property='og\\:image']").attr("content", url_image );
	}

}