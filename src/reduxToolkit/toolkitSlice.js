import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    toDos: []
  },
  reducers: {
    addItem(state, action) {
      state.toDos.push(action.payload)
    }
  }
})

export default toolkitSlice.reducer
export const {addItem} = toolkitSlice.actions