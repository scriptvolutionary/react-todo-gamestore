import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Form } from '../components/blocks/Form'
import { setUser } from '../store/slices/userSlice'
import { useAuth } from '../hooks/useAuth'

export const AuthView = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				navigate('/catalog')
			})
			.catch(e => console.log(e))
	}

	return (
		<Form
			breadTitle='Авторизация'
			title='Авторизация'
			handleClick={handleLogin}
			linkTo='/reg'
			linkTitle='Зарегистрироваться'
			btn='Войти'
		/>
	)
}
