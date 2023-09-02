import './globals.css';
import type { Metadata } from 'next';
import { Comic_Neue } from 'next/font/google';
import Background from './(index)/components/Background';
const comicNeue = Comic_Neue({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	variable: '--font-comic-neue',
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
		<html lang="en" className={comicNeue.variable}>
			<body className="relative">
				<Background />
				{children}
			</body>
		</html>
	);
}
