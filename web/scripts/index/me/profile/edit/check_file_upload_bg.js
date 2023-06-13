// 배경 이미지 업로드
function check_file_upload_bg() {
	var formData = new FormData();
	formData.append('file_input', $('#id_file_input_bg')[0].files[0]);
	formData.append('host', window.location.href.toString());
	formData.append('note', "Background 이미지");

	$.ajax({
		type: "POST",
		enctype: 'multipart/form-data',
		url: "/blank/ajax_file_upload/",
		data: formData,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data) {
			get_mypage_profile_info()
		},
		error: function (e) {
			alert("파일 업로드에 실패하였습니다.");
		}
	});
}