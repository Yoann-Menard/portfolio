import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		/* < !--Primary Page Layout
       –––––––––––––––––––––––––––––––––––––––––––––––––– -->
       */
		<div className='Menu'>
			<div class='one-half column'>
				<header>
					<nav class='nav red'>
						<div class='nav-wrapper'>
							<ul class='nav__list'>
								<li>
									<Link className='nav__link' to='/'>
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
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
};
export default Menu;
