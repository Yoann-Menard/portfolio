import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* <------------ Importation Components --------------> */
import Competences from './components/Competences';
import Contact from './components/Contact';
import Coordonnees from './components/Coordonnees';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Menu from './components/Menu';
import Music from './components/Music';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
/* <--------------- Importation CSS -----------------> */
import './css/App.css';
import './css/index.css';
import './css/normalize.css';
import './css/style.css';
import './css/transitions.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={500} classNames='page'>
				<Switch location={location}>{children}</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};
export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Music />
				<Router>
					<Menu />
					<Wrapper>
						<Switch>
							<Route exact path='/portfolio' component={Presentation} />
							<Route exact path='/about' component={Coordonnees} />
							<Route exact path='/skills' component={Competences} />
							<Route exact path='/projects' component={Projets} />
							<Route exact path='/hobbies' component={Hobbies} />
							<Route exact path='/contact' component={Contact} />
						</Switch>
					</Wrapper>
					<Footer />
				</Router>
			</div>
		);
	}
}
