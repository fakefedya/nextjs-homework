'use client'

import { Heading } from '@/components/ui/Heading/Heading'
import { PostProps } from '@/interfaces/post.interface'

import styles from './PostPageWrapper.module.css'
import { Likes } from '@/components/ui/Likes/Likes'
import Image from 'next/image'
import { CommentProps } from '@/interfaces/comment.interface'
import { Like } from '@/components/ui/Like/Like'
import { CommentForm } from '../CommentForm/CommentForm'

interface PostPageWrapperProps {
	post: PostProps
	comments: CommentProps[]
}

export function PostPageWrapper({ post, comments }: PostPageWrapperProps) {
	return (
		<>
			<div className={styles.header}>
				<Heading>{post.title}</Heading>
				<div className={styles.postInformation}>
					<div className={styles.userId}>USERID = {post.userId}</div>
					{post.id && <div className={styles.id}>ID = {post.id}</div>}
					<Likes count={16} />
				</div>
				<div className={styles.imageWrapper}>
					<Image
						src={'/images/post-image.png'}
						alt='Изображение'
						height={440}
						width={687}
					/>
				</div>
				<div className={styles.description}>{post.body}</div>
				<div className={styles.like}>
					<span>Понравилось? Жми</span>
					<Like
						isLiked={false}
						postId={post.id}
						onLikeToggle={function (postId: number, isLiked: boolean): void {}}
					/>
				</div>
			</div>
			{comments.length > 0 ? (
				<div className={styles.comments}>
					<Heading>Комментарии</Heading>
					<div className={styles.commentsWrapper}>
						{comments.map((c) => (
							<div key={c.id} className={styles.comment}>
								<div className={styles.commentHeader}>
									<div className={styles.commentName}>{c.name}</div>
									<div className={styles.commentEmail}>{c.email}</div>
								</div>
								<div className={styles.commentBody}>{c.body}</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<div>Комментарии отсутствуют</div>
			)}
			<CommentForm postId={post.id} />
		</>
	)
}
