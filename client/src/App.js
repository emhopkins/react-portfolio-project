import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import QuoteList from './QuoteList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchQuotes } from './actions/quoteActions'
export class App extends Component {
  componentDidMount(){
    this.props.fetchQuotes();
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">QuoteBook</a>

            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <QuoteList quotePics={this.props.quoteText}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {quoteText: state.quotes.text}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuotes
  }, dispatch)
}
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);