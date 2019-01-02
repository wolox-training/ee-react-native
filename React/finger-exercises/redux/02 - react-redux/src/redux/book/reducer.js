import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      [...state.books] = [...action.payload];
      [...state.originalData] = [...action.payload];
      return { ...state };
    case actions.ADD_TO_CART: // TODO to implement the logic
      // [...state.bookSelected] = [...state.bookSelected, action.payload];
      return { ...state };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      [...state.books] = [];
      /*
      for (let i = 0; i < state.originalData.length; i += 1) {
        [...state.books] =
          state.originalData[i].name.indexOf(action.payload) !== -1
            ? [...state.books, state.originalData[i]]
            : [...state.books];
      }
      */
      [...state.books] = [...state.originalData.filter(data => data.name.indexOf(action.payload) !== -1)];
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
