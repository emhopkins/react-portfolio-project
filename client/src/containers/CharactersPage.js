import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CharactersList from '../components/CharactersList';
import CharacterShow from './CharacterShow';
 
const CharactersPage = ({ match, characters }) => 
  <div>
    <h1></h1>
    <CharactersList characters={characters} />
    <Route path={`${match.url}/:characterId`} component={CharacterShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Character from the list.</h3>
    )}/>
  </div>;
 
const mapStateToProps = (state) => {
  return {
    characters: state.characters.data
  };
}
 
export default connect(mapStateToProps)(CharactersPage);