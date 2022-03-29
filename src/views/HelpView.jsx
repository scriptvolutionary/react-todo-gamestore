import React from 'react'
import { Link } from 'react-router-dom'

export const HelpView = () => {
	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/help'>Помощь</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='py-[12%]'>
				<div className='flex flex-col gap-2 mb-8'>
					<h2>Выберите категорию, с которой у вас появилась проблема</h2>
					<div className='flex items-center justify-between gap-2 xs:flex-wrap sm:flex-wrap md:flex-wrap'>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Товары</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Магазин</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>
								Сотрудничество
							</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-between gap-2 xs:flex-wrap sm:flex-wrap md:flex-wrap'>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>
								Личный кабинет
							</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Корзина</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Заказ</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-between gap-2 xs:flex-wrap sm:flex-wrap md:flex-wrap'>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>
								Настройки
							</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Оплата</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
						<div
							tabIndex='0'
							className='collapse bg-base-200 rounded-box w-full'
						>
							<input type='checkbox' />
							<div className='collapse-title text-xl font-medium'>Другое</div>
							<div className='collapse-content'>
								<p>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2 mb-8'>
					<h2>Возможно вам так же поможет это</h2>
					<div tabIndex='0' className='collapse bg-base-200 rounded-box w-full'>
						<input type='checkbox' />
						<div className='collapse-title text-xl font-medium'>
							Часто задаваемые вопросы в Марте
						</div>
						<div className='collapse-content flex gap-2 flex-col'>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
						</div>
					</div>
					<div tabIndex='0' className='collapse bg-base-200 rounded-box w-full'>
						<input type='checkbox' />
						<div className='collapse-title text-xl font-medium'>
							Часто задаваемые вопросы в Феврале
						</div>
						<div className='collapse-content flex gap-2 flex-col'>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
							<div>
								<p className='font-medium'>
									tabIndex="0" attribute is necessary to make the div focusable
								</p>
								<p>
									- tabIndex="0" attribute is necessary to make the div
									focusable
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-8'>
					<h2>
						Не нашли свой вопрос? Напишите нам -{' '}
						<Link className='link link-hover' to='/feedback'>
							Написать
						</Link>
					</h2>
				</div>
			</div>
		</section>
	)
}
