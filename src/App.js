import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

/* <------------ Importation Components --------------> */
import Menu from './components/Menu';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Coordonnees from './components/Coordonnees';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Hobbies from './components/Hobbies';
import Formulaire from './components/Formulaire';
import Music from './components/Music';
/* <--------------- Importation CSS -----------------> */
import './css/App.css';
import './css/index.css';
import './css/style.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Music />
        <Router>
          <Menu />
          <Switch>
            <Route exact path='/' component={Presentation} />
            <Route exact path='/coordonnees' component={Coordonnees} />
            <Route exact path='/competences' component={Competences} />
            <Route exact path='/projets' component={Projets} />
            <Route exact path='/hobbies' component={Hobbies} />
            <Route exact path='/formulaire' component={Formulaire} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
