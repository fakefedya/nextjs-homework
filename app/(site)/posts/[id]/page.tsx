import { PostPageWrapper } from '@/components/layout/PostPageWrapper/PostPageWrapper'
import { getCommentByPostId } from '@/lib/commentByPostId'
import { getPostById } from '@/lib/postById'
import { getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const posts = await getPosts()

	return posts.map((p) => ({
		id: String(p.id),
	}))
}

export default async function PostPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const post = await getPostById((await params).id)
	if (!post) notFound()
	const comments = await getCommentByPostId((await params).id)

	return (
		<>
			<PostPageWrapper post={post} comments={comments ?? []} />
		</>
	)
}
