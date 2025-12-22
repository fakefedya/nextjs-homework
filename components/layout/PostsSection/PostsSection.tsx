import { getPosts } from '@/lib/posts'
import { Post } from '../Post/Post'

import styles from './PostsSection.module.css'

export async function PostsSection() {
	const posts = await getPosts()

	return (
		<section>
			<div className={styles.grid}>
				{posts.map((el) => (
					<Post
						key={el.id}
						id={el.id}
						userId={el.userId}
						title={el.title}
						body={el.body}
					/>
				))}
			</div>
		</section>
	)
}
