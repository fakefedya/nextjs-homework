import { PostProps } from '@/interfaces/post.interface'
import { API } from './api'

export async function getPostById(id: string): Promise<PostProps | null> {
	const res = await fetch(`${API.posts.list}/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		next: { revalidate: 10 },
	})
	if (!res.ok) return null

	return res.json()
}
