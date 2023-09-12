import HeaderTitle from '@/components/header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Home() {
	return (
		<main className="min-h-screen w-full flex flex-col items-center justify-center">
			<HeaderTitle>{`Country Trivia`}</HeaderTitle>
			<Link href="/mode">
				<Button variant={'cartoon'} hsl={'200'} className="w-48">
					Play
				</Button>
			</Link>
		</main>
	);
}
