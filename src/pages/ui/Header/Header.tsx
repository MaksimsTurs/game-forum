//SCSS Modules imports
import style from './Header.module.scss'

//Components imports
import SearchForm from './components/SearchForm'
import Navigation from './components/Navigation'
import LoginForm from '../LoginForm/LoginForm'

//Node_module imports
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { FC, Fragment } from 'react'
import { AppDispatch, RootState } from '@/store/store'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'

//Reducers imports
import { logout } from '@/store/userStore/user.slice'

//Custom Hooks imports
import useModal from '@/customHooks/useModal.hook'

const Header: FC = () => {
	const [isVisible, setVisible] = useState<boolean>(false)

	const logRef = useRef<HTMLLIElement>(null)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const clickHandler = async (event: MouseEvent) => {
			const newState = useModal(logRef, event, isVisible)
			setVisible(newState)
		}

		document.addEventListener('click', clickHandler)

		return () => document.removeEventListener('click', clickHandler)
	})

	const { role } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const leavFromAccount = () => {
		dispatch(logout())
	}
	
	return (
		<header>
			<Navigation />
			<div className={style.header_menu}>
				<ul className={style.header_menu_items}>
					{role !== 'guest' ? (
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
