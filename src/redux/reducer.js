const initialState = {
  toDos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case('ADD_ITEM'):
      return {
        ...state,
        toDos: [...state.toDos, action.payload]
      }

    default:
      return state;
  }
}

export default reducer;