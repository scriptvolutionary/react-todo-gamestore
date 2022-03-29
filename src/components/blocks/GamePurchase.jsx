import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../common/Button'
import { setItemInCart, deleteItemFromCart } from '../../store/cart/reducer'
import { useAuth } from '../../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'

export const GamePurchase = ({ game }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)
	const isItemInCart = items.some(item => item.id === game.id)

	const { isAuth, email, role } = useAuth()

	const handlePurchaseTrue = e => {
		e.stopPropagation()
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id))
			toast('Товар успешно удалён из корзины!', {
				duration: 2000,
				position: 'bottom-left',
				className:
					'bg-base-300 rounded-md  shadow-none text-white opacity-75 w-full text-justify text-sm',
				icon: '👏',
			})
		} else {
			dispatch(setItemInCart(game))
			toast('Товар успешно добавлен в корзину!', {
				duration: 2000,
				position: 'bottom-left',
				className:
					'bg-base-300 rounded-md  shadow-none text-white opacity-75 w-full text-justify text-sm',
				icon: '👏',
			})
		}
	}

	return (
		<span>
			{/* Админ */}
			{isAuth & (email === 'admin@example.com') || role === 0 ? (
				<Button type={'disabled'}>
					{isItemInCart ? 'Отменить' : 'В Корзину'}
				</Button>
			) : (
				<Button
					type={isAuth ? (isItemInCart ? 'secondary' : 'primary') : 'disabled'}
					onClick={isAuth ? handlePurchaseTrue : null}
				>
					{isItemInCart ? 'Отменить' : 'В Корзину'}
				</Button>
			)}

			<Toaster reverseOrder={false} />
		</span>
	)
}
