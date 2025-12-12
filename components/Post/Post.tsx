'use client'

import { Like } from '../Like/Like'

export const Post: React.FC = () => {
	const handleToggleLike = async () => {
		console.log('PATCH')
		try {
			await fetch('https://jsonplaceholder.typicode.com/posts/id', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
			})
		} catch (e) {
			// 3) откат при ошибке
		}
	}

	return <Like onToggle={handleToggleLike} isLiked={false} />
}
