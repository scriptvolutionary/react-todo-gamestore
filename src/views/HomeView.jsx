import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export const HomeView = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<section>
			<div className='mb-8'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li>
							<Link to='/'>Главная страница</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mb-8'>
				<Slider {...settings}>
					<div>
						<div className='card w-full mx-auto bg-base-100 shadow-lg image-full'>
							<figure>
								<img
									className='w-full'
									src='https://media0.giphy.com/media/iAIC2nJOvoTLMcx9Vy/giphy.gif?cid=ecf05e472o4pxe2tdx11yqphft3d95trg8r3gc13mlgm6kjq&rid=giphy.gif&ct=g'
									alt='Elden Ring'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title uppercase'>Elden Ring</h2>
								<p>Новинка</p>
								<div className='card-actions justify-end'>
									<Link className='btn btn-primary' to='/catalog'>
										Подробнее
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='card w-full mx-auto bg-base-100 shadow-lg image-full'>
							<figure>
								<img
									className='w-full'
									src='https://media1.giphy.com/media/1FRPhYMOabr6uXerqK/giphy.gif?cid=ecf05e47b2f2d2eba6e53293937ab55408f48574395024f5&rid=giphy.gif&ct=g'
									alt='Horizon Forbidden West'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title uppercase'>Horizon Forbidden West</h2>
								<p>Новинка</p>
								<div className='card-actions justify-end'>
									<Link className='btn btn-primary' to='/catalog'>
										Подробнее
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='card w-full mx-auto bg-base-100 shadow-lg image-full'>
							<figure>
								<img
									className='w-full'
									src='https://media3.giphy.com/media/ASH3GhgVVOW8mlCJdU/giphy.gif?cid=ecf05e47srvcae7x20brzv3x96izcj3q21zw41u07a6ub26e&rid=giphy.gif&ct=g'
									alt='Dying Light 2 Stay Home'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title uppercase'>
									Dying Light 2 Stay Home
								</h2>
								<p>Новинка</p>
								<div className='card-actions justify-end'>
									<Link className='btn btn-primary' to='/catalog'>
										Подробнее
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>

			<div className='mb-8'>
				<div class='stats shadow bg-base-200 rounded-md w-full'>
					<div class='stat place-items-center hover:bg-base-300 transition-all delay-[35ms] easy-in-out'>
						<div class='stat-title'>Скидки</div>
						<div class='stat-value'>Круглый год</div>
					</div>

					<div class='stat place-items-center hover:bg-base-300 transition-all delay-[35ms] easy-in-out'>
						<div class='stat-title'>Поддержка</div>
						<div class='stat-value text-secondary'>24/7</div>
					</div>

					<div class='stat place-items-center hover:bg-base-300 transition-all delay-[35ms] easy-in-out'>
						<div class='stat-title'>Комьюнити</div>
						<div class='stat-value'>Активное</div>
					</div>

					<div class='stat place-items-center hover:bg-base-300 transition-all delay-[35ms] easy-in-out'>
						<div class='stat-title'>Любовь</div>
						<div class='stat-value'>К играм</div>
					</div>
				</div>
			</div>
		</section>
	)
}
