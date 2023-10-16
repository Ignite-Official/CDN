// 메타 태그 변경 - title
function change_meta_tag(title, content) {
	document.title = title
	$("meta[property='og\\:title']").attr("content", content);
}