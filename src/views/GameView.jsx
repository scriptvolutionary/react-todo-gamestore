import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaRubleSign } from 'react-icons/fa'
import { GamePurchase } from '../components/blocks/GamePurchase'

export const GameView = () => {
	const game = useSelector(state => state.games.currentGame)

	if (!game) return null

	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
						<li>
							<Link to='/catalog'>Каталог</Link>
						</li>
						<li>
							<Link to='/catalog/game/:title'>{game.title}</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mb-8'>
				<div class='flex w-full'>
					<div class='grid h-full w-3/4 flex-grow card rounded-md bg-base-300 place-items-center shadow-xl '>
						<iframe
							className='w-full h-[600px]'
							src={game.video}
							title={game.title}
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						/>
					</div>
					<div class='divider divider-horizontal'>{game.id}</div>
					<div class='grid h-full w-1/4 rounded-md flex-grow card  place-items-center '>
						<div className='flex justify-between h-full flex-col'>
							<div className='flex flex-col gap-4'>
								<span>
									<img src={game.image} alt={game.title} />
								</span>
								<span className='card-title font-semibold text-2xl block'>
									{game.title}
								</span>
								<span className='flex items-center gap-2 opacity-75 flex-wrap'>
									{game.genres.map(genres => (
										<p>{genres}</p>
									))}
								</span>
								<span className='text-lg'>
									<p className='text-justify'>{game.description}</p>
								</span>
							</div>
							<div className='mt-2'>
								<span className='flex items-center gap-2 justify-end'>
									<span className='uppercase font-semibold flex items-center'>
										{game.price} <FaRubleSign size={15} />
									</span>
									<GamePurchase game={game} key={game.id} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mb-8'>
				<div>
					<h2 className='mb-2 uppercase card-title'>Рейтинг игры</h2>
				</div>
				<div class='rating rating-lg p-0 m-0'>
					<input type='radio' name='rating-9' class='rating-hidden' />
					<input type='radio' name='rating-9' class='mask mask-star-2' />
					<input
						type='radio'
						name='rating-9'
						class='mask mask-star-2'
						checked
					/>
					<input
						type='radio'
						name='rating-9'
						class='mask mask-star-2'
						checked
					/>
					<input
						type='radio'
						name='rating-9'
						class='mask mask-star-2'
						checked
					/>
					<input
						type='radio'
						name='rating-9'
						class='mask mask-star-2'
						checked
					/>
				</div>
			</div>
		</section>
	)
}
