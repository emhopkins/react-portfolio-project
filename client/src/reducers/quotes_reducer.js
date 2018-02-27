export default function quotesReducer(state = { loading: false, data: [] }, action) {
  switch(action.type) {
    case 'LOADING_QUOTES':
      return Object.assign({}, state, {loading: true});
    case 'LOADING_UPVOTE':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_QUOTES':
      return {loading: false, data: action.payload};
    case 'UPVOTE_QUOTE':
    	// console.log(state.data.map(quote => { if (quote.id === action.payload.id) { return quote = action.payload } else {return quote};}))
    	// desbugger;
    	// return {loading:false, data: state.data.concat(action.payload) }
			// return {loading: false, data: [ ...state.data, action. payload ] }
			return {loading:false, data: state.data.map(quote => 
				{ if (quote.id === action.payload.id) 
					{ return quote = action.payload 
				} else {return quote} } )
      }
    default:
      return state;
  }
}