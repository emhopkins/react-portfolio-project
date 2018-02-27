import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteLi from './QuoteLi'

class All extends Component {



  render(){
    return (
    <div>
    	<h1>All Quotes by Character</h1>
        	{this.props.characters.map((character, index) => {
        		return <div key={index}>{character.name}
        						<ul>
        							{ this.props.quotes.filter(q => q.character.id === character.id).map((quote, index) => { return <QuoteLi key={index} quote={quote} /> })}
        						</ul> 
        				</div> })}
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {quotes: state.quotes.data}
}

export default connect(mapStateToProps)(All)