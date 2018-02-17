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

// export function addCharacter(character) {
//   // character.id = 10;
//   return {
//     type: 'ADD_CHARACTER',
//     character
//   };
// }

export function addCharacter(characterParams) {
	console.log(characterParams)	
  return (dispatch) => {
    // dispatch({type: 'ADD_CHARACTER'});
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
      })
  }
}

