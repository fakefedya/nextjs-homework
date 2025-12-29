import { ReactNode } from 'react'
import styles from './Heading.module.css'

interface HeadingProps {
	tag?: 'h1' | 'h2'
	children: ReactNode
}

export function Heading({ tag = 'h1', children }: HeadingProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>
		case 'h2':
			return <h2 className={styles.h2}>{children}</h2>
		default:
			return <></>
	}
}
