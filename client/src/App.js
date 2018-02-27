import React, { Component } from 'react';
// import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchQuotes } from './actions/quoteActions'
import { fetchCharacters } from './actions/characterActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quotes from './components/Quotes';
import All from './components/All';
import CharactersPage from './containers/CharactersPage'

class App extends Component {
  componentDidMount(){
    this.props.fetchQuotes();
    this.props.fetchCharacters();
  }

  render() {
    return (
    <Router>
     <div>
       <NavBar />
       <Route exact path="/" component={Home} />
       <Route exact path ="/quotes" component={(props) => <Quotes quotes={this.props.quoteText} />} />
       <Route path='/characters' component={CharactersPage}/>
       <Route exact path ="/all" component={(props) => <All characters={this.props.characters} />} />
     </div>
    </Router>
    );
  }
}
const mapStateToProps = (state) => {

  return {quoteText: state.quotes.data, characters: state.characters.data}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuotes, fetchCharacters
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

