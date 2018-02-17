import React from 'react';
import { connect } from 'react-redux';
 
const CharacterShow = ({ character }) =>
  <div>
    <h3>Name: {character.name}</h3>
    	<ul>{character.quotes.map((quote, index) => { return <li key={index}>{quote.text}</li>} )}</ul>
  </div>
 
const mapStateToProps = (state, ownProps) => {
  const character = state.characters.data.find(character => character.id == ownProps.match.params.characterId)
 
  if (character) {
    return { character }
  } else {
    return { character: {} }
  }
}
 
export default connect(mapStateToProps)(CharacterShow);