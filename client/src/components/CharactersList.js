import React from 'react';
import { Link } from 'react-router-dom';
 
const CharactersList = ({ characters }) => {
  const renderCharacters = characters.map((character, index) => {
  	return (
  	<div key={index}>	
    	<Link to={`/characters/${character.id}`}>{character.name}</Link> 
    </div>
	)}
  );
 
  return (
    <div>
      {renderCharacters}
    </div>
  );
};
 
export default CharactersList;