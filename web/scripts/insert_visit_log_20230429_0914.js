function getCookie(name) {
	let cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return cookie ? cookie[2] : null;
}

async function insert_visit_log() {
	//const hostdata = JSON.stringify({host: window.location.href.toString()})
	const data = new FormData();
	data.append('host', window.location.href.toString());

	await fetch("/blank/ajax_insert_visit_log/", {
					method: "post", 
					headers: {
						"X-CSRFToken": getCookie("csrftoken"),
					},
					body: data
				})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
}

insert_visit_log()