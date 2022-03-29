import React from 'react'
import { Link } from 'react-router-dom'

export const FeedbackView = () => {
	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/feedback'>Обратная связь</Link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className='mb-8 hero py-[8%] bg-base-200'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<h1 className='text-4xl font-bold'>Напишите нам!</h1>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<div className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<input
										type='email'
										placeholder='Введите почту..'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Имя</span>
									</label>
									<input
										type='name'
										placeholder='Введите имя..'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Сообщение</span>
									</label>
									<textarea
										className='h-32 w-72 textarea textarea-bordered scroll-smooth'
										placeholder='Введите сообщение..'
									></textarea>
								</div>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Отправить</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
