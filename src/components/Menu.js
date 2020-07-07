import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

const Menu = () => {
  return (
    /* < !--Primary Page Layout
       –––––––––––––––––––––––––––––––––––––––––––––––––– -->
       */
    <div className='Menu'>
      <div class='one-half column'>
        <header>
          <nav class='nav red'>
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
                    Compétences
                  </Link>
                </li>
                <li>
                  <Link className='nav__link' to='/projets'>
                    Projets
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to='/hobbies'>
                    Hobbies
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to='/formulaire'>
                    Formulaire
                  </Link>
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
