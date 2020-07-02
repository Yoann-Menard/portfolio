import React from 'react';
import '../css/Menu.css';

const Menu = () => {
  return (
    /* < !--Primary Page Layout
       –––––––––––––––––––––––––––––––––––––––––––––––––– -->
       */
    <div className='Menu'>
      <div id='container'>
        <div class='one-half column'>
          <header>
            <button class='nav-toggle' aria-label='toggle navigation'>
              <span class='hamburger'></span>
            </button>
            <nav class='nav'>
              <ul class='nav__list'>
                <li class='nav__item'>
                  <a href='#home' class='nav__link'>
                    Presentation
                  </a>
                </li>
                <hr />
                <li class='nav__item'>
                  <a href='#about' class='nav__link'>
                    Coordonnées
                  </a>
                </li>
                <hr />
                <li class='nav__item'>
                  <a href='#skills' class='nav__link'>
                    Compétences
                  </a>
                </li>
                <hr />
                <li class='nav__item'>
                  <a href='#projects' class='nav__link'>
                    Projets
                  </a>
                </li>
                <hr />
                <li class='nav__item'>
                  <a href='#hobbies' class='nav__link'>
                    Hobbies
                  </a>
                </li>
                <hr />
                <li class='nav__item'>
                  <a href='#form' class='nav__link'>
                    Formulaire
                  </a>
                </li>
                <hr />
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};
export default Menu;
