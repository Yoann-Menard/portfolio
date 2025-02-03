import React from 'react';
import cv from '../assets/cv/CV_Menard_Yoann.pdf';

const Coordonnees = () => {
	return (
		<div className='Coordonnees'>
			<section class='about-me' id='about'>
				<h2 class='section__title section__title--about white-text'>
					<em>Coordonnées</em>
				</h2>
				<div className='card-localisation overflow-hidden'>
					<div class='about'>
						<div class='about-profile'>
							<br />
							<h5 class='name'>
								<span class='materialize red-text'>Nom: Yoann Menard</span>
							</h5>
						</div>
						<br />

						<div class='about-profile'>
							<br />
							<h5 class='email'>
								<span class='materialize yellow-text'>
									E-mail: yoann.menard@epitech.eu
								</span>
							</h5>
						</div>
						<br />

						<div class='about-profile'>
							<br />
							<h5 class='phone'>
								<span class='materialize blue-text'>Tél: 07 83 10 11 33</span>
							</h5>
						</div>
						<br />

						<div class='about-profile'>
							<br />
							<h5 class='birth'>
								<span class='materialize purple-text'>
									Date de naissance: 21 septembre 1999
								</span>
							</h5>
						</div>
						<br />

						<div class='about-profile'>
							<br />
							<h5 class='address'>
								<span class='materialize white-text'>
									Adresse: 52 Rue Louis Faussard, 60890 Neufchelles
								</span>
							</h5>
						</div>
						<br />

						<div class='about-profile'>
							<br />
							<h5 class='Nationality'>
								<span class='materialize pink-text'>
									Nationalité: française
								</span>
							</h5>
						</div>
						<br />

						<div class='about-profile-cv'>
							<a
								class='waves-effect waves-light btn-large pulse blue'
								href={cv}
								target='__blank'
								rel='noopener noreferrer'
							>
								Télecharger mon CV
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Coordonnees;
