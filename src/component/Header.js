import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<section className="app__navbar__top">
				<nav className="navbar fixed-top navbar-light">
				  <a className="navbar-brand" href="">
				  	<img src="github-logo.svg" alt="github"/>
				  </a>

				  <h3 className="app__title">Todo List</h3>

				  <p></p>

				</nav>	
			</section>
		)
	}
}


export default Header;