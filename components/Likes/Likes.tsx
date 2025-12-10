import cn from 'classnames'
import Image from 'next/image'
import styles from './Likes.module.css'

interface LikesProps {
	count: number
	classname?: string
}

export const Likes: React.FC<LikesProps> = ({
	count = 0,
	classname,
	...props
}) => {
	return (
		<div className={cn(styles.like, classname)} {...props}>
			<span>{count}</span>
			<Image
				className={styles.icon}
				src={'/icons/like.svg'}
				width={16}
				height={16}
				alt='Иконка лайка'
			/>
		</div>
	)
}
