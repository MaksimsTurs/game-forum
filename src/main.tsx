import '@/styles/reset.scss'

//Node_modules imports
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, StrictMode } from 'react'

//Store imports
import store from '@/store/store'

//Components imports
const Home = lazy(() => import('@/pages/Home.tsx'))
const CategoryThemes = lazy(() => import('@/pages/CategoryThemes.tsx'))
const SingleTheme = lazy(() => import('@/pages/SingleTheme.tsx'))
const Registration = lazy(() => import('@/pages/Regestration.tsx'))
const UserDetail = lazy(() => import('@/pages/UserDetail.tsx'))

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
	<HashRouter>
		<Provider store={store}>
			<Routes>
				<Route
					path='/'
					element={
						<Suspense>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path='/category/:id/:title'
					element={
						<Suspense>
							<CategoryThemes />
						</Suspense>
					}
				/>
				<Route
					path='/theme/:id'
					element={
						<Suspense>
							<SingleTheme />
						</Suspense>
					}
				/>
				<Route
					path='/registration'
					element={
						<Suspense>
							<Registration />
						</Suspense>
					}
				/>
				<Route
					path='/user/:id'
					element={
						<Suspense>
							<UserDetail />
						</Suspense>
					}
				/>
			</Routes>
		</Provider>
	</HashRouter>
	</StrictMode>
)
