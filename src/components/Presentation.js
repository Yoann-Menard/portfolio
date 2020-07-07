import React from 'react';
import Yoann from '../assets/photo/yoann.menard@epitech.eu.jpg';

const Presentation = () => {
  return (
    /* < !-- Presentation --> */
    <div className='Presentation'>
      <div class='col s12 m8 offset-m2 l6 offset-l3'>
        <div class='row valign-wrapper'></div>
      </div>
      <section class='Presentation' id='intro'>
        <div class='col s2'>
          <img src={Yoann}  alt='Yoann Epitech' class=' circle responsive-img' />
        </div>

        <div class='card-panel transparent' >
        <h1>
        <span class='red-text accent-5'>
          <strong>Bonjour et bienvenue dans mon portfolio !</strong>
          </span>
          <br />
          </h1>
        </div>
        <div class='card-panel transparent'>
        <h5>
        <span class='yellow-text'>
          <strong>je m'appelle Yoann Menard</strong>
          </span>
          <br />
        </h5>
        </div>
        <br />
        <div class='card-panel transparent'>
         <span class='blue-text'>
        <p class='section__subtitle section__subtitle--intro'>
          <strong>Je suis étudiant en développement web Front-end/Backend au Samsung campus situé à 
           <br />
          Paris 12 Rue Fructidor 75017, 
          Saint-Ouen </strong>
        </p>
        </span>
        </div>
        <br />
      </section>
      <br />
    </div>
  );
};

export default Presentation;
