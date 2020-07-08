import React from 'react';
import css3 from '../assets/languages/css3.png';
import html5 from '../assets/languages/html5.png';
import js from '../assets/languages/javascript.png';
import laravel from '../assets/languages/laravel.png';
import mysql from '../assets/languages/mysql.png';
import php from '../assets/languages/php.png';
import reactjs from '../assets/languages/reactjs.png';
import symfony from '../assets/languages/symfony.png';
import bep from '../assets/diplôme/BEP.jpg';

const Competences = () => {
	return (
		<div className='Competences'>
			<h4>
				<em class='competences-earwig'>Compétences</em>
			</h4>
			<div classname='row'>
				<div className='col s12'>
					<div className='card-home overflow-hidden'>
						<div className='card-content center-when-small'>
							<div className='row'></div>
							<ul className='col 16 m6 s6'>
								<li className='language orange-text'>
									<img alt='html logo' className='language-icon' src={html5} />
									HTML5
								</li>
								<li className='language blue-text'>
									<img alt='css logo' className='language-icon' src={css3} />
									CSS3
								</li>
								<li className='language yellow-text'>
									<img
										alt='javascript logo'
										className='language-icon'
										src={js}
									/>
									Javascript
								</li>

								<li className='language orange-text text-accent-4'>
									<img
										alt='laravel logo'
										className='language-icon'
										src={laravel}
									/>
									Laravel
								</li>
							</ul>

							<ul className='col l6 m6 s6'>
								<li className='language grey-text'>
									<img alt='PHP logo' className='language-icon' src={php} />
									PHP
								</li>
								<li className='language light-blue-text'>
									<img
										alt='React logo'
										className='language-icon'
										src={reactjs}
									/>
									ReactJS
								</li>
								<li className='language light-green-text'>
									<img alt='MySQL logo' className='language-icon' src={mysql} />
									MySQL
								</li>
								<li className='language white-text'>
									<img
										alt='Symfony logo'
										className='language-icon'
										src={symfony}
									/>
									Symfony
								</li>
							</ul>

							<div className='formation'>
								<div className='row'>
									<h3>
										<em>Formation</em>
									</h3>
								</div>
							</div>

							<div className='experiences professionnels'>
								<div className='row'>
									<h3>
										<em class='green-text'>Expériences professionnel</em>
									</h3>
									<b class='blue-text'>2015-2016 (5 semaines)</b>
									<p class='red-text'>
                    (UMA) Usinage Mécanique de l'aisne Neuilly-Saint-Front
                    perçage de pièces
									</p>
                  <b class='pink-text'></b>
									<p class='yellow-text'>
										(PSD) Paris Saint Denis Aciers Le Plessis Belleville
										Marquage par micro percussion
									</p>
									<p class='blue-text'>
										Baudoin SAS Mareuil-lès Meaux Taraudage, Filetage et
										utilisation du logiciel Solidworks
									</p>
								</div>
							</div>

							<div className='diplome'>
								<div className='row'>
									<h3>
										<em>Diplôme</em>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Competences;
