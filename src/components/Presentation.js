import React from 'react';
import Yoann from '../assets/photo/yoann.menard@epitech.eu.jpg';

const Presentation = () => {
	return (
		<div className='Presentation'>
			<div class='col s12 m8 offset-m2 l6 offset-l3'>
				<div class='row valign-wrapper'></div>
			</div>
			<section class='Presentation' id='intro'>
				<div className='card-presentation overflow-hidden'>
					<div class='col s2'>
						<img
							src={Yoann}
							alt='Yoann Epitech'
							class=' circle responsive-img'
						/>
					</div>

					<div class='material red-text'>
						<h1>
							<span class='red-text accent-5'>
								<strong>Bonjour et bienvenue dans mon portfolio !</strong>
							</span>
						</h1>
					</div>
					<br />

					<div class='material yellow-text'>
						<p>
							<strong>
								Je m'appelle Yoann Menard, je suis passionné par l'informatique
								et les jeux vidéo.
							</strong>
						</p>
					</div>
					<br />

					<div class='material blue-text'>
						<p class='section__subtitle section__subtitle--intro'>
							<strong>
								Je suis actuellement en formation Concepteur Développeur
								d'Applications à la 3W Academy.
							</strong>
							{/* <strong>
								Je suis actuellement étudiant en développement web
								Front-end/Back-end au Samsung campus situé à
								<br />
								Paris 12 Rue Fructidor 75017, Saint-Ouen.{' '}
							</strong> */}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Presentation;
