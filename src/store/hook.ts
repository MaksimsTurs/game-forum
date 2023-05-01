//Interfaces
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//Node_modules imports
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import userSlice from './userStore/user.slice'

export const rootReducer = combineReducers({
	auth: userSlice,
})

const store = configureStore({
  reducer: rootReducer
})

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type DispatchFunc = () => AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
