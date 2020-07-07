import React from 'react';
import cv from '../assets/cv/CV_Menard_Yoann.pdf';

const Coordonnees = () => {
  return (
    /* <!-- Coordonnees --> */

    <div className='Coordonnees'>
      <section class='about-me' id='about'>
          <h2 class='section__title section__title--about'>Coordonnées</h2>
        <div class='about'>
          <div class='about-profile'>
            <h5 class='name'>Nom: Yoann Menard</h5>
            <hr />
          </div>

          <div class='about-profile'>
            <h5 class='email'>E-mail: yoann.menard@epitech.eu</h5>
            <hr />
          </div>

          <div class='about-profile'>
            <h5 class='phone'>Tél: 07 83 10 11 33</h5>
            <hr />
          </div>

          <div class='about-profile'>
            <h5 class='birth'>Date de naissance: 21 septembre 1999</h5>
            <hr />
          </div>

          <div class='about-profile'>
            <h5 class='address'>
              Adresse: 52 Rue Louis Faussard, 60890 Neufchelles
            </h5>
            <hr />
          </div>

          <div class='about-profile'>
            <h5 class='Nationality'>Nationalité: française</h5>
            <hr />
          </div>

          <div class='about-profile'>
            <p class='professional profile'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class='about-profile-cv'>
            <a
              class='waves-effect waves-light btn-large btn-large pulse pink'
              href={cv}
              target='__blank'
              rel='noopener noreferrer'
              download
            >
              Telecharger mon CV<em class='button-cv'></em>
            </a>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Coordonnees;
