export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
  TOGGLE_CHECKED_ITEM: 'TOGGLE_CHECKED_ITEM'
};

export default actionCreators = {
  addItem: item => dispatch => {
    dispatch({
      type: actions.ADD_ITEM,
      payload: item
    })
  },
  removeItem: id => dispatch => {
    dispatch({
      type: actions.REMOVE_ITEM,
      payload: id
    })
  },
  removeCompleted: () => dispatch => {
    dispatch({
      type: actions.REMOVE_COMPLETED
    })
  },
  toggleCheckedItem: index => dispatch => {
    dispatch({
      type: actions.TOGGLE_CHECKED_ITEM,
      payload: index
    })
  }
};
