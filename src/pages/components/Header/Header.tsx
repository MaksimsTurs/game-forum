//SCSS Modules imports
import style from './Header.module.scss'

//Components imports
import SearchForm from './components/SearchForm'
import Navigation from './components/Navigation'

//Node_module imports
import { useState, useEffect, useRef, lazy } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { FC, Fragment } from 'react'
import { AppDispatch, RootState } from '../../../store/hook'

//Reducers imports
import { logout } from '../../../store/userStore/user.auth.slice'

const LoginForm = lazy(() => import('../LoginForm/LoginForm'))

const Header: FC = () => {
	const [isVisible, setVisible] = useState<boolean>(false)
	const logRef = useRef<HTMLLIElement>(null)

	useEffect(() => {
		const clickHandler = async (event: any) => {
			if (logRef.current !== null) {
				if (logRef.current && !logRef.current.contains(event.target)) {
					setVisible(false)
				} else if (isVisible && !logRef.current.contains(event.target)) {
					setVisible(false)
				} else {
					setVisible(true)
				}
			}
		}

		document.addEventListener('click', clickHandler)

		return () => document.removeEventListener('click', clickHandler)
	})

	const role = useSelector<RootState>(state => state.userAuthSlice.role)

	const dispatch = useDispatch<AppDispatch>()

	const leavFromAccount = () => {
		dispatch(logout(''))
		window.open('/', '_self')
	}

	return (
		<header>
			<Navigation />
			<div className={style.header_menu}>
				<ul className={style.header_menu_items}>
					{role === 'user' || role === 'admin' ? (
						<li className={style.header_menu_item} onClick={leavFromAccount}>
							Leav from Account
						</li>
					) : (
						<Fragment>
							<li className={style.header_menu_item} ref={logRef}>
								<p>Log in</p>
								<LoginForm state={isVisible} />
							</li>
							<li>
								<Link className={style.header_menu_item} to='/registration'>
									Sign up
								</Link>
							</li>
						</Fragment>
					)}
					<li className={style.header_menu_item}>Activity</li>
				</ul>
				<SearchForm />
			</div>
		</header>
	)
}

export default Header
