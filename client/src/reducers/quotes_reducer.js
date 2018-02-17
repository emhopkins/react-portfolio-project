export default function quotesReducer(state = { loading: false, text: [] }, action) {
  switch(action.type) {
    case 'LOADING_QUOTES':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_QUOTES':
      return {loading: false, text: action.payload};
    default:
      return state;
  }
}