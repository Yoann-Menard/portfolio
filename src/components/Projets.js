import React from 'react';
import ecommerce from '../assets/projets/ecommerce.png';
import racingjs from '../assets/projets/racingjs.png';
import mothersday from '../assets/projets/mothers_day.png';
import antcolonyorganization from '../assets/projets/ant_colony_organization.png';

const Projets = () => {
	return (
		<div className='Projets'>
			<h2 class='section__title section__title--about white-text'>
				<em class='projects-earwig'>Projets</em>
			</h2>
			<div className='card-home overflow-hidden'>
				<div className='card-projects white-text center-when-small'>
					<h3 class='project-title purple-text'>Ecommerce</h3>
					<a
						href='https://master.d12wc7c8mihmqu.amplifyapp.com/'
						target='__blank'
						rel='noopener noreferrer'
					>
						<img
							alt='screenshot du projet ecommerce'
							width='500'
							className='ecommerce-amazon-en-sueur'
							src={ecommerce}
						></img>
					</a>
					<p class='ecommerce-paragraph'>
						Le projet le plus important de l'année.
						<br />
						Composée d'une équipe de 9 personnes le but du projet était de crée
						un site web
						<br />
						ecommerce avec les technologies React et laravel.
						<br />
						L'utilisateur peut rechercher un modèle 3D d'une pièce qu'il
						souhaite imprimer.
					</p>

					<h3 class='project-title orange-text'>Racingjs</h3>
					<a
						href='https://master.d3sf5yy1zin6rr.amplifyapp.com/exercices/ex_01.html'
						target='__blank'
						rel='noopener noreferrer'
					>
						<img
							alt='screenshot du projet racingjs'
							width='500'
							className='racingjs'
							src={racingjs}
						></img>
					</a>
					<p class='racingjs-paragraph'>
						L'objectif de ce projet était de crée notre propre fonction
						JavaScript afin de manipuler le DOM.
						<br />
						Il est aussi composé de plusieurs exercices permettant d'apprendre
						les fondamentaux du langage JavaScript.
					</p>

					<h3 class='personal-project-title pink-text'>Mother's day</h3>
					<a
						href='https://yoann-menard.github.io/mother-s_day/'
						target='__blank'
						rel='noopener noreferrer'
					>
						<img
							alt="screenshot projet personnel mother's day"
							width='500'
							className='mothersday'
							src={mothersday}
						></img>
					</a>
					<p>
						Un projet personnel que j'ai réalisé pour la fête des mères ce
						projet m'a aussi permis de revoir les bases du langage JavaScript.
						<br />
						Le site contient plusieurs photos de mes chats avec deux boutons
						permettant l'affichage de la photo suivante ou précédente.
						<br />
						Il y a aussi une musique de fond et chaque clics sur un bouton
						déclenche un son.
					</p>

					<h3 class='personal-project-title green-text'>Ant Colony Organization</h3>
					<a 
						href='https://yoann-menard.github.io/ACO/'
						target='__blank'
						rel='noopener noreferrer'
						>
							<img
							alt="second year project"
							width='500'
							className='secondyearproject'
							src={antcolonyorganization}
							></img>
						</a>

						<p>
						Un projet d'initiation au Machine Learning et au Path Finding
						<br />
						l'objectif de ce projet était de réaliser un programme qui trouve le chemin le plus court
						<br />
						entre une position et une autre, en
						simulant le fonctionnement ‘naturel’ d’une fourmilière.
						<br />Algorithme : (ACO) Ant Colony Organization <br />
						
					</p>

				</div>
			</div>
		</div>
	);
};
export default Projets;
