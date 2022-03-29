import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyCgZIDkkwa7T0q9veI1innzYPM4tswqyzw',
	authDomain: 'my-easy-store.firebaseapp.com',
	projectId: 'my-easy-store',
	storageBucket: 'my-easy-store.appspot.com',
	messagingSenderId: '474871409233',
	appId: '1:474871409233:web:89d63bc7ba9f6eb1fa2670',
}

export const app = initializeApp(firebaseConfig)
export const db = getDatabase()
