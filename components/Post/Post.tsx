'use client'

import { Like } from '../Like/Like'

export const Post: React.FC = () => {
	const handleToggleLike = async (postId: number, isLiked: boolean) => {
		console.log('PATCH')
		try {
			await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ liked: isLiked }),
			})
		} catch (e) {
			// 3) откат при ошибке
		}
	}

	return <Like onLikeToggle={handleToggleLike} postId={1} isLiked={false} />
}
