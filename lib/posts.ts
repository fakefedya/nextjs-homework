import { PostProps } from '@/interfaces/post.interface'
import { API } from './api'

export async function getPosts(): Promise<PostProps[]> {
	const res = await fetch(API.posts.list, {
		headers: {
			'Content-Type': 'application/json',
		},
		next: { revalidate: 10 },
	})

	return res.json()
}
