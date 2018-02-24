export default function charactersReducer(state = { loading: false, data: [] }, action) {
  switch(action.type) {
    case 'LOADING_CHARACTERS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_CHARACTERS':
      return {loading: false, data: action.payload};
    case 'ADD_CHARACTER':
    return {loading:false, data: state.data.concat(action.payload) }
      // return {loading: false, data: [ ...state.data, action.payload ]}
    default:
      return state;
  }
}