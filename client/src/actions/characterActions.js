import fetch from 'isomorphic-fetch';

export function fetchCharacters() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CHARACTERS'});
    return fetch(`api/characters`)
      .then(response => response.json() )      
      .then(responseJSON => {
      	console.log(responseJSON)
        dispatch({type: 'FETCH_CHARACTERS', payload: responseJSON})
      })
  }
}

export function addCharacter(characterParams) {
	console.log(characterParams)	
  return (dispatch) => {
    return fetch(`api/characters`, { 
    	method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
    	body: JSON.stringify({ character: characterParams } )
    	})
      .then(response => response.json() )      
      .then(responseJSON => {
      	console.log(responseJSON)
      	dispatch({type: 'ADD_CHARACTER', payload: responseJSON})
      })
  }
}