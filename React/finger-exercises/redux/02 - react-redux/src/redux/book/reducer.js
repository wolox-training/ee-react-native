import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  let indice;
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return Immutable(state).merge(
        {
          books: action.payload,
          originalData: action.payload
        },
        {
          deep: true
        }
      );
    case actions.ADD_TO_CART: // TODO to implement the logic
      return Immutable(state).merge(
        {
          bookSelected: [...state.bookSelected, action.payload]
        },
        {
          deep: true
        }
      );
    case actions.ADD_ITEM: // TODO to implement the logic
      indice = state.bookSelected.findIndex(libro => libro.id === action.payload);
      return Immutable(state).merge(
        {
          bookSelected: state.bookSelected.map((value, index) => {
            if (index === indice) {
              const valueMod = { id: value.id, name: value.name, quantity: value.quantity };
              valueMod.quantity += 1;
              return valueMod;
            }
            return value;
          })
        },
        {
          deep: true
        }
      );
    case actions.REMOVE_ITEM: // TODO to implement the logic
      indice = state.bookSelected.findIndex(libro => libro.id === action.payload);
      return Immutable(state).merge(
        {
          bookSelected: state.bookSelected.filter((value, index) => index !== indice)
        },
        {
          deep: true
        }
      );
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return Immutable(state).merge(
        {
          books: state.originalData.filter(
            data => data.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
          )
        },
        {
          deep: true
        }
      );
    default:
      return state;
  }
}

export default reducer;
