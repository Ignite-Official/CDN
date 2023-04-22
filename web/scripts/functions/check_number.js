// 텍스트박스에 숫자가 입력되면 true, 아니면 false
// 사용 방법: onkeypress="return check_number(event)"
function check_number(event) {
	if(event.key >= 0 && event.key <= 9) { return true; }
	return false;
  }