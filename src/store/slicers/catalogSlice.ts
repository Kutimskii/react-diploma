import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategoriesState {
  value: number,
  searchText: string,
}

const initialState: ICategoriesState = {
  value: 0,
  searchText: '',
}

export const catalogSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    saveSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
  },
})

export const { changeCategory, saveSearch } = catalogSlice.actions

export default catalogSlice.reducer