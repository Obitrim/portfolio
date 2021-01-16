import React, { useState } from 'react';
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/MenuOpen';

const Index = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleNavItems(evt) {
		evt.preventDefault();
		setIsOpen(!isOpen)
	}
	return (
		<section className="Navbar BgLight">
			<div className="Container">
				<div className="Navbar__Logo">online</div>
				<a href="#" className="Navbar__Toggler" onClick={toggleNavItems}>
					<MenuIcon/>
				</a>
		    	<nav className={`Navbar__NavItems ${isOpen && 'Navbar__NavItems--Open'}`}>
		    		<a className="Navbar__NavItem" href="#my-works" onClick={() => setIsOpen(false)}>My works</a>
		    		<a className="Navbar__NavItem" href="#about" onClick={() => setIsOpen(false)}>About</a>
		    		<a className="Navbar__NavItem" href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
		    		<a className="Navbar__NavItem" href="#hire-me" onClick={() => setIsOpen(false)}>Hire me</a>
		    	</nav>
			</div>
		</section>
	)
}

export default Index;