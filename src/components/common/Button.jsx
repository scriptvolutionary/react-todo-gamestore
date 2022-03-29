import React from 'react'
import classNames from 'classnames'

export const Button = ({ onClick, type, children }) => {
	const btnClass = classNames({
		btn: true,
		'btn btn-disabled btn-sm rounded-md text-base-current': type === 'disabled',
		'btn btn-default btn-sm rounded-md': type === 'secondary',
		'btn btn-primary btn-sm rounded-md': type === 'primary',
	})

	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	)
}
