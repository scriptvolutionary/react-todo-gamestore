import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/blocks/Layout'
import { HomeView } from './views/HomeView'
import { CatalogView } from './views/CatalogView'
import { GameView } from './views/GameView'
import { HelpView } from './views/HelpView'
import { FeedbackView } from './views/FeedbackView'
import { OrderView } from './views/OrderView'
import { AuthView } from './views/AuthView'
import { RegView } from './views/RegView'
import { ProfileView } from './views/ProfileView'
import { AgreementView } from './views/AgreementView'
import { AdminView } from './views/AdminView'

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomeView />} />

					<Route path='/catalog' element={<CatalogView />} />
					<Route path='/catalog/game/:title' element={<GameView />} />

					{/* <Route path='/contacts' element={<ContactsVies />} /> */}
					<Route path='/help' element={<HelpView />} />
					<Route path='/feedback' element={<FeedbackView />} />

					<Route path='/order' element={<OrderView />} />

					<Route path='/auth' element={<AuthView />} />
					<Route path='/reg' element={<RegView />} />

					<Route path='/agreement' element={<AgreementView />} />

					<Route path='/admin' element={<AdminView />} />
					<Route path='/profile' element={<ProfileView />} />
					{/* <Route path='/profile/:username' element={<OtheProfilesView />} /> */}
				</Route>
			</Routes>
		</div>
	)
}
