import { PostProps } from '@/interfaces/post.interface'

import styles from './Post.module.css'

export function Post({ ...props }: PostProps) {
	return (
		<article className={styles.post}>
			<span className={styles.userId}>{props.userId}</span>
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.body}>{props.body}</p>
		</article>
	)
}
