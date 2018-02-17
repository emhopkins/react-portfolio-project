import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/characterActions';
 
class CharactersNew extends Component {
 

  constructor() {
    super();
 
    this.state = {
      name: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addCharacter and history from the components props
    const { addCharacter, history } = this.props;
    // Create the character with the Redux action
    history.push('/')
    addCharacter(this.state);

    // redirect to /characters route
    history.push('/characterswithquotes')
  }
 
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }
 
  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input 
          type="text" 
          onChange={this.handleOnChange} 
          placeholder="Add a Character" />
        <input type="submit" value="Add Character" />
      </form>
    );
  }
}
 
export default connect(null, { addCharacter })(CharactersNew)