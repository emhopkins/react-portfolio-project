import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteLi from './QuoteLi';

class Quotes extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      quotes: props.quotes
    };
  }

  textSearch = event => {
    let query = event.target.value
    this.setState({
      quotes: this.props.quotes.filter(q => q.text.includes(query) )
    });
  }
  sortQuotesByVotes = event => {
    this.setState({
      quotes: this.props.quotes.sort(function(a, b){return b.votes-a.votes})
    }); 	
  }
 
  render(){
	  return (
	    <div>
	    	<h1>Quotes Page</h1>
	    	<button onClick={this.sortQuotesByVotes}>Sort Quotes By Votes</button>
	    	<div><label>Search:</label><input type="text" onChange={this.textSearch} /></div>
	        	{this.state.quotes.map((quote, index) => {
	        		return <div key={index}><QuoteLi key={index} quote={quote} /> - {quote.character.name}</div> })}
	    </div>
	  );
	};
}

const mapStateToProps = (state, ownProps) => {
  return {quotes: state.quotes.data}
}

export default connect(mapStateToProps)(Quotes)
