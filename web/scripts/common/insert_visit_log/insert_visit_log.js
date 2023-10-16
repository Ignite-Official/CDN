async function insert_visit_log() {
	const data = await fetch("/blank/ajax_insert_visit_log")
					  .then(res=> { return res.json(); })
					  .then(res=> { return res; });
}

insert_visit_log()