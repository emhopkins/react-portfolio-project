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

export function upvoteQuote(quoteParams) {
	console.log(quoteParams)	
  return (dispatch) => {
  	dispatch({type: 'LOADING_UPVOTE'});
    return fetch(`api/quotes/upvote`, { 
    	method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
    	body: JSON.stringify({ quote: quoteParams } )
    	})
      .then(response => response.json() )      
      .then(responseJSON => {
      	// console.log(responseJSON)
      	dispatch({type: 'UPVOTE_QUOTE', payload: responseJSON})
      })
  }
}