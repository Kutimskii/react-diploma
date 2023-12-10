import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface ICartState {
  title: string,
  size: string,
  quantity: number,
  price: number,
  fullPrice: number,
  sku: 0
}
const initialState: Array<ICartState> = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartState>) => {
    const currentItem = state.find(item => {
      return action.payload.sku === item.sku && action.payload.size === item.size;
    })
    if (currentItem) {
      state.map(item => {
        if (action.payload.sku === item.sku ){
          item.quantity += 1;
          return item;
        }
        return item
      })
    }
     state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<ICartState>) => {
      state.filter(item => action.payload.sku !== item.sku)
    },
  },
})
export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer