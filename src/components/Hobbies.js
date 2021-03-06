import React from 'react';
import DKC2 from '../assets/hobbies/donkey-kong-country-2-diddys-kong-quest.jpg';
import firstpc from '../assets/hobbies/my_first_computer.jpg';
import pc from '../assets/hobbies/my_computer.jpg';

const Hobbies = () => {
	return (
		<div className='Hobbies'>
			<ul>
				<h2>
					<em class='hobbies-earwig'>Hobbies</em>
				</h2>
				<div className='card-hobbies overflow-hidden'>
					<div className='card-content center-when-small'>
						<h3>
							<li>
								<em class='hobbies-video-games'>Jeux vidéo</em>
								<p class='paragraph-dkc2 light white-text'>
									<strong>
										J'ai joué à mon premier jeu vidéo à l'âge de 4 ans.
										<br />
										"Donkey Kong Country 2: Diddy's Kong Quest" il a été
										développé par{' '}
										<a
											href='https://www.rare.co.uk/'
											target='__blank'
											rel='noopener noreferrer'
											class='yellow-text'
										>
											<u>Rare</u>
										</a>{' '}
										et édité par{' '}
										<a
											href='https://www.nintendo.com/'
											target='__blank'
											rel='noopener noreferrer'
											class='light red-text'
										>
											<u>Nintendo</u>
										</a>{' '}
										en 1995.
										<br />
										Le jeu vidéo m'a depuis accompagné toute ma vie et continue
										encore à ce jour.
									</strong>
								</p>
								<a
									class='DKC2-link'
									href={DKC2}
									target='__blank'
									rel='noopener noreferrer'
								>
									<img alt='DKC2 box art' width='200' src={DKC2}></img>
								</a>
							</li>
						</h3>
						<h3>
							<li>
								<em class='hobbies-computer-science'>Informatique</em>
								<div class='computer-container'>
									<p class='paragraph-computer-science light white-text'>
										J'ai obtenu mon premier ordinateur à l'âge de 6 ans,
										<br />
										cela m'a permis de me familiariser rapidement avec le
										système d'exploitation Windows.
										<br />
										Ainsi qu'à la grande majorité des logiciels actuels.
										<br />
										J'ai éventuellement décidé d'améliorer les performances de
										mon ordinateur.
										<br />
										Ce n'est finalement qu'à partir de mes 16 ans que je monte
										pour la première fois mon nouveau PC
										<br />
										Composants :
										<br />
										CPU Intel Core i5 7500 @3.40GHz, 8.0GB RAM, GPU GTX 1060 3GB
									</p>

									<a
										class='first-computer-link'
										href={firstpc}
										target='__blank'
										rel='noopener noreferrer'
									>
										{' '}
										<img
											class='first-computer'
											alt="yoann's first computer"
											width='200'
											src={firstpc}
										></img>
									</a>

									<a
										class='my-computer-link'
										href={pc}
										target='__blank'
										rel='noopener noreferrer'
									>
										<img
											class='my-computer'
											alt="yoann's computer"
											width='200'
											src={pc}
										></img>
									</a>
									<div className='Languages-section'>
										<h4 className='Languages'>
											<em>Langues</em>
										</h4>
										<h5>
											<b class='language-french red-text'>Français(C2) - langue maternelle</b>
										</h5>

										<h5>
											<b class='language-english yellow-text'>Anglais(C1)</b>
										</h5>
										
										<h5>
											<b class='language-spanish blue-text'>Espagnol(A1)</b>
										</h5>
									</div>
								</div>
							</li>
						</h3>
					</div>
				</div>
			</ul>
		</div>
	);
};
export default Hobbies;
