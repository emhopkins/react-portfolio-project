export default function charactersReducer(state = { loading: false, data: [] }, action) {
  switch(action.type) {
    case 'LOADING_CHARACTERS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_CHARACTERS':
      return {loading: false, data: action.payload};
    case 'ADD_CHARACTER':
      return state;
    default:
      return state;
  }
}