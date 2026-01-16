import { CommentProps } from '@/interfaces/comment.interface'
import { API } from './api'

export async function getCommentByPostId(
	id: string,
): Promise<CommentProps[] | null> {
	const res = await fetch(`${API.comments.list}?postId=${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		next: { revalidate: 10 },
	})
	if (!res.ok) return null

	return res.json()
}
