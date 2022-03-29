import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Form } from '../components/blocks/Form'
import { setUser } from '../store/slices/userSlice'

export const RegView = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				navigate('/auth')
			})
			.catch(alert('Пожалуйста, проверьте консоль!'))
	}

	return (
		<Form
			breadTitle='Регистрация'
			title='Регистрация'
			handleClick={handleRegister}
			linkTo='/auth'
			linkTitle='Авторизоваться'
			btn='Регистрация'
		/>
	)
}
