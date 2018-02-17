import fetch from 'isomorphic-fetch';

export function fetchQuotes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_QUOTES'});
    return fetch(`api/quotes`)
      .then(response => response.json() )      
      .then(responseJSON => {
      	console.log(responseJSON)
        dispatch({type: 'FETCH_QUOTES', payload: responseJSON})
      })
  }
}