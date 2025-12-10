import { Card } from '@/components/Card/Card'
import styles from './page.module.css'

export default function Home() {
	const cardsInfo = [
		{
			id: 1,
			theme: 'Front-end',
			timestamp: '1 месяц назад',
			likesCount: 1,
			heading: 'Как работать с CSS Grid',
			paragraph:
				'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
			timeToRead: '3 минуты',
			imageSRC: './images/css-grid.png',
			link: '/123',
		},
		{
			id: 2,
			theme: 'Front-end',
			timestamp: '1 месяц назад',
			likesCount: 4,
			heading: 'Как работать с CSS Grid',
			paragraph:
				'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
			timeToRead: '3 минуты',
			imageSRC: './images/css-grid.png',
			link: '/',
		},
		{
			id: 3,
			theme: 'Front-end',
			timestamp: '1 месяц назад',
			likesCount: 4,
			heading: 'Как работать с CSS Grid',
			paragraph:
				'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
			timeToRead: '3 минуты',
			imageSRC: './images/css-grid.png',
			link: '/',
		},
	]

	return (
		<section className={styles.section}>
			<div className={styles.cardGrid}>
				{cardsInfo.map((card) => (
					<Card
						key={card.id}
						theme={card.theme}
						timestamp={card.timestamp}
						likesCount={card.likesCount}
						heading={card.heading}
						paragraph={card.paragraph}
						timeToRead={card.timeToRead}
						imageSRC={card.imageSRC}
						link={card.link}
					/>
				))}
			</div>
		</section>
	)
}
