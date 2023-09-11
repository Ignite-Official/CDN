function setCookie( name, value, expiredays ) { 
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin() { 
	document.getElementById('defaultModal').style.display = "none";    // 팝업창 아이디
}

function todaycloseWin() { 
	setCookie( "ncookie", "done" , 1 );     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)
	document.getElementById('defaultModal').style.display = "none";    // 팝업창 아이디
}