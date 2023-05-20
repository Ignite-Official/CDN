async function get_menu_userinfo_card() {    
	const data = await fetch("/get_menu_userinfo_card/")
					  .then(res=> { return res.json(); })
					  .then(res=> { return res; });
					  //data.url_portfolio
	ReactDOM.render(<Div_menu_username_card data={data} />, document.getElementById("menu_username_card"))
}

get_menu_userinfo_card()