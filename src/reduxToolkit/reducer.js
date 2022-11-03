import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  toDos: []
}

export const addItem = createAction('ADD_ITEM')

export default createReducer(initialState, {
  [addItem]: function(state, action) {
    state.toDos.push(action.payload)
  }
})