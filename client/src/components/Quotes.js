import React, { Component } from 'react';
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
 
  render(){
	  return (
	    <div>
	    	<h1>Quotes Page</h1>
	    	<div><label>Search:</label><input type="text" onChange={this.textSearch} /></div>
	        	{this.state.quotes.map((quote, index) => {
	        		return <div key={index}><QuoteLi key={index} quote={quote} /> - {quote.character.name}</div> })}
	    </div>
	  );
	};
}

export default Quotes;
