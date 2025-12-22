import { PostProps } from '@/interfaces/post.interface'

import styles from './Post.module.css'
import Link from 'next/link'
import { API } from '@/lib/api'

export function Post({ ...props }: PostProps) {
	return (
		<article className={styles.post}>
			<span className={styles.userId}>{props.userId}</span>
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.body}>{props.body}</p>
			<Link href={`/posts/${props.id}`}>Читать</Link>
		</article>
	)
}
