import { Heading } from '@/components/ui/Heading/Heading'
import { PostProps } from '@/interfaces/post.interface'

import styles from './PostPageWrapper.module.css'
import { Likes } from '@/components/ui/Likes/Likes'
import Image from 'next/image'

interface PostPageWrapperProps {
	post: PostProps
}

export function PostPageWrapper({ post }: PostPageWrapperProps) {
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
				<div className={styles.like}></div>
			</div>
		</>
	)
}
