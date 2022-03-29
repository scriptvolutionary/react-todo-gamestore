import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Form = ({
	breadTitle,
	title,
	linkTo,
	linkTitle,
	handleClick,
	btn,
}) => {
	const [email, setEmail] = useState(() => {
		const saved = localStorage.getItem('email')
		const initialValue = JSON.parse(saved)
		return initialValue || ''
	})
	const [pass, setPass] = useState(() => {
		const saved = localStorage.getItem('pass')
		const initialValue = JSON.parse(saved)
		return initialValue || ''
	})

	useEffect(() => {
		localStorage.setItem('pass', JSON.stringify(pass))
	}, [pass])

	useEffect(() => {
		localStorage.setItem('email', JSON.stringify(email))
	}, [email])

	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to=''>{breadTitle}</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='hero mb-8 py-[13.5%] h-full bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<h1 className='text-4xl font-bold'>{title}</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									placeholder='Введите почту..'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Пароль</span>
								</label>
								<input
									type='password'
									value={pass}
									onChange={e => setPass(e.target.value)}
									placeholder='Введите пароль..'
									className='input input-bordered'
								/>
								<label className='label justify-end'>
									<Link className='label-text-alt link link-hover' to={linkTo}>
										{linkTitle}
									</Link>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button
									className='btn btn-primary'
									onClick={() => handleClick(email, pass)}
								>
									{btn}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
