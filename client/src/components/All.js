import React, { Component } from 'react';
import QuoteLi from './QuoteLi'

class All extends Component {

  render(){
    return (
    <div>
    	<h1>All Quotes by Character</h1>
        	{this.props.characters.map((character, index) => {
        		return <div key={index}>{character.name}
        						<ul>
        							{ character.quotes.map((quote, index) => { return <QuoteLi key={index} quote={quote} /> })}
        						</ul> 
        				</div> })}
    </div>
    );
  }
}

export default All
