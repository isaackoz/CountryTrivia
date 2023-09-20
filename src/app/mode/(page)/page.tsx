import HeaderTitle from '@/components/header';
import ModeButton from '../components/ModeButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Choose your gamemode | CountryBase',
	description: 'Choose your gamemode!',
};

export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen flex-col w-full">
			<HeaderTitle>{`Choose your gamemode`}</HeaderTitle>
			<div className="grid grid-cols-2 gap-8">
				<ModeButton
					src="/highlow.png"
					title="Population Higher or Lower"
					subtitle="Guess the population of a country"
				/>
				<ModeButton
					src="/cap.png"
					title="Guess The Capital"
					subtitle="Guess the capital of a country"
				/>
				<ModeButton
					src="/general_trivia.png"
					title="General Trivia"
					subtitle="Guess general trivia about a country"
				/>
				{/* <ModeButton>{`Guess the Flag`}</ModeButton>
				<ModeButton>{`Guess the Capital`}</ModeButton>
				<ModeButton>{`Population Higher or Lower`}</ModeButton>
				<ModeButton>{`Guess the Country`}</ModeButton> */}
			</div>
		</main>
	);
}
