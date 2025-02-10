import React, { Component } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from 'react-router-dom';
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
import './css/style.css';
import './css/transitions.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={500} classNames='page'>
				<div>{children}</div>
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
						<Routes>
							<Route path='/portfolio' element={<Presentation />} />
							<Route path='/about' element={<Coordonnees />} />
							<Route path='/skills' element={<Competences />} />
							<Route path='/projects' element={<Projets />} />
							<Route path='/hobbies' element={<Hobbies />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</Wrapper>
					<Footer />
				</Router>
			</div>
		);
	}
}
