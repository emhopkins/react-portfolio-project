import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Quotes from '../components/Quotes';
// import Characters from '../components/Characters';

const App = (props) => {
  return (
    <Router>
	    <div>
	      <NavBar />
	      <Route exact path="/" component={Home} />
	      <Route exact path="/quotes" component={Quotes} />
	    </div>
    </Router>
  );
};

export default App
