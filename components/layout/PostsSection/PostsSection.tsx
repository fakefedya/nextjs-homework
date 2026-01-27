import { getPosts } from '@/lib/posts'
import { Post } from '../Post/Post'

import styles from './PostsSection.module.css'
import { itemVariants, MotionItem, MotionWrapper } from './MotionWrapper'

export async function PostsSection() {
	const posts = await getPosts()

	return (
		<section>
			<MotionWrapper>
				<div className={styles.grid}>
					{posts.map((el) => (
						<MotionItem key={el.id} variants={itemVariants}>
							<Post {...el} />
						</MotionItem>
					))}
				</div>
			</MotionWrapper>
		</section>
	)
}
