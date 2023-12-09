import { configureStore } from '@reduxjs/toolkit'
import { getProductsSlice } from './slicers/getProducts'
import { catalogSlice } from './slicers/catalogSlice'
export const store = configureStore({
  reducer: {
  [getProductsSlice.reducerPath]:getProductsSlice.reducer,
  catalogFilter: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch