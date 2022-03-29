import React, { useState, useCallback, useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaTrash, FaRubleSign } from 'react-icons/fa'

import { deleteItemFromCart } from '../../store/cart/reducer'
import { calcTotalPrice } from '../../scripts/utils'
import { useAuth } from '../../hooks/useAuth'

export const CartBlock = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { setIsCartMenuVisible } = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)

	const handleGoToOrder = useCallback(() => {
		navigate('/order')
	}, [navigate])

	const { isAuth } = useAuth()

	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex='0' className='btn btn-ghost'>
				<div className='indicator'>
					<FaShoppingCart size={20} />
					{items.length > 0 ? (
						<span className='badge badge-xs indicator-item bg-secondary rounded-md h-full text-base-content'>
							{items.length}
						</span>
					) : null}
				</div>
			</label>
			<div
				tabIndex='0'
				className='mt-3 card card-compact dropdown-content h-min w-[300px] bg-base-200 rounded-md'
			>
				<div className='card-body'>
					<span className='font-semibold flex gap-2 flex-col justify-center'>
						{items.length > 0
							? items.map(game => (
									<div className='cart-item flex items-center justify-between bg-base-300 p-2 rounded-md opacity-[85%] hover:opacity-100 transition-all delay-50'>
										<span className='text-lg font-bold'>{game.title}</span>
										<div className='flex items-center gap-0.5'>
											<span className='font-regular flex items-center'>
												{game.price} <FaRubleSign size={12} />
											</span>
											<span>
												<button className='btn btn-ghost btn-xs rounded-md'>
													<FaTrash
														onClick={() =>
															dispatch(deleteItemFromCart(game.id))
														}
													/>
												</button>
											</span>
										</div>
									</div>
							  ))
							: isAuth
							? 'Корзина пуста'
							: 'Авторизуйтесь чтобы видеть покупки.'}
					</span>
					{totalPrice > 0 ? (
						<span className='text-info font-semibold uppercase flex items-center justify-end'>
							Итого: {totalPrice} <FaRubleSign size={12} />
						</span>
					) : null}
					<div className='card-actions'>
						{items.length > 0 ? (
							<button
								className='btn btn-primary btn-block'
								onClick={handleGoToOrder}
							>
								Оформить
							</button>
						) : (
							<button
								className='btn btn-disabled btn-block'
								onClick={handleGoToOrder}
							>
								Оформить
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
