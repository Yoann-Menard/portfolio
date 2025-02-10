import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

const Menu = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className='Menu'>
			<div className='one-half column'>
				<header>
					<nav className='nav red'>
						<div className='nav-wrapper'>
							<ul
								className={`nav__list ${isMobileMenuOpen ? 'mobile-open' : ''}`}
							>
								<li>
									<Link className='nav__link' to='/portfolio'>
										Présentation
									</Link>
								</li>
								<li>
									<Link className='nav__link' to='/about'>
										Coordonnées
									</Link>
								</li>
								<li>
									<Link className='nav__link' to='/skills'>
										Compétences
									</Link>
								</li>
								<li>
									<Link className='nav__link' to='/projects'>
										Projets
									</Link>
								</li>
								<li>
									<Link className='nav__link' to='/hobbies'>
										Hobbies
									</Link>
								</li>
								<li>
									<Link className='nav__link' to='/contact'>
										Contact
									</Link>
								</li>
							</ul>
							<button onClick={toggleMenu} className='menu-toggle'>
								☰
							</button>
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
};
export default Menu;
