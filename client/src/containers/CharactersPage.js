import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CharactersList from '../components/CharactersList';
import CharacterShow from './CharacterShow';
import CharactersNew from './CharactersNew'
 
const CharactersPage = ({ match, characters }) => 
  <div>
    <h1></h1>
    <CharactersList characters={characters} />
    <Switch>
    <Route path={`${match.url}/new`} component={CharactersNew} />
    <Route path={`${match.url}/:characterId`} component={CharacterShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Character from the list.</h3>
    )}/>
    </Switch>
  </div>;
 
const mapStateToProps = (state) => {
  return {
    characters: state.characters.data
  };
}
 
export default connect(mapStateToProps)(CharactersPage);