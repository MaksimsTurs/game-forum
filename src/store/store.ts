//Interfaces imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//Node_modules imports
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import userSlice from './userStore/user.slice'
import commentSlice from './commentStore/comment.slice'
import categorySlice from './categoryStore/category.slice'
import themesSlice from './themeStore/themes.slice'

export const rootReducer = combineReducers({
	userSlice,
  commentSlice,
  categorySlice,
  themesSlice
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
