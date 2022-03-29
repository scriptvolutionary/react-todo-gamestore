import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slices/userSlice'

export const ProfileView = () => {
	const dispatch = useDispatch()
	const { isAuth, email } = useAuth()

	return isAuth ? (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/profile'>Профиль</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mb-8 py-[27%] flex items-center justify-center flex-col gap-4'>
				<h1 className='font-bold text-2xl'>
					Добро пожаловать на вашу страницу, {email}
				</h1>
				<button
					className='btn btn-ghost'
					onClick={() => dispatch(removeUser())}
				>
					Выйти из аккаунта
				</button>
			</div>
		</section>
	) : (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/profile'>Профиль</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mb-8 py-[27%] flex items-center justify-center flex-col gap-4'>
				<h1 className='font-bold text-2xl'>
					Ой, похоже что вы не вошли в свой аккаунт..
				</h1>
				<Link className='btn btn-ghost' to='/auth'>
					Войти
				</Link>
			</div>
		</section>
	)
}
