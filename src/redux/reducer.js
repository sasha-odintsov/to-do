// const ADD_ITEM = 'ADD_ITEM' // variant for actions create
// export const addItem = (item) => ({type: ADD_ITEM, payload: item}) 

const initialState = {
  toDos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // case ADD_ITEM:
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