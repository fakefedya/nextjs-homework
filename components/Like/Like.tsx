'use client'

import { ButtonHTMLAttributes, useState } from 'react'
import cn from 'classnames'
import styles from './Like.module.css'
import LikeIcon from './like.svg'

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLiked: boolean
	onToggle: () => void
}

export const Like: React.FC<LikeProps> = ({ isLiked, onToggle, ...props }) => {
	const [isActive, setIsActive] = useState<boolean>(isLiked)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		onToggle()
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
