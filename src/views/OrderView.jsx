import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { calcTotalPrice, enumerate } from '../scripts/utils'

export const OrderView = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return (
			<div>
				<div className='mb-8'>
					<div className='text-sm breadcrumbs'>
						<ul>
							<li>
								<Link to='/'>Главная страница</Link>
							</li>
							<li>
								<Link to='/order'>Корзина</Link>
							</li>
						</ul>
					</div>
				</div>
				<h1 className='text-4xl font-bold mb-8 py-[30vh]' align='center'>
					Ваша корзина пуста!
				</h1>
			</div>
		)
	}
	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/order'>Корзина</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className='order-page'>
				<div className='order-page__left'>
					{items.map(game => (
						<div className='flex flex-col pb-2 items-center justify-center'>
							<div className='flex flex-row justify-between w-2/3 items-center bg-base-300 p-2 rounded-md'>
								<div>
									<img
										className='w-56 h-32 rounded-md'
										src={game.image}
										alt={game.title}
									/>
								</div>
								<div className='card-title text-2xl'>{game.title}</div>
								<div className='card-title text-xl'>{game.price} руб.</div>
							</div>
						</div>
					))}
				</div>
				<div className='order-page__right'>
					<div className='order-page__total-price'>
						<span>
							<p className='text-4xl font-medium py-24' align='center'>
								{items.length}{' '}
								{enumerate(items.length, ['товар', 'товара', 'товаров'])} на
								сумму {calcTotalPrice(items)} руб.
							</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
