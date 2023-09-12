import HeaderTitle from '@/components/header';
import ModeButton from './components/ModeButton';

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
				{/* <ModeButton>{`Guess the Flag`}</ModeButton>
				<ModeButton>{`Guess the Capital`}</ModeButton>
				<ModeButton>{`Population Higher or Lower`}</ModeButton>
				<ModeButton>{`Guess the Country`}</ModeButton> */}
			</div>
		</main>
	);
}
