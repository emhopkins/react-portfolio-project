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

// export function fetchCharacters(query, cb) {
//   return fetch(`api/characters?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then(cb);
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }

// function parseJSON(response) {
//   console.log(response)
//   return response.json();
// }

// const Client = { search };
// export default Client;