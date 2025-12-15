import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header/Header'

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
				<div className='app'>
					<Header />
					<main>
						<div className='page-wrapper'>{children}</div>
					</main>
				</div>
			</body>
		</html>
	)
}
