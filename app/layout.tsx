import type { Metadata } from 'next'
import { Noto_Sans, Open_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Мой блог',
	description: 'Описание к главной странице блога',
}

const notoSans = Noto_Sans({
	subsets: ['cyrillic'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={notoSans.className}>{children}</body>
		</html>
	)
}
