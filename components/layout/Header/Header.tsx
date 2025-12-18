'use client'

import Image from 'next/image'
import styles from './Header.module.css'
import { useResource } from '@/context/ResourceContext'

interface HeaderProps {
	classname?: string
}

export function Header({ ...props }: HeaderProps) {
	const { resourceUrl } = useResource()
	return (
		<header {...props} className={styles.header}>
			<div className={styles.headerContainer}>
				<span className={styles.headerLogo}>.my_blog</span>
				<a href={resourceUrl} target='_blank'>
					<Image src='/icons/github.svg' width={24} height={24} alt='Иконка' />
				</a>
			</div>
		</header>
	)
}
