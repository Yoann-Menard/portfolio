import React from 'react';
import github from '../assets/logo/github.png';
import gitlab from '../assets/logo/gitlab.png';
import linkedin from '../assets/logo/linkedin.png';

const Footer = () => {
	return (
		<div className='Footer'>
			<div class='footer-container'>
				<footer class='page-footer red darken-3'>
					<div class='container'>
						<div class='row'>
							<div class='col l6 s12'>
								<h5 class='red-text text-accent-5'>Credits</h5>
								<h6 class='yellow-text'>Fonts</h6>
								<p class='blue-text text-bolder'>
									earwig-factory,
									<br />
									p5hatty
								</p>
								<h6 class='black-text'>Music</h6>
								<p class='grey-text'>Layer Cake - Persona 5</p>
							</div>
							<div class='col l4 offset-l2 s12'>
								<h5 class='white-text'>Social</h5>
								<ul>
									<br />
									<li>
										<a
											href='https://github.com/yoann-menard'
											target='__blank'
											rel='noopener noreferrer'
										>
											@GitHub

											<img
												className='github-profile'
												alt='github logo'
												src={github}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://gitlab.com/Yoann-Menard'
											target='__blank'
											rel='noopener noreferrer'
										>
											@GitLab
											<img
												className='gitlab-profile'
												alt='gitlab logo'
												src={gitlab}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/yoann-menard/'
											target='__blank'
											rel='noopener noreferrer'
										>
											@Linkedin
											<img
												className='linkedin-profile'
												alt='linkedin logo'
												src={linkedin}
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class='footer-copyright'>
						<div class='copyright'>
							© 2020 Copyright Yoann Menard
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};
export default Footer;
