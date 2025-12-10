import cn from 'classnames'
import styles from './Card.module.css'
import Image from 'next/image'
import { Likes } from '../Likes/Likes'
import Link from 'next/link'

interface CardProps {
	theme: string
	timestamp: string
	likesCount: number
	heading: string
	paragraph: string
	timeToRead: string
	imageSRC: string
	link: string
	classname?: string
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
	return (
		<article className={cn(styles.card, props.classname)}>
			<div className={styles.container}>
				<div className={styles.imageWrapper}>
					<Image
						src={'/images/css-grid.png'}
						alt='Изображение'
						width={300}
						height={192}
					/>
				</div>
				<div className={styles.textWrapper}>
					<div className={styles.header}>
						<div className={styles.headerLeft}>
							<span className={styles.theme}>{props.theme}</span>
							<span className={styles.timestamp}>{props.timestamp}</span>
						</div>
						<div className={styles.headerRight}>
							<Likes count={props.likesCount} />
						</div>
					</div>
					<div className={styles.heading}>{props.heading}</div>
					<div className={styles.paragraph}>{props.paragraph}</div>
					<div className={styles.footer}>
						<span className={styles.time}>{props.timeToRead}</span>
						<Link className={styles.link} href={props.link}>
							<span className={styles.linkText}>Читать</span>
							<Image
								src={'/icons/arrow.svg'}
								alt='Иконка стрелки'
								width={20}
								height={20}
							/>
						</Link>
					</div>
				</div>
			</div>
		</article>
	)
}
