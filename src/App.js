import React, { Component } from 'react';
/* <------------ Importation Components --------------> */
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import Coordonnees from './components/Coordonnees';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Hobbies from './components/Hobbies';
import Formulaire from './components/Formulaire';
/* <--------------- Importation CSS -----------------> */
import './css/App.css';
import './css/index.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />
        <Presentation />
        <Coordonnees />
        <Competences />
        <Projets />
        <Hobbies />
        <Formulaire />
      </div>
    );
  }
}
