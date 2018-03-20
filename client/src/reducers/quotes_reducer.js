export default function quotesReducer(state = { loading: false, data: [] }, action) {
  switch(action.type) {
    case 'LOADING_QUOTES':
      return Object.assign({}, state, {loading: true});
    case 'LOADING_UPVOTE':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_QUOTES':
      return {loading: false, data: action.payload};
    case 'UPVOTE_QUOTE':
			return { loading:false, data: state.data.map(quote => quote.id === action.payload.id ? action.payload : quote ) }
    default:
      return state;
  }
}