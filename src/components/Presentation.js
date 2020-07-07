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
          <img src={Yoann}  width = "90" alt='Yoann Epitech' class=' circle responsive-img' />
        </div>

        <div class='card-panel transparent' >
        <span class="white bolder-text">
          <strong>Bonjour et bienvenue dans mon portfolio !</strong>
          </span>
          <br />
        </div>
        <div class='card-panel transparent'>
        <h5>
        <span class="white bolder-text">
          <strong>je m'appelle Yoann Menard</strong>
          </span>
        </h5>
        </div>
        <br />
        <div class='card-panel white'>
         <span class="white bolder-text">
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
