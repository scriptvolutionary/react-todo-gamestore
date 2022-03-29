import { useState, useEffect } from 'react'

export const calcTotalPrice = items =>
	items.reduce((acc, item) => (acc += item.price), 0)

export const enumerate = (num, dec) => {
	if (num > 100) num = num % 100
	if (num <= 20 && num >= 10) return dec[2]
	if (num > 20) num = num % 10
	return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2]
}

function getStorageValue(key, defaultValue) {
	const saved = localStorage.getItem(key)
	const initial = JSON.parse(saved)
	return initial || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
