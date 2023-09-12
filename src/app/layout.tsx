import './globals.css';
import type { Metadata } from 'next';
import { Comic_Neue } from 'next/font/google';
import { Luckiest_Guy } from 'next/font/google';
import Background from './(index)/components/Background';

const comicNeue = Comic_Neue({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	variable: '--font-comic-neue',
});

const luckiestGuy = Luckiest_Guy({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	variable: '--font-luckiest-guy',
});

export const metadata: Metadata = {
	title: 'Country Trivia | Guess the country!',
	description: 'Guess the country!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${comicNeue.variable} ${luckiestGuy.variable}`}
		>
			<body className="relative">
				<Background />
				{children}
			</body>
		</html>
	);
}
