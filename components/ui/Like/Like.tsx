'use client'

import { ButtonHTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Like.module.css'
import LikeIcon from './like.svg'

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLiked: boolean
	postId: number
	onLikeToggle: (postId: number, isLiked: boolean) => void
}

export function Like({ isLiked, onLikeToggle, postId, ...props }: LikeProps) {
	const [isActive, setIsActive] = useState<boolean>(isLiked)

	useEffect(() => {
		setIsActive(isLiked)
	}, [isLiked])

	const handleClick = () => {
		const newState = !isActive
		setIsActive(newState)
		onLikeToggle(postId, newState)
	}

	return (
		<button
			type='button'
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
