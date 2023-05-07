//Interfaces imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//Node_modules imports
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import userAuthSlice from './userStore/user.auth.slice'
import userCheckSlice from './userStore/user.check.slice'

export const rootReducer = combineReducers({
	userAuthSlice,
  userCheckSlice
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
