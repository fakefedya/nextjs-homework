import Image from 'next/image'
import styles from './Header.module.css'

interface HeaderProps {
	classname?: string
}

export function Header({ ...props }: HeaderProps) {
	return (
		<header {...props} className={styles.header}>
			<div className={styles.headerContainer}>
				<span className={styles.headerLogo}>.my_blog</span>
				<a href='/' target='_blank'>
					<Image src='/icons/github.svg' width={24} height={24} alt='Иконка' />
				</a>
			</div>
		</header>
	)
}
