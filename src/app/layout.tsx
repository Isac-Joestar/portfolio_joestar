import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Isac Joestar - Portfólio',
	description: 'Desenvolvedor front-end',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<head>
			   <link rel="shortcut icon" type="imagex/png" href="/images/logo/favicon_32x32.png"/>
      		</head>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
