export default function quotesReducer(state = { loading: false, data: [] }, action) {
  switch(action.type) {
    case 'LOADING_QUOTES':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_QUOTES':
      return {loading: false, data: action.payload};
    default:
      return state;
  }
}