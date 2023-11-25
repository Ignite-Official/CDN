// 프로필 사진 - 새 이미지 업로드
function check_file_upload_profile() {
	var formData = new FormData();
	formData.append('file_input', $('#id_file_input_profile')[0].files[0]);
	formData.append('host', window.location.href.toString());
	formData.append('note', "Profile 이미지");
	formData.append('active', -1);

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
			update_image_info("profile", data)
		},
		error: function (e) {
			alert("파일 업로드에 실패하였습니다.");
		}
	});
}