import '@/styles/reset.scss'

//Node_modules imports
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, StrictMode, FC } from 'react'

//Store imports
import store from '@/store/store'

//Lazy Pages imports
const Home = lazy(() => import('@/pages/Home'))
const CategoryThemes = lazy(() => import('@/pages/CategoryThemes'))
const SingleTheme = lazy(() => import('@/pages/SingleTheme'))
const Registration = lazy(() => import('@/pages/Regestration'))
const UserDetail = lazy(() => import('@/pages/UserDetail'))
const CreateTheme = lazy(() => import('@/pages/CreateTheme'))

import Loader from '@/pages/ui/Loader/Loader'

const App: FC = () => {

	return (
		<StrictMode>
			<BrowserRouter>
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
							<Suspense>
								<UserDetail />
							</Suspense>
						}
					/>
					<Route
						path='/:id/create-theme'
						element={
							<Suspense fallback={<Loader />}>
								<CreateTheme />
							</Suspense>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>
	)
}

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<Provider store={store}>
		<App />
	</Provider>
)
