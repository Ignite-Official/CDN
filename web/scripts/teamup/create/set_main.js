function set_main() {
	ReactDOM.render(<Div_header />, document.getElementById("div_header"));
	ReactDOM.render(<Div_name />, document.getElementById("div_name"));
	ReactDOM.render(<Div_account />, document.getElementById("div_account"));
	ReactDOM.render(<Div_gender />, document.getElementById("div_gender"));
	get_genre_list()
	get_role_list()
	ReactDOM.render(<Div_intro />, document.getElementById("div_intro"));
	document.getElementById('txt_intro').addEventListener('keydown', textarea_autosize);
	ReactDOM.render(<Div_button_list />, document.getElementById("div_button_list"));            
}