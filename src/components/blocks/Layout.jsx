import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { FaBars, FaUser } from 'react-icons/fa'

import { CartBlock } from './CartBlock'
import { removeUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'

export const Layout = () => {
	const dispatch = useDispatch()

	const { isAuth, email, role } = useAuth()

	return (
		<>
			<header className='mb-8'>
				<div className='navbar bg-base-300 rounded-md my-2'>
					<div className='navbar-start'>
						<div className='dropdown'>
							<label
								tabIndex='0'
								className='btn btn-ghost xl:hidden xll:hidden 2xl:hidden'
							>
								<FaBars size={20} />
							</label>
							<ul
								tabIndex='0'
								className='menu menu-compact dropdown-content mt-3 p-2 bg-base-200 rounded-md w-52'
							>
								<li>
									<Link to='/catalog'>Каталог</Link>
								</li>
								<li>
									<Link to='/help'>Помощь</Link>
								</li>
								<li>
									<Link to='/feedback'>Обратная связь</Link>
								</li>
							</ul>
						</div>
						<Link className='btn btn-ghost uppercase text-2xl' to='/'>
							Better Games
						</Link>
					</div>
					<div className='navbar-center hidden xl:flex xll:flex 2xl:flex'>
						<ul className='menu menu-horizontal gap-2'>
							<li>
								<Link to='/catalog'>Каталог</Link>
							</li>
							<li>
								<Link to='/help'>Помощь</Link>
							</li>
							<li>
								<Link to='/feedback'>Обратная связь</Link>
							</li>
						</ul>
					</div>
					<div className='navbar-end'>
						{/* Корзина */}
						{isAuth & (email === 'admin@example.com') || role === 0 ? null : (
							<CartBlock />
						)}

						{/* Профиль */}
						{isAuth ? (
							<div className='dropdown dropdown-end'>
								<label tabIndex='0' className='btn btn-ghost'>
									<FaUser size={20} />
								</label>
								<ul
									tabIndex='0'
									className='menu menu-compact dropdown-content mt-3 p-2 bg-base-200 rounded-box w-52'
								>
									<li>
										{isAuth & (email === 'admin@example.com') || role === 0 ? (
											<Link to='/admin'>Админ панель</Link>
										) : (
											<Link to='/profile'>Профиль</Link>
										)}
									</li>
									<li>
										<button onClick={() => dispatch(removeUser())}>
											Выйти
										</button>
									</li>
								</ul>
							</div>
						) : (
							<Link tabIndex='0' className='btn btn-ghost' to='/auth'>
								<FaUser size={20} />
							</Link>
						)}
					</div>
				</div>
			</header>

			<Outlet />

			<footer>
				<div className='my-2'>
					<div className='footer p-10 bg-base-200 text-base-content rounded-t-md'>
						<div>
							<span className='footer-title'>Навигация</span>
							<Link className='link link-hover' to='/catalog'>
								Каталог
							</Link>
							<Link className='link link-hover' to='/help'>
								Помощь
							</Link>
							<Link className='link link-hover' to='/feedback'>
								Обратная связь
							</Link>
						</div>
						<div>
							<span className='footer-title'>Покупателю</span>
							<Link className='link link-hover' to='/help'>
								Часто задаваемые вопросы
							</Link>
							<Link className='link link-hover' to='/order'>
								Корзина
							</Link>
							<Link className='link link-hover' to='/profile'>
								Личный кабинет
							</Link>
						</div>
						<div>
							<span className='footer-title'>Правовая информация</span>
							<Link className='link link-hover' to='/agreement'>
								Пользовательское соглашение
							</Link>
						</div>
					</div>
					<div className='footer footer-center p-4 bg-base-300 text-base-content rounded-b-md'>
						<div>
							<p>© BETTER GAMES 2022 - Все права защищены</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
