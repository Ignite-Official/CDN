async function get_userinfo_list() {   

	function Div_label(props) {
		return (
			<span class="text-[#BCBCBC] text-[11px] font-[500]">
				{props.text}
			</span>
		)
	}

	const data = await fetch("/account/ajax_get_userinfo_menu/")
					.then(res=> { return res.json(); })
					.then(res=> { return res; });

	ReactDOM.render(<Div_label text={data.account} />, document.getElementById("lbl_account"));
	ReactDOM.render(<Div_label text={data.nickname} />, document.getElementById("lbl_nickname"));
	ReactDOM.render(<Div_label text={data.groupname} />, document.getElementById("lbl_group"));
	if (data.birthday == "9999.12.31") {
		ReactDOM.render(<Div_label text="Unknown" />, document.getElementById("lbl_birthday"));
	} else {
		ReactDOM.render(<Div_label text={data.birthday} />, document.getElementById("lbl_birthday"));
	}
	ReactDOM.render(<Div_label text={data.gender} />, document.getElementById("lbl_gender"));
}

get_userinfo_list()