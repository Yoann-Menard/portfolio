import React from 'react';
import bep from '../assets/diplôme/BEP.jpg';
import rncp from '../assets/diplôme/RNCP.jpg';
import css3 from '../assets/languages/css3.png';
import html5 from '../assets/languages/html5.png';
import js from '../assets/languages/javascript.png';
import laravel from '../assets/languages/laravel.png';
import mysql from '../assets/languages/mysql.png';
import php from '../assets/languages/php.png';
import reactjs from '../assets/languages/reactjs.png';
import symfony from '../assets/languages/symfony.png';

const Competences = () => {
	return (
		<div className='Competences'>
			<h4>
				<em class='competences-earwig'>Compétences</em>
			</h4>
			<div className='col s12'>
				<div className='card-skills overflow-hidden'>
					<div className='card-content center-when-small'>
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
								<img alt='javascript logo' className='language-icon' src={js} />
								JavaScript
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
								<img alt='React logo' className='language-icon' src={reactjs} />
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

						<div className='diplome'>
							<h3>
								<em>Diplômes</em>
							</h3>
							<a
								className='bep-link'
								href={bep}
								target='__blank'
								rel='noopener noreferrer'
							>
								<img alt='bep Yoann Menard' src={bep}></img>
							</a>
							<a
								className='rncp-link'
								href={rncp}
								target='__blank'
								rel='noopener noreferrer'
							>
								<img alt='RNCP+5 Yoann Menard' src={rncp}></img>
							</a>
						</div>

						<div className='formation'>
							<h3>
								<em>Formation</em>
							</h3>

							<b className='white-text'>2025-2026</b>
							<p className='white-text'>
								<a
									className='language-link'
									href='https://3wacademy.fr/3w-academy-pro/formation-en-alternance/formation-concepteur-developpeur-application'
									target='_blank'
									rel='noopener noreferrer'
								>
									"Concepteur Développeur d'Applications" - 3W Academy
									(Bac+3/Bac+4)
									<br />
									Formation en alternance (Actuellement sans contrat), domaine :
									programmation orientée objet.
								</a>
							</p>

							<b className='white-text'>2021 - 2022</b>
							<p className='white-text'>
								<a
									className='language-link'
									href='https://www.webacademie.org/la-formation/24-mois-pour-devenir-developpeur/'
									target='_blank'
									rel='noopener noreferrer'
								>
									"Intégrateur – Développeur Web – FullStack" | Web@CADEMIE |
									Bac+2 (BTS, DUT ou équivalents) (NV3)
								</a>
							</p>

							<b className='white-text'>2019 - 2021</b>
							<p className='white-text'>
								<a
									className='language-link'
									href='https://web.archive.org/web/20220331061251/https://campus.samsung.fr/'
									target='_blank'
									rel='noopener noreferrer'
								>
									"Intégrateur – Développeur Web – FullStack" (Bac+2) Samsung
									Campus
								</a>
							</p>
						</div>
						{/* <b class='white-text'>2015-2018</b>
							<p class='white-text'>
								Lycée Robert Desnos Crépy en Valois Bac Pro Technicien d'usinage
							</p>

							<b class='white-text'>2015</b>
							<p class='white-text'>
								Lycée Polyvalent Jules Verne Château-Thierry Bac Pro Systèmes
								Électroniques Numérique
							</p> */}
						{/* </div> */}

						<div className='experiences professionnelles'>
							<h3>
								<em class='text'>Expériences professionnelles</em>
							</h3>
							<b class='red-text'>Octobre 2024 - Novembre 2024 (1 mois)</b>
							<p class='white-text'>
								<strong>
									Développeur Web (Immersion Professionnelle) | Cyberun
									(Télétravail)
								</strong>
							</p>
							<p class='white-text'>
								- Ajout d'un composant <strong>Upload.tsx</strong> permettant
								d'uploader un logo (format svg) de manière dynamique (exemple :
								changer le titre de la solution contenue dans le logo)
							</p>
							<p class='white-text'>
								- Technologie utilisée :{' '}
								<strong>
									React.js, TypeScript, JSON Forms, PHP, PostgreSQL
								</strong>
							</p>

							<b class='red-text'>
								{' '}
								29 Juillet 2024 - 09 Août 2024 (2 semaines)
							</b>
							<p class='white-text'>
								<strong>
									Développeur Web (Immersion Professionnelle) | Zehome (8 Rue
									Des Pirogues de Bercy, 75012 Paris)
								</strong>
							</p>
							<p class='white-text'>
								- Ajout d'une nouvelle page Location Vacances affichant tous les
								biens Airbnb Zehome
							</p>
							<p class='white-text'>
								- Application de la charte graphique{' '}
								<strong>Zehome Immobilier</strong> et{' '}
								<strong>Zehome Conciergerie</strong>
							</p>
							<p class='white-text'>
								- Ajout d'un CMS (Listings) contenant les biens Airbnb Zehome
							</p>
							<p class='white-text'>
								- Ajustement de plusieurs éléments de manière responsive
							</p>
							<p class='white-text'>
								- Technologie utilisée : <strong>Webflow</strong>
							</p>

							<b class='red-text'>
								27 Septembre 2021 - 18 Novembre 2022 (1 an et 2 mois)
							</b>
							<p class='white-text'>
								<strong>
									Développeur Full Stack (ALTERNANCE) | Troov (Neuilly sur
									Seine)
								</strong>
							</p>
							<p class='white-text'>
								- Ajout de nouvelles fonctionnalités : Service Troov / Troov ton
								créneau.
							</p>
							<p class='white-text'>
								- Intégration maquette graphique (responsive) de la page
								d'accueil
							</p>
							<p class='white-text'>- Correction de bugs</p>
							<p class='white-text'>- Code Refactoring</p>
							<p class='white-text'>
								- Technologie utilisée :{' '}
								<strong>Nuxt.js, Node.js, MongoDB</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Competences;
