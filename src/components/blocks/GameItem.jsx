import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { FaRubleSign } from 'react-icons/fa'

import { GamePurchase } from './GamePurchase'
import { setCurrentGame } from '../../store/games/reducer'

export const GameItem = ({ game }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleCurrentGame = () => {
		dispatch(setCurrentGame(game))
		navigate(`/catalog/game/${game.title}`)
	}
	return (
		<div>
			<div
				className='card w-full h-full shadow-xl image-full cursor-pointer rounded-lg transition-all opacity-[85%] hover:opacity-100'
				onClick={handleCurrentGame}
			>
				<figure>
					<img className='rounded-box' src={game.image} alt={game.title} />
				</figure>
				<div className='card-body p-4 gap-4 justify-between'>
					<h2 className='card-title'>{game.title}</h2>
					<div className='flex justify-center gap-2 items-center text-sm'>
						{game.genres.map(genre => (
							<p className='opacity-75 hover:opacity-100'>{genre}</p>
						))}
					</div>
					<div className='card-actions items-center font-medium justify-end'>
						<span className='uppercase font-semibold flex items-center'>
							{game.price} <FaRubleSign size={15} />
						</span>
						<GamePurchase game={game} key={game.id} />
					</div>
				</div>
			</div>
		</div>
	)
}
