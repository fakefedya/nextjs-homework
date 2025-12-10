import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Мой блог',
	description: 'Описание к главной странице блога',
}

const openSans = Open_Sans({
	subsets: ['cyrillic'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={openSans.className}>
				<div className='page-wrapper'>
					<header className='header'>
						<div className='header-container'>
							<span className='header-logo'>.my_blog</span>
							<Image
								src='/icons/github.svg'
								width={24}
								height={24}
								alt='Иконка'
							/>
						</div>
					</header>
					{children}
				</div>
			</body>
		</html>
	)
}
