import { configureStore } from '@reduxjs/toolkit'
import loginDetailsReducer from '../redux/slice'

export const store = configureStore({
  reducer: loginDetailsReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch