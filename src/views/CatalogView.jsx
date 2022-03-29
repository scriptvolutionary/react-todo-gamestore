import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GameItem } from '../components/blocks/GameItem'

export const CatalogView = () => {
	const [games, setGames] = useState([])

	useEffect(() => {
		fetch(
			'https://my-easy-store-default-rtdb.europe-west1.firebasedatabase.app/items.json'
		)
			.then(res => res.json())
			.then(result => {
				setGames(result)
			})
	}, [])

	const [searchValue, setSearchValue] = useState(() => {
		const saved = localStorage.getItem('search')
		const initialValue = JSON.parse(saved)
		return initialValue || ''
	})

	const [filtered, setFiltered] = useState(() => {
		const saved = localStorage.getItem('filter')
		const initialValue = JSON.parse(saved)
		return initialValue || games
	})

	const onChangeSearchInput = e => {
		setSearchValue(e.target.value)
	}

	function gamesFilterCategory(status) {
		if (status === 'default') {
			setFiltered(games)
		} else {
			let filter = [...games].filter(item => item.status === status)
			setFiltered(filter)
		}
	}

	useEffect(() => {
		localStorage.setItem('search', JSON.stringify(searchValue))
	}, [searchValue])

	useEffect(() => {
		localStorage.setItem('filter', JSON.stringify(filtered))
	}, [filtered])

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
					</ul>
				</div>
			</div>
			<div className='mb-8'>
				<div className='flex gap-4 xs:flex-wrap sm:flex-wrap'>
					<div className='w-1/5 xs:w-full sm:w-full md:w-2/5 lg:w-2/6 2lg:w-1/4'>
						<ul className='menu bg-base-200 rounded-box'>
							<div tabIndex='0' className='collapse '>
								<input type='checkbox' />
								<div className='collapse-title font-medium'>Найти товар</div>
								<div className='collapse-content pt-1'>
									<div className='form-control'>
										<input
											type='text'
											placeholder='Название..'
											className='input input-bordered '
											onChange={onChangeSearchInput}
											value={searchValue}
										/>
									</div>
								</div>
							</div>
							<div tabIndex='0' className='collapse '>
								<input type='checkbox' />
								<div className='collapse-title font-medium'>Фильтры</div>
								<div className='collapse-content'>
									<div tabIndex='0' className='collapse'>
										<input type='checkbox' />
										<div className='collapse-title'>Категория</div>
										<div className='collapse-content'>
											<div className='form-control'>
												<label className='label cursor-pointer'>
													<button
														className='btn btn-ghost btn-sm btn-block normal-case justify-start'
														onClick={() => gamesFilterCategory('default')}
													>
														Все игры
													</button>
												</label>
												<label className='label cursor-pointer'>
													<button
														className='btn btn-ghost btn-sm  btn-block normal-case justify-start'
														onClick={() => gamesFilterCategory('new')}
													>
														Новинки
													</button>
												</label>
												<label className='label cursor-pointer'>
													<button
														className='btn btn-ghost btn-sm  btn-block normal-case justify-start'
														onClick={() => gamesFilterCategory('popular')}
													>
														Популярные
													</button>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ul>
					</div>
					{/* Товары */}
					<div className='w-4/5 xs:w-full sm:w-full'>
						<div className='flex gap-4 justify-between xs:flex-wrap sm:grid md:grid lg:grid grid-cols-2 lg:flex-wrap 2lg:grid xl:grid 2xl:grid xl:grid-cols-3 xll:grid xll:grid-cols-3 2xl:grid-cols-3'>
							{filtered
								.filter(item => item.title.includes(searchValue))
								.map(game => (
									<GameItem game={game} key={game.id} />
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
