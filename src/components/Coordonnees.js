import React from 'react';
import cv from '../assets/cv/CV_Menard_Yoann.pdf';

const Coordonnees = () => {
  return (
    /* <!-- Coordonnees --> */
    <div className='Coordonnees'>
      <section class='about-me' id='about'>
          <h2 class='section__title section__title--about white-text'><em>Coordonnées</em></h2>
        <div class='about'>
          <div class='about-profile'>
        <div class='card-panel transparent'>
         <h5 class='name'>
          <span class="white-text">
           Nom: Yoann Menard
            </span>
            </h5>
          </div>
          </div>

          <div class='about-profile'>
          <div class='card-panel transparent'>
            <h5 class='email'>
            <span class="white-text">
            E-mail: yoann.menard@epitech.eu
            </span>
            </h5>
          </div>
          </div>

          <div class='about-profile'>
          <div class='card-panel transparent'>
            <h5 class='phone'>
            <span class='white-text'>
            Tél: 07 83 10 11 33
            </span>
            </h5>
          </div>
          </div>

          <div class='about-profile'>
          <div class='card-panel transparent'>
            <h5 class='birth'>
             <span class='white-text'>
            Date de naissance: 21 septembre 1999
            </span>
            </h5>
          </div>
          </div>

          <div class='about-profile'>
          <div class='card-panel transparent'>
            <h5 class='address'>
            <span class='white-text'>
              Adresse: 52 Rue Louis Faussard, 60890 Neufchelles
              </span>
              </h5>
              </div>
              </div>

          <div class='about-profile'>
          <div class='card-panel transparent'>
            <h5 class='Nationality'>
            <span class='white-text'>
            Nationalité: française
            </span>
            </h5>
            </div>
          </div>

          <div class='about-profile-cv'>
            <a
              class='waves-effect waves-light btn-large btn-large pulse blue'
              href={cv}
              target='__blank'
              rel='noopener noreferrer'
              download
            >
              Telecharger mon CV<em class='button-cv'></em>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coordonnees;
