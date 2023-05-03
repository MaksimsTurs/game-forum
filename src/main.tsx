import './styles/reset.scss'

//Node_modules imports
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

//Store imports
import store from './store/hook'

//Components imports
const Home = lazy(() => import('./pages/Home.tsx'))
const CategoryThemes = lazy(() => import('./pages/CategoryThemes.tsx'))
const SingleTheme = lazy(() => import('./pages/SingleTheme.tsx'))
const Registration = lazy(() => import('./pages/Regestration.tsx'))
const Loader = lazy(() => import('./pages/components/Loader/Loader.tsx'))
const UserDetail = lazy(() => import('./pages/UserDetail.tsx'))

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<HashRouter>
		<Provider store={store}>
			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<Loader/>}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path='/category/:id/:title'
					element={
						<Suspense fallback={<Loader/>}>
							<CategoryThemes />
						</Suspense>
					}
				/>
				<Route
					path='/theme/:id'
					element={
						<Suspense fallback={<Loader/>}>
							<SingleTheme />
						</Suspense>
					}
				/>
				<Route
					path='/registration'
					element={
						<Suspense fallback={<Loader />}>
							<Registration />
						</Suspense>
					}
				/>
				<Route
					path='/user/:id'
					element={
						<Suspense fallback={<Loader/>}>
							<UserDetail />
						</Suspense>
					}
				/>
			</Routes>
		</Provider>
	</HashRouter>
)
