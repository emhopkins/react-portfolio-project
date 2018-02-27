import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/characterActions';
 
class CharactersNew extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addCharacter and history from the components props
    const { addCharacter, history } = this.props;
    // Create the character with the Redux action
    history.push('/')
    addCharacter({ name: `${document.getElementById('newCharacterName').value}` });

    // redirect to /characters route
    history.push('/characters')
  }
 
  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input 
          id="newCharacterName"
          type="text"  
          placeholder="Add a Character" />
        <input type="submit" value="Add Character" />
      </form>
    );
  }
}
 
export default connect(null, { addCharacter })(CharactersNew)