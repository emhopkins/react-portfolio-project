import React from 'react';
import { Link } from 'react-router-dom';
 
const CharactersList = ({ characters }) => {
  const renderCharacters = characters.map(character => 
    <Link to={`/characters/${character.id}`}>{character.name}</Link>
  );
 
  return (
    <div>
      {renderCharacters}
    </div>
  );
};
 
export default CharactersList;