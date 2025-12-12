'use client'

import { ButtonHTMLAttributes, useState } from 'react'
import cn from 'classnames'
import styles from './Like.module.css'
import LikeIcon from './like.svg'

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLiked: boolean
}

export const Like: React.FC<LikeProps> = ({ isLiked, ...props }) => {
	const [isActive, setIsActive] = useState<boolean>(isLiked)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		// Функция для ПАТЧ, на данном этапе мы еще не прошли подобное в курсе
		setIsActive((prev) => !prev)
	}

	return (
		<button
			onClick={handleClick}
			className={cn(styles.likeButton, {
				[styles.liked]: isActive,
			})}
			{...props}
		>
			<LikeIcon />
		</button>
	)
}
