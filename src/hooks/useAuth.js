import { useSelector } from 'react-redux'

export function useAuth() {
	const { email, token, id, role } = useSelector(state => state.user)

	if (email === 'admin@example.com') {
		const role = 0
	} else {
		const role = 1
	}
	return {
		isAuth: !!email,
		email,
		token,
		id,
	}
}
