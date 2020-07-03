import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import '../css/style.css';
import '../assets/logo/github.png';
import '../assets/logo/linkedin.png';

const Menu = () => {
  return (
    /* < !--Primary Page Layout
       –––––––––––––––––––––––––––––––––––––––––––––––––– -->
       */
    <div className='Menu'>
      <div class='one-half column'>
        <header>
          <nav class='nav'>
            <div class='nav-wrapper'>
              <ul class='nav__list'>
                <li>
                  <Link className='nav__link' to='/'>
                    Presentation
                  </Link>
                </li>
                <li>
                  <Link className='nav__link' to='/coordonnees'>
                    Coordonnées
                  </Link>
                </li>
                <li>
                  <Link className='nav__link' to='/competences'>
                    Competences
                  </Link>
                </li>
                <li class='nav__item'>
                  <a href='#projects' class='nav__link'>
                    Projets
                  </a>
                </li>
                <li class='nav__item'>
                  <a href='#hobbies' class='nav__link'>
                    Hobbies
                  </a>
                </li>
                <li class='nav__item'>
                  <a href='#form' class='nav__link'>
                    Formulaire
                  </a>
                </li>
              </ul>
              </div>
            </nav>
          </header>
        </div>
      </div>
  );
};
export default Menu;
